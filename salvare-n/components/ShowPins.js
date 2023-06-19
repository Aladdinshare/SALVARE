import React, { useEffect, useState } from 'react';
import { useAppContext } from '../src/context/AppContext';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false, // サーバーサイドレンダリングを無効化
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false, // サーバーサイドレンダリングを無効化
});
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
  ssr: false, // サーバーサイドレンダリングを無効化
});

// import PopupContent from './PopupContent';
// import WorkingContent from './WorkingContent';

const ShowPins = () => {
  useEffect(() => {

  }, []);
  return (<>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={16}
        style={{ height: '100vh', width: '100%' }}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      <Marker position={[51.505, -0.09]} />
      </MapContainer>
  </>);

  // const [cont,] = useAppContext();
  // const [pins, setPins] = useState([]);
  // const [mapCenter,] = useState([35.657580, 139.701964]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [active_pin, setActive_pin] = useState(null);

  // const [id, setId] = useState(0);

  // const handleMarkerClick = () => {
  //   setIsModalOpen(true);
  // };

  // // モーダルが閉じられた際のハンドラ
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // //初回のみ実行
  // useEffect(() => {
  //   const get_variable = async () => {
  //     if (cont) {
  //       if (await cont.isMetaMaskConnected()) {
  //         //値を取得
  //         const _data = await cont.getTrashCans();
  //         setPins(_data);
  //         const _data1 = await cont.getIsWorking();
  //         setId(parseInt(_data1.id._hex));
  //         // console.log(await cont.getTrashCans(),"aaaaaaaaa")
  //       }
  //     }
  //   };
  //   get_variable();
  // }, [cont, setId]);

};

export default ShowPins;
