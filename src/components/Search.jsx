import React, { Component } from "react";
import { Link } from "react-router-dom";
import helpers from "./utils/helpers";

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: "",
			startYear: "",
			endYear: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		var newState = {};
		newState[e.target.id] = e.target.value;
		this.setState(newState);
	}
	runQuery(newTopic, newStartYr, newEndYr) {
		helpers
			.runQuery(newTopic, newStartYr, newEndYr)
			.then(function(data) {
					this.setState({
						results: { docs: data.docs },
						runQuery: true
					});
				}.bind(this)
			);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.runQuery(this.state.topic, this.state.startYear, this.state.endYear);
	}
	render() {
		return (
            <div className="container">

                <div className="col-lg-12">
                    <div className="panel panel-default">

                        <div className="panel-heading">
                            <h3 style={{ textAlign: 'center' }} className="panel-title">Search Articles</h3>
                        </div>

                        <div className="panel-body">
                            <form>

                                <div className="form-group">
                                    <label htmlFor="search">Search Term:</label>
                                    <input type="text" className="form-control" id="search-term" value={this.state.topic} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="start-year">Start Year:</label>
                                    <input type="text" className="form-control" id="start-year" value={this.state.startYear} onChange={this.handleChange}/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="end-year">End Year:</label>
                                    <input type="text" className="form-control" id="end-year" value={this.state.endYear} onChange={this.handleChange}/>
                                </div>

                                <Link to="Results"><button type="submit" className="btn btn-primary" id="run-search" ><i className="fa fa-search"></i> Search</button></Link>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
		);
	}
};


