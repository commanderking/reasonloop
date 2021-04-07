const mockProjectData = {
  id: "1",
  name: "Cell Towers in Camden, NJ",
  avatar: "robot_1",
  overviewText:
    "The overall goal is to provide cell coverage to as many residents as is reasonable.",
  requirements: ["Requirement 1:", "Requirement 2:", "Requirement 3:"],
  projectType: "COORDINATE_GRID",
  projectData: [
    { x: 5, y: 9, iconType: "HOUSE" },
    { x: -5, y: -2, iconType: "HOUSE" },
    { x: -3, y: -4, iconType: "HOUSE" },
    { x: 1, y: -3, iconType: "HOUSE" },
    { x: 3, y: -2, iconType: "HOUSE" },
    { x: 5, y: 4, iconType: "HOUSE" },
    { x: 1, y: 8, iconType: "HOUSE" },
    { x: -2, y: 7, iconType: "HOUSE" },
    { x: 9, y: -9, iconType: "HOUSE" },
  ],
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
