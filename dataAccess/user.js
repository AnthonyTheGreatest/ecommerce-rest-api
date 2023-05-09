const { query } = require('../db');

const getUsers = async () => {
  const { rows } = await query(
    'SELECT* FROM users2'
  );
  return rows;
};

const getUserById = async (id) => {
  const { rows } = await query(
    'SELECT * FROM users2 WHERE id = $1',
    [id]
  );
  return rows[0];
};

const addUser = async (name, email, age, dob) => {
  const { rows } = await query(
    'INSERT INTO users2 (name, email, age, dob) VALUES ($1, $2, $3, $4)',
    [name, email, age, dob]
  );
  return rows[0];
};

const removeUser = async (id) => {
  const { rows } = await query(
    'DELETE FROM users2 WHERE id = $1',
    [id]
  );
  return rows[0];
};

const updateUser = async (name, id) => {
  const { rows } = await query(
    'UPDATE users2 SET name = $1 WHERE id = $2',
    [name, id]
  );
  return rows[0];
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    updateUser
};
