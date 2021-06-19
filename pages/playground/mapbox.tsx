import { useState, useRef, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const schools = [
  {
    coordinates: [39.95679553, -75.20476311],
    name: "PAUL ROBESON HIGH SCHOOL",
  },
];

const MapBox = ({ mapBoxApiKey }) => {
  const [viewport, setViewport] = useState({
    longitude: -75.1652,
    latitude: 39.9526,
    zoom: 14,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="400px"
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapBoxApiKey}
    >
      {}
      <Marker
        longitude={-75.20476311}
        latitude={39.95679553}
        // offsetLeft={-20}
        // offsetTop={-10}
      >
        <img width="20px" height="20px" src="/bus-stop.svg" />
      </Marker>
    </ReactMapGL>
  );
};

export const getServerSideProps = async () => {
  console.log(process.env.MAPBOX_API_KEY);

  return {
    props: {
      mapBoxApiKey: process.env.MAPBOX_API_KEY,
    },
  };
};

// const MapBox = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-75.1652);
//   const [lat, setLat] = useState(39.9526);
//   const [zoom, setZoom] = useState(13);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [lng, lat],
//       zoom: zoom,
//     });
//   });
//   return (
//     <div>
//       <div
//         ref={mapContainer}
//         style={{ height: "400px" }}
//         className="map-container"
//       />
//     </div>
//   );

export default MapBox;
