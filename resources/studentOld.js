const pool = require('../../db/index');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(
        queries.getStudents,
        (err, results) => {
            if (err) throw err;
            res.status(200).json(results.rows);
        }
    );
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(
        queries.getStudentById,
        [id],
        (err, results) => {
            if (err) throw err;
            res.status(200).json(results.rows);
        }
    );
};

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;
    // check if user already exists with the same email
    pool.query(
        queries.checkEmailExists,
        [email],
        (err, results) => {
            if (results.rows.length) {
                res.send('Email already exists');
            }
            // add sudent to db
            pool.query(
                queries.addStudent,
                [name, email, age, dob],
                (err, results) => {
                    if (err) throw err;
                    // 201 response!
                    res.status(201).send('Student created successfully');
                }
            );
        }
    );
};

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(
        queries.getStudentById,
        [id],
        (err, results) => {
            if (!results.rows.length) {
                res.send('Student not found');
            }
            pool.query(
                queries.removeStudent,
                [id],
                (err, results) => {
                    res.status(200).send('Student removed successfully.');
                }
            );
        }
    );
};

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(
        queries.getStudentById,
        [id],
        (err, results) => {
            if (!results.rows.length) {
                res.send('Student not found');
            }
            pool.query(
                queries.updateStudent,
                [name, id],
                (err, results) => {
                    if (err) throw err;
                    res.status(200).send('Student updated successfully.');
                }
            );
        }
    );
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent
};
