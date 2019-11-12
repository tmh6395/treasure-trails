import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import CrypticData from "../../clue_data/cryptics.json";
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
					<Col xs={12} lg={9} xl={7} id="result-container">
						{/* the list of clues, narrowed down to whatever is in the search query */}
						{CrypticData.map((cryptic, index) => {
							let crypticImage = cryptic.image;
							let windowOrigin = window.location.origin;
							// Allows the images to load whether the app is loaded locally or on gh-pages
							// gh-pages needs '/treasure-trails' to properly follow the path, but locally needs nothing in its place
							if (windowOrigin === 'http://localhost:3000') {
								windowOrigin = '';
							} else if (windowOrigin === 'https://tmh6395.github.io') {
								windowOrigin = '/treasure-trails-helper';
							}

							if (cryptic.keyInfo === "N/A") {
								var keyStyle = {
									display: "none"
								}
							} else {
								var keyStyle = {
									display: "block"
								}
							}

							if (cryptic.riddle.toLowerCase().includes(this.state.query.toLowerCase())) {

								return <div className="results" key={index}>
									<h1><span>Cryptic:</span> {cryptic.riddle}</h1>
									<img alt="cryptic_image_failed_to_load" src={window.location.origin + windowOrigin + '/images/cryptics_locations/' + crypticImage} />
									<p><span>Solution:</span> {cryptic.answer}</p>
									<div style={keyStyle}>
										<hr />
										<p><span>Key Info:</span> {cryptic.keyInfo}</p>
									</div>
								</div>
							}
						})}
					</Col>

					<Col></Col>

					{/* side menu links */}
					<Col xl={2} id="side-design">
						<Link
							to={"/treasure-trails-helper/anagrams"}>
							<h3 className="side-menu-options">Anagrams</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/challenges"}>
							<h3 className="side-menu-options">Challenges</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/coordinates"}>
							<h3 className="side-menu-options">Coordinates</h3>
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