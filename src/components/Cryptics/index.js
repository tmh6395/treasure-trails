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
				<Row className="header-row">
					<Col xs={1} id="hide-when-max-medium"></Col>
					<Col lg={5} className="align-self-center" id="cryptic-tip-header">
						<p className="margin-bottom-zero">• If a cryptic clue requires a key, then you should get the key first to save time.</p>
					</Col>
					<Col>
						<button id="btn-to-home">
							<Link to={"/treasure-trails-helper"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
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
					<Col xs={12}>
						<p id="cryptic-tip-below-header">• If a cryptic clue requires a key, then you should get the key first to save time.</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} lg={7} id="result-container">
						{/* the list of clues, narrowed down to whatever is in the search query */}
						{CrypticData.map((cryptic, index) => {
							let crypticImage = cryptic.image;

							if (cryptic.riddle.toLowerCase().includes(this.state.query.toLowerCase())) {
								return <div className="results" key={index}>
									<p className="question-text cryptic-question-text"><span>Cryptic:</span></p>
									<p className="question-text cryptic-question-text">{cryptic.riddle}</p>
									<p><span>Solution:</span></p>

									<img style={{ paddingBottom: "1rem" }} alt="cryptic_image_failed_to_load"
										src={process.env.PUBLIC_URL + '/images/cryptics_locations/' + crypticImage}
									/>

									<p>{cryptic.answer}</p>
									<div style={cryptic.keyInfo === "N/A" ? { display: "none" } : { display: "block" }}>
										<hr />
										<p><span>Key Info:</span> {cryptic.keyInfo}</p>
									</div>
								</div>
							}
						})}
					</Col>

					{/* side menu links */}
					<Col lg={3} xl={2} id="side-design">
						<Link
							to={"/treasure-trails-helper"}>
							<p className="side-menu-options">Home</p>
						</Link>

						<hr className="side-menu-hr" />

						<Link
							to={"/treasure-trails-helper/anagrams"}>
							<p className="side-menu-options">Anagrams</p>
						</Link>

						<Link
							to={"/treasure-trails-helper/challenges"}>
							<p className="side-menu-options">Challenges</p>
						</Link>

						<Link
							to={"/treasure-trails-helper/coordinates"}>
							<p className="side-menu-options">Coordinates</p>
						</Link>

						<Link
							to={"/treasure-trails-helper/lockboxes"}>
							<p className="side-menu-options">Lockboxes</p>
						</Link>

						<Link
							to={"/treasure-trails-helper/maps"}>
							<p className="side-menu-options">Maps</p>
						</Link>

						<Link
							to={"/treasure-trails-helper/puzzleboxguide"}>
							<p className="side-menu-options">Puzzle Box Guide</p>
						</Link>

						<Link
							to={"/treasure-trails-helper/scans"}>
							<p className="side-menu-options">Scans</p>
						</Link>

						<Link
							to={"/treasure-trails-helper/skillingriddles"}>
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