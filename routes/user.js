const { Router } = require('express');
const user = require('../controllers/user');

const router = Router();

router.get('/', user.getUsers);
router.post('/', user.addUser);
router.get('/:id', user.getUserById);
router.put('/:id', user.updateUser);
router.delete('/:id', user.removeUser);

module.exports = router;