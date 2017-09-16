import axios from "axios";

var apikey = "ba33b9c200434dd5a6ffb719a3cc2fc2";


module.exports = {
	runSearch: function(topic, startYr, endYr)  {
		var begin_date, end_date;
		var q = topic.trim();
		if(startYr){
			begin_date = startYr.trim() + "0101";
		} else {
			begin_date = "20160101";
		}

		if(endYr){
			end_date = endYr.trim() + "1231";
		} else {
			end_date = "20161231";
		}

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

	getSaved: function()  {
		return axios.get(
			'/api/saved'
		).then(function(res) {
			console.log("saved results", res.data.length);
			return res
		}).catch(function(err) {
			console.log(err);
		});
	},

	saveArticle: function(article)  {
		return axios.post('/api/saved', {
			article_id: article._id,
			title: article.snippet,
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
			url: '/api/delete',
			data: article,
			responseType: 'json'
		}).then(function(res) {
			console.log("delete response");
		}).catch(function(err) {
			console.log(err);
		});
	}

};

