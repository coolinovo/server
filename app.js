var createError = require('http-errors')
var express = require('express')  // express
var path = require('path')  // 服务器路径
var cookieParser = require('cookie-parser')  // 解析 cookie
var logger = require('morgan')  // 日志
const jwt = require('jwt-simple') // jwt-simple 用户认证

var indexRouter = require('./routes/index')  // 注册路由位置
var usersRouter = require('./routes/users')

// 注册 app
var app = express()

// 解决跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

// express 内部参数
app.set('views', path.join(__dirname, 'views'))  // 模板文件夹的路径
app.set('view engine', 'ejs')  // 视图模板为 ej
app.set('tokenSecret', 'secret') // 设置密钥

// app.use 注册函数
app.use(logger('dev')) // 设置开发模式为 dev，开发环境
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))  // 访问静态资源文件夹 public

app.use('/', indexRouter)  // 设置 url 为 '/' 默认到 index 路由
app.use('/users', usersRouter) // 设置 url 为 '/users' 指向 user 路由

// 捕获 404 信息
app.use(function(req, res, next) {
  next(createError(404))
})

// 错误处理的中间件
app.use(function(err, req, res, next) {
  // 只在开发中提示错误
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // 渲染错误页
  res.status(err.status || 500);
  res.render('error')
})

module.exports = app
