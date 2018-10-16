const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.get('/user', userController.listAll);
router.post('/user/Add', userController.insert);
router.delete('/user/:id', userController.deleteByID);
router.put('/user/update', userController.update);

module.exports = router;