import React, { Component } from "react";
import {hot} from "react-hot-loader";
import $ from 'jquery';

/************* Custom *************/
import Header from './common/header.js';
import Footer from './common/footer.js';

/************* Bootstrap *************/
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

/************* Stylesheets *************/
import "../../public/css/App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="container">
					<h1>Hello World!!</h1>
				</div>
				<Footer />
			</div>
			);
	}
}

export default hot(module)(App);
