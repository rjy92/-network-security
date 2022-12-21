## XSS 攻击

### 反射型 XSS 攻击

1. XSS 目录下，index.js 启动，` nodemon .\app.js`
2. 浏览器中访问 localhost:3000
3. 在 input 输入框中输入 `<script>alert(123)</script>`
4. 点击搜索可以看到，页面出现弹框。

### 存储型 XSS 攻击

1. XSS 目录下，index.js 启动，` nodemon .\app.js`
2. 浏览器中访问 http://localhost:3000/article/4
3. 回车即可发现，页面出现弹框。

### DOM 型 XSS 攻击
