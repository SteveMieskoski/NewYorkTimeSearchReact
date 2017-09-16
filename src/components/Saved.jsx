var React = require("react");
var helpers = require('./utils/helpers');
var Saved = React.createClass({
	componentDidMount: function() {
		helpers.getSaved().then(function(response) {
			console.log(response);
				console.log("History", response.data);
				this.setState({ saved: response.data });
		}.bind(this));
	},
	removeArticle: function(event){
		event.preventDefault();
		var articleId = event.target.dataset.articleId;
		helpers.deleteSaved({id: articleId});

		console.log(articleId);
	},
	render: function() {
		let self = this;
		let savedList = null;
		console.log(this.state);
		if(this.state){
			savedList = this.state.saved.map(function(article) {
				console.log(article);
				return (
					<div className="well">
						<p key={article._id}>{article.title}</p>
						<a className="btn btn-primary" href={article.url}>Go To Article</a>
						<p style= { { textAlign: 'right' } }><button className="btn btn-primary" onClick={self.removeArticle} data-article-id={article._id} >Remove</button></p>
					</div>
				);
			})}
		return (
			<div className="container">
				<div className="col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Saved Articles</h3>
						</div>
						<div className="panel-body">
							{savedList}
						</div>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Saved;