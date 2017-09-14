import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Main extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		return (

			<div className="container">
				<div className="jumbotron">
					<h2 style= { { textAlign: 'center' } }><strong>New York Times Article Scrubber</strong></h2>
					<p style= { { textAlign: 'center' } }><em>Search for and annotate articles of interest!</em></p>
					<hr />
					<p>
						<Link to="/Search"><button className="btn btn-primary btn-lg">Search</button></Link>
						<Link to="/Results"><button className="btn btn-danger btn-lg">Results</button></Link>
						<Link to="/Saved"><button className="btn btn-warning btn-lg">Saved Articles</button></Link>
					</p>
				</div>

				<div className="row">
					{this.props.children}
				</div>
			</div>
		);
	}
};

