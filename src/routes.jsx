
var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var Main = require("./components/Main.jsx");
var Results = require("./components/Results.jsx");
var Search = require("./components/Search.jsx");
var Saved = require("./components/Saved.jsx");

module.exports = (
	
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="Search" component={Search}>
				<Route path="Result" component={Results}/>
			</Route>
			<Route path="Saved" component={Saved}/>
		</Route>
	</Router>
);