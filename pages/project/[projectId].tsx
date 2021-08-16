import CoordinateGridContainer from "templates/coordinategrid/Container";
import data from "data/celltower/camden.json";
import { gql } from "@apollo/client";

const ACTIVITIES = gql`
  query Activities {
    activities {
      id
    }
  }
`;

const ProjectPage = () => {
  // Comment out until backend is ready
  // const { loading, error, data: test } = useQuery(ACTIVITIES);

  if (!data) {
    return <div>Loading Project</div>;
  }

  if (data.projectType === "COORDINATE_GRID") {
    return <CoordinateGridContainer data={data} />;
  }

  return "No Project Found";
};

export default ProjectPage;
