const mockGames = [
  {
    id: 1234,
    groupId: 1
  },
  {
    id: 4321,
    groupId: 2
  }
];

const getByGroupId = (req, res) => {
  res.json(mockGames);
};

export default { getByGroupId };
