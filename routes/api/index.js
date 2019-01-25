const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/index');

router.get('/getPost', controller.getPost);

module.exports = router;