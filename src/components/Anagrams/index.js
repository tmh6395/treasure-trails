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
				<Row className="header-row">
					<Col>
						<button id="btn-to-home">
							<Link to={"/treasure-trails"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
					<Col xs={7} lg={5} xl={4} className="align-self-center">
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
					<Col xs={12} lg={7} id="result-container">
						{/* the list of clues, narrowed down to whatever is in the search query */}
						{AnagramData.map((anagram, index) => {

							if (anagram.question.toLowerCase().includes(this.state.query.toLowerCase())) {
								return <div className="results" key={index}>
									<span>Anagram:</span>
									<p className="question-text"> {anagram.question}</p>
									<span>Solution:</span>
									<p> {anagram.answer}</p>
									<span>Location:</span>
									<p> {anagram.location}</p>

									<div style={anagram.challenge === "N/A" ? { display: "none" } : { display: "block" }}>
										<span>Challenge:</span>
										<p> {anagram.challenge}</p>
									</div>
								</div>
							}
						})}
					</Col>

					{/* side menu links */}
					<Col lg={3} xl={2} id="side-design">

						<div className="side-menu-current">
							<p className="margin-bottom-zero"><span className="span-no-underline">Currently on:</span></p>
							<p className="margin-bottom-zero"><span className="span-no-underline">Anagrams</span></p>
						</div>

						<hr className="side-menu-hr" />

						<Link
							to={"/treasure-trails/challenges"}>
							<p className="side-menu-options">Challenges</p>
						</Link>

						<Link
							to={"/treasure-trails/coordinates"}>
							<p className="side-menu-options">Coordinates</p>
						</Link>

						<Link
							to={"/treasure-trails/cryptics"}>
							<p className="side-menu-options">Cryptics</p>
						</Link>

						<Link
							to={"/treasure-trails/lockboxes"}>
							<p className="side-menu-options">Lockboxes</p>
						</Link>

						<Link
							to={"/treasure-trails/maps"}>
							<p className="side-menu-options">Maps</p>
						</Link>

						<Link
							to={"/treasure-trails/puzzleboxguide"}>
							<p className="side-menu-options">Puzzle Box Guide</p>
						</Link>

						<Link
							to={"/treasure-trails/scans"}>
							<p className="side-menu-options">Scans</p>
						</Link>

						<Link
							to={"/treasure-trails/skillingriddles"}>
							<p className="side-menu-options">Skilling Riddles</p>
						</Link>
					</Col>
				</Row>
			</div>

			<div>
				<Row>
					<Col xs={12} lg={7} xl={8}></Col>
					<Col>
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