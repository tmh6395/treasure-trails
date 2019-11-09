import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import ChallengeData from "../../clue_data/challenges.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
	// handler recieves the `e` event object
	formPreventDefault(e) {
		e.preventDefault();
	}

	state = {
		query: '',
	}

	handleQueryChange = () => {
		this.setState({
			query: this.search.value
		})
	}

	render() {

		window.onscroll = function () { scrollFunction() };
		function scrollFunction() {
			let windowOrigin = window.location.origin;
			if (windowOrigin === "http://localhost:3000" || windowOrigin === "https://tmh6395.github.io") {
				if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
					document.getElementById("btn-to-top").style.display = "block";
				}
				else {
					document.getElementById("btn-to-top").style.display = "none";
				}
			}
		}

		return (<>
			<form id="search-form" onSubmit={this.formPreventDefault}>
				<Row>
					<Col xs={1}></Col>
					<Col xs={1}>
						<button id="btn-to-home">
							<Link to={"/treasure-trails-helper"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
					<Col xs={8}></Col>
					<Col xs={2} style={{ alignSelf: "center" }}>
						{/* the searchbar */}
						<input
							id="search-bar"
							placeholder="Search"
							ref={input => this.search = input}
							onChange={this.handleQueryChange}
							autoFocus
						/>
					</Col>
				</Row>
			</form>

			<div>
				<Row>
					<Col></Col>

					<Col xs={7} id="result-container">
						{/* the list of clues, narrowed down to whatever is in the search query */}
						{ChallengeData.map((challenge, index) => {
							if (challenge.question.toLowerCase().includes(this.state.query.toLowerCase())) {
								return <div className="results" key={index}>
									<h1><span>Challenges:</span> {challenge.question}</h1>
									<p><span>Solution:</span> {challenge.answer}</p>
									<p><span>Asked by:</span> {challenge.asker}</p>
								</div>
							}
						})}
					</Col>

					<Col></Col>
				</Row>
			</div>

			<div>
				<Row>
					<Col xs={1}></Col>
					<Col xs={1}>
						<button id="btn-to-top">
							<Link to={"#"} id="link-to-top" onClick={() => window.scrollTo(0, 0)}>
								<FontAwesomeIcon icon={faArrowUp} />
							</Link>
						</button>
					</Col>
				</Row>
			</div>
		</>);
	}
}

export default App;