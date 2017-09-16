const article = require('../database/models/article.js');

module.exports = (app) => {


	app.get("/", (req, res) => {
		res.sendFile(__dirname + "/public/index.html");
	});

	app.get("/api/saved", (req, res) => {
		article.find({}).sort([["date", "descending"]]).exec((err, savedArticles) => {
			if (err) {
				console.log(err);
			}
			else {
				console.log(savedArticles);
				res.send(savedArticles);
			}
		});
	});


	app.post("/api/saved", (req, res) => {
		console.log("BODY: " + req.body);
		article.create({
			title: req.body.title,
			url: req.body.url,
			articleId: req.body.article_id,
			date: req.body.pub_date
		}, (err) => {
			if (err) {
				console.log(err);
			}
			else {
				console.log("Saved Search");
			}
		});
	});


	app.delete("/api/delete", (req, res) => {
		console.log('Delete: ', req.body);
		let id = req.body.id;
		console.log(id);
		article.findByIdAndRemove(id, (err) => {
			if (err) {
				console.log(err);
			}
			else {
				console.log("article Deleted");
			}
		});
	});

};