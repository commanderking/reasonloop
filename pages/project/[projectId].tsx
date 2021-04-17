import Container from "templates/coordinategrid/Container";
import useSWR from "swr";

const fetcher = (args) => {
  return fetch(args).then((res) => res.json());
};

const ProjectPage = () => {
  const { data, error } = useSWR("/api/project", fetcher);

  // const solutions = getCompletedSolutions("studentId", 1, true);

  if (!data) {
    return <div>No Project Found</div>;
  }
  return <Container data={data} />;
};

export default ProjectPage;
