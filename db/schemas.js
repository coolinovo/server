// 用户信息 Schema
const user = {
  // 用户 id
  uid: {
    type: Number,
    required: true
  },
  // 用户名
  username: {
    type: String,
    required: true,
    maxlength: 16
  },
  // 密码
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 15
  },
  // 记住密码
  remember: {
    type: Boolean,
    default: false,
    required: true
  },
  // 昵称
  nickName: {
    type: String,
    required: false,
    max: 7
  },
  // 头像
  avatar: {
    type: String
  },
  // 个性签名
  desc: {
    type: String,
    required: false,
    maxlength: 20
  },
  // 手机号
  telNumber: {
    type: Number,
    required: true,
    match: /^1(3|4|5|6|7|8|9)\d{9}$/
  }
}

// 文章内容 Schema
const article = {
  // 文章标题
  title: {
    type: String,
    required: true
  },
  // 作者名字
  author: {
    type: String,
    required: true
  },
  // 文章内容
  content: {
    type: String,
    required: true
  },
  // 创建时间
  create: {
    type: Number,
    required: true
  },
  // 修改时间
  update: {
    type: Number,
    required: true
  },
  // 浏览量
  amount: {
    type: Number,
    required: true
  }
}

// 商品内容 Schema
const goods = {
  id: {},
  name: {},
  desc: {},
  detail: {},
  img: {},
  price: {},
  amount: {},
  category: {}
}

exports.user = user
exports.article = article
exports.goods = goods