const express = require('express');

const router = express.Router();

const {getCountryCode, getDataFromDatabase} = require('../controller/test-controller');

router.get('/test', getCountryCode);
router.get('/database', getDataFromDatabase);
module.exports = router;