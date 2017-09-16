var React = require("react");
var helpers = require("./utils/helpers");
var Results = require('./Results.jsx');
var Search = React.createClass({
	getInitialState: function(){
		return {
			topic: "",
			startYear: "",
			endYear: ""
		}
	},
	handleChange: function(e) {
		var newState = {};
		newState[e.target.id] = e.target.value;
		console.log(e.target.value);
		this.setState(newState);
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var newState = {};
		helpers.runSearch(this.state.topic, this.state.startYear, this.state.endYear)
			.then((response) =>{
				newState.results = response.docs;
				this.setState(newState);
			})

	},
	render: function() {
		return (
			<div className="container">

				<div className="col-lg-12">
					<div className="panel panel-default">

						<div className="panel-heading">
							<h3 style={{ textAlign: 'center' }} className="panel-title">Search Articles</h3>
						</div>

						<div className="panel-body">
							 <form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="search">Search Term:</label>
									<input type="text" className="form-control" id="topic" value={this.state.topic} onChange={this.handleChange}/>
								</div>
								<div className="form-group">
									<label htmlFor="start-year">Start Year:</label>
									<input type="text" className="form-control" id="startYear" value={this.state.startYear} onChange={this.handleChange}/>
								</div>

								<div className="form-group">
									<label htmlFor="end-year">End Year:</label>
									<input type="text" className="form-control" id="endYear" value={this.state.endYear} onChange={this.handleChange}/>
								</div>

								 <button type="submit" className="btn btn-primary" id="run-search" >Search</button>
							</form>
						</div>
					</div>
				</div>
				<div className="row">
					<Results results={this.state.results}/>
				</div>
			</div>

		);
	}
});
module.exports = Search;
