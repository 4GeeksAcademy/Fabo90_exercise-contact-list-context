import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext.jsx";

import { Contacts } from "./views/Contacts.jsx";
import { AddContact } from "./views/AddContact.jsx";

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/index.html" component={Contacts} />
						<Route exact path="/" component={Contacts} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/add" component={AddContact} />
						<Route exact path="/edit" component={AddContact} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
