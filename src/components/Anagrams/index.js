import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import AnagramData from "../../clue_data/anagrams.json";
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
		return (<>
			<form id="search-form" onSubmit={this.formPreventDefault}>
				<Row>
					<Col xs={1}></Col>
					<Col xs={1}>
						<button id="btn-to-home">
							<Link to={"/treasure-trails"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
					<Col xs={7}></Col>
					<Col style={{ alignSelf: "center" }}>
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
						{AnagramData.map((anagram, index) => {
							if (anagram.question.toLowerCase().includes(this.state.query.toLowerCase())) {
								return <div className="results" key={index}>
									<h1><span>Anagrams:</span> {anagram.question}</h1>
									<p><span>Solution:</span> {anagram.answer}</p>
									<p><span>Location:</span> {anagram.location}</p>
									<p><span>Challenge (if applicable):</span> {anagram.challenge}</p>
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