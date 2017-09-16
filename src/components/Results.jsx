var React = require("react");
var helpers = require('./utils/helpers');
var Results = React.createClass({
	handleClick: function(event){
		event.preventDefault();
		var articleId = event.target.dataset.articleId;
		var selectedArticle = this.props.results[articleId];
		helpers.saveArticle(selectedArticle);
			console.log(selectedArticle);
	},
	render: function () {
		let self = this;
		console.log(this.props);
		let resultList = null;
		if(this.props.results){
			resultList = this.props.results.map(function(article, i) {
				return (
					<div className="well">
						<p key={i}>{article.snippet}</p>
						<button className="btn btn-primary" onClick={self.handleClick} data-article-id={i}>Save</button>
					</div>
				);
			})}
		return (
			<div className="container">
				<div className="col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Results</h3>
						</div>
						<div className="panel-body">
							<p>Results</p>
							{resultList}
						</div>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Results;