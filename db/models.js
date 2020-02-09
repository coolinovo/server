const mongoose = require('mongoose')
const { user } = require('./schemas')

mongoose.connect(
      'mongodb://localhost:27017/apidata',
          // 解决 warning
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err) => {
            if (err) return console.log('connect error:', err)
            console.log('数据库连接成功！')
          })

// 创建定义结构的 Schema
// 用户的 Schema
const userSchema = mongoose.Schema(user)
// 把用户 Schema 转化成 Model
const UserModel = mongoose.model('User', userSchema)
// 暴露到全局
exports.UserModel = UserModel
// 测试
// const userModel = new UserModel({username: 'yeh', passwd: '123456', nickName: '霖酱', telNumber: 18579783308})
// userModel.save((err, docs) => {
//   err?console.log(err):console.log(docs)
// })