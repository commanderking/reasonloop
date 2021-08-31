import CoordinateGridContainer from "templates/coordinategrid/Container";
import data from "data/celltower/camden.json";
import { gql, useQuery } from "@apollo/client";

const ACTIVITIES = gql`
  query Activities {
    activities {
      id
    }
  }
`;

const ProjectPage = () => {
  // Intentionally not using for now - testing production
  const { loading, error, data: test } = useQuery(ACTIVITIES);

  if (!data) {
    return <div>Loading Project</div>;
  }

  if (data.projectType === "COORDINATE_GRID") {
    return <CoordinateGridContainer data={data} />;
  }

  return "No Project Found";
};

export default ProjectPage;
