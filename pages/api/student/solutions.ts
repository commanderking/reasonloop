const solutions = [
  {
    coordinates: [
      { x: -6, y: -7, timestamp: 1617668002942 },
      { x: 0, y: 0, timestamp: 1617668004013 },
      { x: 4, y: 5, timestamp: 1617668004675 },
    ],
  },
];

export default (req, res) => {
  console.log("req", req);
  res.status(200).json(solutions);
};
