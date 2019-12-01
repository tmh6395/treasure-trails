import React, { Component } from "react";
import "./index.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class App extends Component {
	render() {
		window.onscroll = () => {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("btn-to-top").style.display = "block";
			}
			else {
				document.getElementById("btn-to-top").style.display = "none";
			}
		}

		return (<div>
			<Row>
				<Col xs={12} lg={7} xl={8}></Col>
				<Col>
					<button id="btn-to-top" onClick={() => window.scrollTo(0, 0)}>
						Top
					</button>
				</Col>
			</Row>
		</div>);
	}
}

export default App;