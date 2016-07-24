const mockGroups = [
  {
    id: 1,
    name: 'Foo'
  },
  {
    id: 2,
    name: 'Bar'
  }
];

const get = (req, res) => {
  res.json(mockGroups);
};

const getById = (req, res) => {
  res.json(mockGroups[0]);
};

export default {
  get,
  getById
};
