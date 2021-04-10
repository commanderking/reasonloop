const mockProjectData = {
  id: "1",
  name: "Cell Towers in Camden, NJ",
  avatar: "robot_1",
  overviewText:
    "Government officials of the new Martian outpost are determining how many cell towers are required to cover the needs of their residents. Houses within 4 kilometers of each cell tower can receive cell coverage. How many cell towers should they build and where?",
  requirements: [
    "Each unit on the map represents 1 km ",
    "Each house represents a small neighborhood with 20-30 households",
    "Residents have written to the governor that they prefer cell towers be built at least 1 km away from their neighborhood.",
  ],
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
  phaseContent: {
    PREDICTION: {
      solutionPrompt: "What are your initial thoughts?",
    },
    FIRST_ATTEMPT: {
      solutionPrompt: "What are your initial thoughts?",
    },
    FOLLOW_UP_ATTEMPT: {
      solutionPrompt: "What are your initial thoughts?",
    },
    FINAL_ANSWER: {
      solutionPrompt: "What are your initial thoughts?",
    },
  },
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
