const { Router } = require('express');
const auth = require('../controllers/auth');

const router = Router();

router.post('/signup', auth);
router.post('/login', auth);

module.exports = router;