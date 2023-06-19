import React, { useEffect, useState } from 'react'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Contracts_MetaMask } from '../../contract/contracts';
import Modal_change_network from "../../contract/Modal_change_network";
import Modal_login from "../../contract/Modal_login";
import Footer from '../../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  const [pageHeight, setPageHeight] = useState(0);
  const cont = new Contracts_MetaMask();

  const [is_connect, setIs_connect] = useState(true);
  const [chain_id, setChain_id] = useState(0);

  useEffect(() => {
    //非同期処理をUseEffect内で行う場合は、async/awaitを使用する
    const get_variable = async () => {
      setChain_id(await cont.get_chain_id());
      setIs_connect(await cont.isMetaMaskConnected());
    }

    if ((window as any).ethereum) {
      (window as any).ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      (window as any).ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
    get_variable();
  }, [])

  useEffect(() => {
    const setHeight = () => {
      setPageHeight(window.innerHeight);
    };

    setHeight();

    // ウィンドウのリサイズ時に高さを再計算
    window.addEventListener('resize', setHeight);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  if (is_connect == true && (chain_id as any) == "0x13881") {
    return (
      <div style={{ minHeight: pageHeight, height: "100vh" }}>
        <Component {...pageProps} />
        <Footer />
      </div>
    );
  }
  else {
    return (
      <div className="App">
        {!is_connect && <Modal_login cont={cont} />}
        <Modal_change_network chain_id={chain_id} cont={cont} />
      </div>
    );
  }
}
