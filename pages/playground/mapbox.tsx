import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import highschools from "data/high_school_2020.json";

const initialZoom = 12;
const initialIconWidth = 10;
const minZoom = 10;
const maxZoom = 15;

const minIconSize = 5;
const maxIconSize = 20;

// Icon = 2 * Zoom - 10
//

const MapBox = ({ mapBoxApiKey }) => {
  const [viewport, setViewport] = useState({
    longitude: -75.1652,
    latitude: 39.9526,
    zoom: initialZoom,
  });

  const [iconSize, setIconSize] = useState(initialIconWidth);

  const handleViewPortChange = (viewport) => {
    setViewport(viewport);

    const iconSize = 2 * viewport.zoom - 10;
    setIconSize(Math.round(iconSize));
  };

  const [currentSchoolId, setCurrentSchoolId] = useState(null);

  const currentSchool = highschools.find(
    (school) => school.schoolId == currentSchoolId
  );

  const getIconSize = () => ({
    width: `${iconSize}px`,
    height: `${iconSize}px`,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="600px"
      onViewportChange={handleViewPortChange}
      mapboxApiAccessToken={mapBoxApiKey}
      minZoom={10}
      maxZoom={15}
    >
      {highschools.map((school) => {
        return (
          <Marker longitude={school.longitude} latitude={school.latitude}>
            <img
              onClick={() => setCurrentSchoolId(school.schoolId)}
              {...getIconSize()}
              src="/bus-stop.svg"
            />
          </Marker>
        );
      })}

      {currentSchool && (
        <Popup
          longitude={currentSchool.longitude}
          latitude={currentSchool.latitude}
          onClose={() => setCurrentSchoolId(null)}
          closeButton={true}
          closeOnClick={false}
        >
          <p>{currentSchool.name}</p>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      mapBoxApiKey: process.env.MAPBOX_API_KEY,
    },
  };
};

export default MapBox;