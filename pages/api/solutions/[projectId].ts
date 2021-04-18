// Each time student sees 3 other solutions

const solutions = [
  {
    id: "unique-solution-id-1",
    studentId: "abc-123",
    author: "STUDENT",
    solution: [
      { x: -6, y: -2 },
      { x: 4, y: -1 },
      { x: 3, y: 6 },
      { x: -6, y: 7 },
      { x: 7, y: -6 },
    ],
  },
  {
    id: "unique-solution-id-2",
    studentId: "xyz-123",
    author: "STUDENT",
    solution: [
      { x: -1, y: -2 },
      { x: 0, y: 5 },
      { x: 7, y: 6 },
      { x: 8, y: -7 },
    ],
  },
  {
    id: "unique-solution-id-3",
    studentId: null,
    author: "TEACHER",
    solution: [
      { x: -2, y: 2 },
      { x: 3, y: 2 },
      { x: -1, y: -2 },
      { x: 7, y: -6 },
    ],
  },
];

export default (req, res) => {
  console.log("reqbody", req.body);
  res.status(200).json(solutions);
};
