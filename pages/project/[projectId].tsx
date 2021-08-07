import CoordinateGridContainer from "templates/coordinategrid/Container";
import data from "data/celltower/camden.json";

const ProjectPage = () => {
  if (!data) {
    return <div>Loading Project</div>;
  }

  if (data.projectType === "COORDINATE_GRID") {
    return <CoordinateGridContainer data={data} />;
  }

  return "No Project Found";
};

export default ProjectPage;
