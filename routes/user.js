const { Router } = require('express');
const {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    updateUser
} = require('../controllers/user');

const router = Router();

router.get('/', getUsers);
router.post('/', addUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', removeUser);

module.exports = router;