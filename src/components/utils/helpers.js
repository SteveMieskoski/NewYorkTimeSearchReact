import axios from "axios";

var apikey = "ba33b9c200434dd5a6ffb719a3cc2fc2";

export const helpers = {

	runQuery: function(topic, startYr, endYr) {

		// cleans up format of search terms
		var q = topic.trim();
		var begin_date = startYr.trim() + "0101";
		var end_date = endYr.trim() + "1231";

		// runs search query
		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
			params: {
				"apikey": apikey,
				"q": q,
				"begin_date": begin_date,
				"end_date": end_date
			}
		}).then(function(res) {
			console.log("--- RUNS QUERY ---");
			console.log(res.data.response);
			return res.data.response;
		}).catch(function(err) {
			console.log(err);
		});
	},

	getSaved: function() {
		return axios.get(
			'/api/saved'
		).then(function(res) {
			console.log("saved results", res.data.length);
			return res
		}).catch(function(err) {
			console.log(err);
		});
	},

	saveArticle: function(article) {
		return axios.post('/api/saved', {
			// formats nyt api data to store in db
			article_id: article._id,
			title: article.headline.main,
			url: article.web_url,
			pub_date: article.pub_date
		}).then(function(res) {
			console.log("save response", res.data.article_id);
		}).catch(function(err) {
			console.log(err);
		});
	},

	deleteSaved: function(article) {
		return axios({
			method: 'delete',
			url: '/api/saved',
			data: article,
			responseType: 'json'
		}).then(function(res) {
			console.log("delete response");
		}).catch(function(err) {
			console.log(err);
		});
	}

};

