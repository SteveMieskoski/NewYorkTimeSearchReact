import React, { Component } from "react";

export default class Result extends Component {
	constructor(props){
		super(props);
	console.log(props);
	}

	render() {
		return (
            <div className="container">
                <div className="col-lg-12">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3 className="panel-title">Results</h3>
                        </div>
                        <div className="panel-body" id="well-section">
                            Placeholder
                        </div>
                    </div>
                </div>
            </div>
		);
	}
};
