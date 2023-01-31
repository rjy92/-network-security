const express = require('express')
const session = require('express-session')

const app = express()

// 解析表单请求体数据
app.use(express.urlencoded({
  extended: true
}))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


// 配置模板引擎用于渲染页面
app.engine('html', require('express-art-template'))

app.get('/', (req, res) => {
  res.render('index.html', {
    user: req.session.user
  })
})

// 渲染 login 页面
app.get('/login', (req, res) => {
  res.render('login.html')
})

// 处理 login 登录请求的
app.post('/login', (req, res) => {
  const user = req.body
  console.log(user)
  if (user.username === 'lpz' && user.password === '123456') {
    // 记录登录状态
    req.session.user = user // 这里使用 Session 记录用户登录状态
    return res.redirect('/')
  }
  res.render('login.html')
})

// 转账
app.post('/transfer', (req, res) => {
  // 校验登录状态
  if (!req.session.user) {
    return res.status(401).send('未授权')
  }
  // 执行转账操作
  res.send('success')
})

app.listen(3000, () => console.log('http://localhost:3000/'))
