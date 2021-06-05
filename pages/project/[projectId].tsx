import Container from "templates/coordinategrid/Container";
import useSWR from "swr";

const fetcher = (args) => {
  return fetch(args).then((res) => res.json());
};

const ProjectPage = () => {
  const { data, error } = useSWR("/api/project", fetcher);
  const { data: testData } = useSWR(
    "/api/data/schools/philadelphia/graduation_rates"
  );

  console.log("testData", testData);

  if (!data) {
    return <div>Loading Project</div>;
  }
  return <Container data={data} />;
};

export default ProjectPage;
