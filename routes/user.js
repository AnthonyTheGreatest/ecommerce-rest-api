const { Router } = require('express');
const user = require('../controllers/user');
const passport = require('passport');
const { config } = require('../controllers/user')
config(passport);

const router = Router();

router.get('/', user.getUsers);
router.post('/', user.addUser);
router.get('/:id', user.getUserById);
router.put('/:id', user.updateUser);
router.delete('/:id', user.removeUser);

router.post(
    '/signup',
    passport.authenticate('local-signup', { session: false }),
    (req, res) => {
        res.json({user: req.user});
    }
);

router.post(
    '/login',
    passport.authenticate('local-login', { session: false }),
    (req, res) => {
        res.json({user: req.user});
    }
);

module.exports = router;