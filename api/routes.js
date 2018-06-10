const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/login',controller.login);
router.get('/logout',controller.logout);
router.get('/me',controller.protected);

module.exports=router;