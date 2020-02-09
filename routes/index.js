const express = require('express')
const router = express.Router()
const md5 = require('blueimp-md5')

/* 主页路径 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

module.exports = router
