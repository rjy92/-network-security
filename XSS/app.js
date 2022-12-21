const express = require("express");

const app = express();

// 配置模板引擎用于渲染页面
app.engine("html", require("express-art-template"));

app.get("/", (req, res) => {
	// render 方法的作用
	// 1. 读取你要渲染的页面内容
	// 2. 渲染：将数据和页面替换到一起
	// 3. 将渲染结果发送给客户端
	res.render("index.html", {
		foo: "bar",
		search: req.query.search, // 通过地址栏传递文本框输入的内容，例如 ?search=abc
		// search: escapeHtml(req.query.search), // 通过地址栏传递文本框输入的内容，例如 ?search=abc
		// img: req.query.img, // 图片的地址数据来自 url 中
	});
});

// 用户创建的文章，保存到了数据库中
const articles = [
	{ id: 1, title: "article 1", body: "article 1 body" },
	{ id: 2, title: "article 2", body: "article 2 body" },
	{ id: 3, title: "article 3", body: "article 3 body" },
	{ id: 4, title: "article 4", body: "<script>alert(123)</script>" },
];

app.get("/article/:id", (req, res) => {
	const article = articles.find((article) => article.id == req.params.id);
	if (!article) {
		return res.status(404).send("文章不存在");
	}
	res.render("article.html", {
		// 这里的数据可以在页面中直接绑定使用
		article,
	});
});

app.listen(3000, () => console.log("http://localhost:3000/"));
