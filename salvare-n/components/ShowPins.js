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
  const [cont,] = useAppContext();
  const [trashcans, setTrashcans] = useAppContext();
  const [pins, setPins] = useState([]);
  const [mapCenter, ] = useState([35.657580, 139.701964]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active_pin, setActive_pin] = useState(null);

  const [id,setId]=useState(0);

  const handleMarkerClick = () => {
    setIsModalOpen(true);
  };

  // モーダルが閉じられた際のハンドラ
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    //非同期処理をUseEffect内で行う場合は、async/awaitを使用する
    const get_variable = async () => {
     if (cont) {
       console.log(await trashcans.getTrashCans(), "from pin")
       setPins(await trashcans.getTrashCans())
    }
    }
    get_variable();
  }, [cont])

  return (
    <>
      <MapContainer
        center={mapCenter}
        zoom={16}
        style={{ height: '87vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; OpenStreetMap contributors"
        />

        {pins.map((pin, index) => (
          <Marker
            key={index}
            position={[parseFloat(pin.trashCanLatitude._hex / 100000000000000), parseFloat(pin.trashCanLongitude._hex / 100000000000000)]}
            eventHandlers={{
              click: () => {
                handleMarkerClick();
                setActive_pin(pin);
                console.log(pin);
              },
            }}
          >
          </Marker>
        ))}
        {/* {isModalOpen && (<PopupContent pin={active_pin} cont={cont} setId={setId} isOpen={isModalOpen} closeModal={closeModal}/>)} */}
      </MapContainer>
    </>);
};

export default ShowPins;
