
const express = require('express')
const { getUser } = require('../controller/userCtrl')
const router = express.Router()

// routes
router.get('/',  getUser)

module.exports = router