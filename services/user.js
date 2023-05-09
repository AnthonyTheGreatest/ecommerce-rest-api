const { user } = require('../dataAccess');

const getUsers = async () => {
  return await user.getUsers();
};

const getUserById = async (id) => {
  return await user.getUserById(id);
};

const addUser = async (name, email, age, dob) => {
  return await user.addUser(name, email, age, dob);
};

const removeUser = async (id) => {
  return await user.removeUser(id);
};

const updateUser = async (name, id) => {
  return await user.updateUser(name, id);
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
  updateUser
};
