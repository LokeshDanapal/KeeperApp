const express = require('express');

const userCntrl = require('../Controller/Auth');

const router = express.Router();

router.post('/signup',userCntrl.createUser);

router.post('/login',userCntrl.validateUser);

// router.post('/userinfo',userCntrl.userInfo);

module.exports = router;