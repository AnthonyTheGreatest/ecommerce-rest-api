const { query } = require('../db');

const getUsers = async () => {
  const { rows } = await query(
    'SELECT* FROM users'
  );
  return rows;
};

const getUserById = async (id) => {
  const { rows } = await query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
  return rows[0];
};

const addUser = async (password, user_name, email) => {
  const { rows } = await query(
    'INSERT INTO users (password, user_name, email) VALUES ($1, $2, $3)',
    [password, user_name, email]
  );
  return rows[0];
};

const removeUser = async (id) => {
  const { rows } = await query(
    'DELETE FROM users WHERE id = $1',
    [id]
  );
  return rows[0];
};

const updateUser = async (user_name, id) => {
  const { rows } = await query(
    'UPDATE users SET user_name = $1 WHERE id = $2',
    [user_name, id]
  );
  return rows[0];
};

const idExists = async (id) => {
  const { rows } = await query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
  return rows.length ? true : false;
}

const emailExists = async (email) => {
  const { rows } = await query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return rows.length ? true : false;
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    updateUser,
    idExists,
    emailExists
};
