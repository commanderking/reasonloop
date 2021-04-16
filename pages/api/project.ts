const mockProjectData = {
  id: "1",
  name: "Project - Cell Towers in Camden, NJ",
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
    FIRST_PROPOSAL: {
      instructions:
        "Nice! You've submitted your initial thoughts. As a next step, review some of the skills that might be helpful to helping your proposal. When you're ready, feel free to submit your first proposal.",
      solutionPrompt: "What are your initial thoughts?",
    },
    MODIFIED_PROPOSAL: {
      instructions:
        "Let's see what other members of the community have submitted",
    },
    FINAL_SOLUTION: {
      solutionPrompt: "FINAL SOLUTION PROPOSAL",
    },
  },
  resources: [
    {
      url:
        "https://www.ixl.com/math/grade-8/find-the-distance-between-two-points",
      title: "IXL",
      description: "Find the distance between two points",
    },
    {
      url:
        "https://www.khanacademy.org/math/basic-geo/basic-geometry-pythagorean-theorem/pythagorean-theorem-distance/v/example-finding-distance-with-pythagorean-theorem",
      title: "Khan Academy",
      description: "Finding distance with Pythagorean theorem",
    },
  ],
};

export default (req, res) => {
  res.status(200).json(mockProjectData);
};
