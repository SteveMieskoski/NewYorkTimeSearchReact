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
		const {title, date, url} = req.body;


		article.create({
			title,
			date,
			url
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
		const {url} = req.body;

		article.findOneAndRemove(url, (err) => {
			if (err) {
				console.log(err);
			}
			else {
				console.log("article Deleted");
			}
		});
	});

};