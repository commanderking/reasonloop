const mockProjectData = {
  id: "1",
  name: "Project - Cell Towers in Camden, NJ",
  avatar: "robot_1",
  // overview:
  //   "Government officials in Camden, NJ are determining how many cell towers are required to cover the needs of their residents. Houses within 4 kilometers of each cell tower can receive cell coverage. How many cell towers should they build and where?",
  requirements: [
    "Each unit on the map represents 1 km ",
    "Residents prefer cell towers be built at least 1 km away from their neighborhood.",
  ],
  overview: `<p>Government officials in Camden, NJ are determining how many cell towers are required to cover the needs of their residents. Houses within 4 kilometers of each cell tower can receive cell coverage. How many cell towers should they build and where?&nbsp;</p>
  <p><strong>Details:</strong></p>
  <ol>
  <li>Each unit on the map represents 1 km.</li>
  <li>Residents prefer cell towers be built at least 1 km away from their neighborhood.&nbsp;</li>
  </ol>`,
  projectType: "COORDINATE_GRID",
  projectData: {
    placedIcons: [
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
    addableIcon: {
      iconType: "CELL_TOWER",
    },
  },
  phaseContent: {
    DEMO: {
      instructions: "",
    },
    PREDICTION: {
      solutionPrompt: "What are your initial thoughts?",
    },
    FIRST_PROPOSAL: {
      instructions:
        "Nice! You've submitted your initial thoughts. As a next step, review some of the skills that might help you improve on your initial proposal. When you're ready, submit your first proposal. Don't worry about getting it perfect. You'll have the chance to modify it!",
      solutionPrompt: "What are your initial thoughts?",
    },
    MODIFY_PROPOSAL: {
      instructions:
        "Your peers and members of the community have also submitted proposals. Help review them to see whether they're on the right track. They might also give you ideas for how to improve your own proposal.",
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
    {
      url:
        "https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations/cc-8th-approximating-irrational-numbers/v/approximating-square-roots-2",
      title: "Khan Academy",
      description: "Approximating irrational numbers",
    },
    {
      url:
        "https://mass.pbslearningmedia.org/resource/mgbh.math.ns.approxsqroot/approximating-square-roots-of-nonperfect-squares/",
      title: "PBS",
      description: "Approximating Square Roots of Nonperfect Squares",
    },
  ],
};

export default (req, res) => {
  res.status(200).json(mockProjectData);
};
