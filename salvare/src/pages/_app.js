import React, { useEffect, useState } from 'react';
import Sign from '../../components/Sign'
import Footer from '../../components/Footer';

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [is_connect, setIs_connect] = useState(true);
  const [chain_id, setChain_id] = useState(null);

  const [pageHeight, setPageHeight] = useState(0);

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

  return (
    <div style={{ minHeight: pageHeight, height: "100vh" }}>
      <Sign />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
