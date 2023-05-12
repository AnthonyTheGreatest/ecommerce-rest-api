const user = require('../services/user');

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
    const { password, user_name, email } = req.body;
    const emailExists = await user.emailExists(email);
    if (emailExists) return res.json({ message: `A user with email ${email} already exists.` });
    const result = await user.addUser(password, user_name, email);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const idExists = await user.idExists(id);
    if (!idExists) return res.status(400).json({ message: `User with id ${id} not found.` });
    const result = await user.removeUser(id);
    res.status(200).json({ message: 'User removed successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { user_name } = req.body;
    const id = parseInt(req.params.id);
    const idExists = await user.idExists(id);
    if (!idExists) return res.status(400).json({ message: `User with id ${id} not found.` });
    const result = await user.updateUser(user_name, id);
    res.status(200).json({ message: 'User updated successfully.' });
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
