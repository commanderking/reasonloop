import CoordinateGridContainer from "templates/coordinategrid/Container";
import useSWR from "swr";

const fetcher = (args) => {
  return fetch(args).then((res) => res.json());
};

const ProjectPage = () => {
  const { data, error } = useSWR("/api/project", fetcher);

  if (!data) {
    return <div>Loading Project</div>;
  }

  if (data.projectType === "COORDINATE_GRID") {
    return <CoordinateGridContainer data={data} />;
  }

  return "No Project Found";
};

export default ProjectPage;
