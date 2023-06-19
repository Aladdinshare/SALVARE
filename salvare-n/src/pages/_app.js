import React, { useEffect, useState } from 'react';
import { AppProvider } from '../context/AppContext';
import Sign from '../../components/Sign'
import Footer from '../../components/Footer';

import '../../components/PopupContent.css'
import '../../components/WorkingContent.css'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [pageHeight, setPageHeight] = useState(0);
  const [cont, setCont] = useState(null);
  const [is_connect, setIs_connect] = useState(true);
  const [chain_id, setChain_id] = useState(null);

  const initialContracts = () => {
    var { Contracts_MetaMask } = require('../contract/contracts')
    return new Contracts_MetaMask(window);
  };

  useEffect(() => {
    setCont(initialContracts());
  }, []);

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

  useEffect(() => {
    //非同期処理をUseEffect内で行う場合は、async/awaitを使用する
    const get_variable = async () => {
     if (cont) {
       setChain_id(await cont.get_chain_id());
       setIs_connect(await cont.isMetaMaskConnected());
    }
    }

    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
    get_variable();
  }, [cont])

  return (
    <div style={{ minHeight: pageHeight, height: "100vh"}}>
      <Sign />
      <AppProvider>
        <Component {...pageProps}/>
        <Footer />
      </AppProvider>
    </div>
  );
}
