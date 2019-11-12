import React, { Component } from "react";
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

		window.onscroll = () => {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("btn-to-top").style.display = "block";
			}
			else {
				document.getElementById("btn-to-top").style.display = "none";
			}
		}

		return (<>
			<form id="search-form" onSubmit={this.formPreventDefault}>
				<Row>
					<Col xs={12} lg={9} xl={8}></Col>
					<Col xs={1}>
						<button id="btn-to-home">
							<Link to={"/treasure-trails-helper"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
					<Col></Col>
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
					<Col xs={12} lg={8} xl={7} id="result-container">
						{/* the list of clues, narrowed down to whatever is in the search query */}
						{AnagramData.map((anagram, index) => {
							if (anagram.question.toLowerCase().includes(this.state.query.toLowerCase())) {
								return <div className="results" key={index}>
									<h1><span>Anagram:</span> {anagram.question}</h1>
									<p><span>Solution:</span> {anagram.answer}</p>
									<p><span>Location:</span> {anagram.location}</p>
									<p><span>Challenge (if applicable):</span> {anagram.challenge}</p>
								</div>
							}
						})}
					</Col>

					{/* <Col></Col> */}

					{/* side menu links */}
					<Col lg={3} xl={2} id="side-design">
						<Link
							to={"/treasure-trails-helper/challenges"}>
							<h3 className="side-menu-options">Challenges</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/coordinates"}>
							<h3 className="side-menu-options">Coordinates</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/cryptics"}>
							<h3 className="side-menu-options">Cryptics</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/lockboxes"}>
							<h3 className="side-menu-options">Lockboxes</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/maps"}>
							<h3 className="side-menu-options">Maps</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/puzzleboxguide"}>
							<h3 className="side-menu-options">Puzzle Box Guide</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/scans"}>
							<h3 className="side-menu-options">Scans</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/skillingriddles"}>
							<h3 className="side-menu-options">Skilling Riddles</h3>
						</Link>
					</Col>
				</Row>
			</div>

			<div>
				<Row>
					<Col xl={8}></Col>
					<Col xl={1}>
						<button id="btn-to-top" onClick={() => window.scrollTo(0, 0)}>
							<Link to={"#"} id="link-to-top">
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