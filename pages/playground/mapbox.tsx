import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import highschools from "data/high_school_2020.json";

const MapBox = ({ mapBoxApiKey }) => {
  const [viewport, setViewport] = useState({
    longitude: -75.1652,
    latitude: 39.9526,
    zoom: 12,
  });

  const [currentSchoolId, setCurrentSchoolId] = useState(null);

  const currentSchool = highschools.find(
    (school) => school.schoolId == currentSchoolId
  );

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="600px"
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapBoxApiKey}
    >
      {highschools.map((school) => {
        return (
          <Marker
            longitude={school.longitude}
            latitude={school.latitude}
            onClick={() => setCurrentSchoolId(school.schoolId)}
          >
            <img width="20px" height="20px" src="/bus-stop.svg" />
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
