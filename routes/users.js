const express = require('express')
const router = express.Router()
const md5 = require('blueimp-md5')
const { UserModel } = require('../db/models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})

// 用户注册
router.post('/register', (req, res) => {
  console.log('req:', req.body)
  const {username, password, remember} = req.body
  UserModel.findOne({username}, (err, user) => {
    if (err) {
      // console.log(err)
    } else {
      if (user) {
        res.send({status: 400, msg: '该用户已存在，请重新输入ヾ(￣▽￣)'})
      } else {
        new UserModel({username, password, remember, uid: '1', telNumber: 18579783308}).save((err, docs) => {
          err?console.log(err):console.log(docs)
        })
      }
    }
  })
})
// 用户登录
router.post('/login', (req, res) => {
  console.log(req.body)
  const {username, password, remember} = req.body
  UserModel.findOne({username, password}, (err, user) => {
    if (user) {
      console.log('error:', err)
      res.send({status: 200, msg: '', data:{}})
    }
  })
})
// 用户更新
router.put('/update', () => {

})

module.exports = router;
