var React = require("react");
var Link = require("react-router").Link;
var Main = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h2 style= { { textAlign: 'center' } }><strong>New York Times Article Search</strong></h2>
					<p style= { { textAlign: 'center' } }><em>Search and Save!</em></p>
					<hr />
					<p>
						<Link to="/Search"><button className="btn btn-primary btn-lg">Search</button></Link>
						<Link to="/Saved"><button className="btn btn-warning btn-lg">Saved Articles</button></Link>
					</p>
				</div>

				<div className="row">
					{this.props.children}
				</div>
			</div>
		);
	}
});
module.exports = Main;