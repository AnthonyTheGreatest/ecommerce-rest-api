const { user } = require('../services');

const getUsers = async (req, res) => {
  try {
    const result = await user.getUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await user.getUserById(id);
    if (!result) {
      res.status(404).json({ message: `User with id ${id} not found.` });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    // TODO: Add logic to prevent adding users with email already in db. (userOld.js) ...also some more logic for other functions.
    const { name, email, age, dob } = req.body;
    const result = await user.addUser(name, email, age, dob);
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await user.removeUser(id);
    res.status(200).send('User removed successfully.');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name } = req.body;
    const id = parseInt(req.params.id);
    const result = await user.updateUser(name, id);
    res.status(200).send('User updated successfully.');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    updateUser
};
