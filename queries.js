require('dotenv').config();
// "process.env now has the keys and values you defined in your .env file"
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Ecommerce',
    password: process.env.pgPassword,
    port: 5432
});

const getItems = (req, res) => {
    pool.query(
        'SELECT * FROM items ORDER BY item_id ASC',
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        }
    );
};

module.exports = {
    getItems
};
