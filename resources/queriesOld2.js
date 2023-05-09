const getStudents = 'SELECT * FROM students2';
const getStudentById = 'SELECT * FROM students2 WHERE id = $1';
const checkEmailExists = 'SELECT s FROM students2 WHERE s.email = $1';
const addStudent =
    'INSERT INTO students2 (name, email, age, dob) VALUES ($1, $2, $3, $4)';
const removeStudent = 'DELETE FROM students2 WHERE id = $1';
const updateStudent = 'UPDATE students2 SET name = $1 WHERE id = $2';

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent
};

