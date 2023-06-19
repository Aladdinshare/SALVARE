import { useState } from "react"
import { ethers } from "ethers"

export default function Sign() {
  const [isVerified, setIsVerified] = useState(false)

  const onClick = async () => {
    if (!window.ethereum) {
      console.error('!window.ethereum')
      return
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])

    const signer = await provider.getSigner()
    const message = 'message'
    const address = await signer.getAddress()
    const signature = await signer.signMessage(message)
    const response = await fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ message, address, signature }),
    })

    const body = await response.json()
    setIsVerified(body.isVerified)
  }

  if (isVerified == true) {
    return (
      <>
        <div>Verified!</div>
      </>
    )
  } else {
    return (
      <>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(to bottom, rgba(0, 199, 83, 0.9), rgba(0, 255, 255, 0.9))', zIndex: 9999 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '34px' }}>
            <div onClick={onClick}>ここを押してウォレットを接続してください</div>
          </div>
        </div>
      </>
    )
  }
}
