
import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Main from "./components/Main.jsx";
import Search from "./components/Search.jsx";
import Result from "./components/Result.jsx";
import Saved from "./components/Saved.jsx";

const Routes = (props) => (
	<Router {...props}>
		<Main>
			<Route exact path="/" component={Search} />
			<Route path="/Search" component={Search} />
			<Route path="/Saved" component={Saved} />
			<Route path="/Result" component={Result}/>
		</Main>
	</Router>
);

export default Routes;
