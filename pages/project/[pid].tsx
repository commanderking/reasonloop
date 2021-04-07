import Container from "templates/coordinategrid/Container";
import useSWR from "swr";

const fetcher = (args) => fetch(args).then((res) => res.json());

const getCompletedSolutions = (
  studentId: string,
  number: number,
  isMock: boolean
) => {
  if (isMock) {
    return [
      {
        coordinates: [
          { x: -6, y: -7, timestamp: 1617668002942 },
          { x: 0, y: 0, timestamp: 1617668004013 },
          { x: 4, y: 5, timestamp: 1617668004675 },
        ],
      },
      {
        coordinates: [
          { x: -6, y: -7, timestamp: 1617668002942 },
          { x: 0, y: 0, timestamp: 1617668004013 },
          { x: 4, y: 5, timestamp: 1617668004675 },
        ],
      },
      {
        coordinates: [
          { x: -6, y: -7, timestamp: 1617668002942 },
          { x: 0, y: 0, timestamp: 1617668004013 },
          { x: 4, y: 5, timestamp: 1617668004675 },
        ],
      },
    ].slice(0, number);
  }

  return;
};

const ProjectPage = () => {
  const { data, error } = useSWR("/api/project", fetcher);

  const solutions = getCompletedSolutions("studentId", 1, true);
  console.log("solutions", solutions);

  if (!data) {
    return <div>No Project Found</div>;
  }
  return <Container data={data} />;
};

export default ProjectPage;
