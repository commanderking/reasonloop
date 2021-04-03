const mockProjectData = {
  id: "",
  name: "Cell Towers in Camden, NJ",
  avatar: "robot_1",
  overviewText:
    "The overall goal is to provide cell coverage to as many residents as is reasonable.",
  requirements: ["Requirement 1:", "Requirement 2:", "Requirement 3:"],
  responseFormat: ["COORDINATE_GRID"],
  resources: [
    {
      url: "",
      title: "",
    },
    {
      url:
        "https://www.khanacademy.org/math/basic-geo/basic-geometry-pythagorean-theorem/pythagorean-theorem-distance/v/example-finding-distance-with-pythagorean-theorem",
      title: "Khan Academy",
    },
  ],
};

export default (req, res) => {
  res.status(200).json(mockProjectData);
};
