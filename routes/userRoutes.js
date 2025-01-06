const express = require('express');
const { register, login, logout, getUserProfile } = require('../controllers/userController');
const isUserAuthenticated = require('../middlewares/auth');


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout',isUserAuthenticated, logout);
router.get('/profile', isUserAuthenticated, getUserProfile);

module.exports = router;