const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.get('/register', (req,res)=>{
    res.status(200).json({ message: 'User registered successfullyui' });
});
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;