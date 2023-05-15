const user = require('../dataAccess/user');

const getUsers = async () => {
  return await user.getUsers();
};

const getUserById = async (id) => {
  return await user.getUserById(id);
};

const addUser = async (password, user_name, email) => {
  return await user.addUser(password, user_name, email);
};

const removeUser = async (id) => {
  return await user.removeUser(id);
};

const updateUser = async (user_name, id) => {
  return await user.updateUser(user_name, id);
};

const idExists = async (id) => {
  return await user.idExists(id);
};

const emailExists = async (email) => {
  return await user.emailExists(email);
};

const matchPassword = async (password, hashPassword) => {
  return await user.matchPassword(password, hashPassword);
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
  updateUser,
  idExists,
  emailExists,
  matchPassword
};
