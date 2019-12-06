import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import CrypticData from "../../clue_data/cryptics.json";
import BtnToTop from "../ButtonToTop";
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
					<Col xs={1} id="hide-when-md"></Col>
					<Col lg={5} className="align-self-center" id="tip-header">
						<p className="margin-bottom-zero">• If a cryptic clue requires a key, then you should get the key first to save time.</p>
					</Col>
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
					<Col xs={12}>
						<p id="tip-below-header">• If a cryptic clue requires a key, then you should get the key first to save time.</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} lg={7} id="result-container">
						{/* the list of clues, narrowed down to whatever is in the search query */}
						{CrypticData.map((cryptic, index) => {
							let crypticImage = cryptic.image;

							if (cryptic.riddle.toLowerCase().includes(this.state.query.toLowerCase())) {
								return <div className="results" key={index}>
									<Row>
										<Col xs={12}>
											<span>Cryptic:</span>
											<p className="question-text cryptic-question-text">{cryptic.riddle}</p>
										</Col>
									</Row>
									<Row>
										<Col>
											<div style={cryptic.keyInfo === "N/A" ? { display: "none" } : { display: "block" }}>
												<hr />
												<span>Key Info:</span>
												<p>{cryptic.keyInfo}</p>
											</div>
										</Col>
									</Row>
									<Row>
										<Col xs={12} md={6}>
											<img
												className="cryptic-images"
												alt="cryptic_image_failed_to_load"
												src={process.env.PUBLIC_URL + '/images/cryptics_locations/' + crypticImage} />
										</Col>
										<Col xs={12} md={6}>
											<span>Solution:</span>
											<p>{cryptic.answer}</p>
										</Col>
									</Row>
								</div>
							}
						})}
					</Col>

					{/* side menu links */}
					<Col lg={3} xl={2} id="side-design">

						<div className="side-menu-current">
							<p className="margin-bottom-zero"><span className="span-no-underline">Currently on:</span></p>
							<p className="margin-bottom-zero"><span className="span-no-underline">Cryptics</span></p>
						</div>

						<hr className="side-menu-hr" />

						<Link
							to={"/treasure-trails/anagrams"}>
							<p className="side-menu-options">Anagrams</p>
						</Link>

						<Link
							to={"/treasure-trails/challenges"}>
							<p className="side-menu-options">Challenges</p>
						</Link>

						<Link
							to={"/treasure-trails/coordinates"}>
							<p className="side-menu-options">Coordinates</p>
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
							to={"/treasure-trails/simpleclues"}>
							<p className="side-menu-options">Simple Clues</p>
						</Link>

						<Link
							to={"/treasure-trails/skillingriddles"}>
							<p className="side-menu-options">Skilling Riddles</p>
						</Link>
					</Col>
				</Row>
			</div>

			<BtnToTop />
		</>);
	}
}

export default App;