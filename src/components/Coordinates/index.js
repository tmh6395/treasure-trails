import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import CoordinateData from "../../clue_data/coordinates.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
	// handler recieves the `e` event object
	formPreventDefault(e) {
		e.preventDefault();
	}

	state = {
		query: '',
		inputDegreesNS: '',
		buttonNorth: 0,
		buttonSouth: 0,
		buttonWest: 0,
		buttonEast: 0,
	}

	handleQueryChange = () => {
		this.setState({
			query: this.search.value
		})
	}

	handleDegreesChange = () => {
		this.setState({
			inputDegreesNS: this.degrees.value
		})
	}

	toggleActiveNorth = () => {
		this.setState({ buttonNorth: !this.state.buttonNorth });
		if (this.state.buttonSouth) {
			this.setState({ buttonSouth: !this.state.buttonSouth });
		}
	}

	toggleActiveSouth = () => {
		this.setState({ buttonSouth: !this.state.buttonSouth });
		if (this.state.buttonNorth) {
			this.setState({ buttonNorth: !this.state.buttonNorth });
		}
	}

	toggleActiveWest = () => {
		this.setState({ buttonWest: !this.state.buttonWest });
		if (this.state.buttonEast) {
			this.setState({ buttonEast: !this.state.buttonEast });
		}
	}

	toggleActiveEast = () => {
		this.setState({ buttonEast: !this.state.buttonEast });
		if (this.state.buttonWest) {
			this.setState({ buttonWest: !this.state.buttonWest });
		}
	}

	refreshAll = () => {
		let input = document.getElementById("degrees-ns");
		this.setState({
			inputDegreesNS: '',
		}, () => input.value = "");
	}

	toggleDirections = () => {
		let directions = document.getElementById("div-directions");

		if (directions.style.display !== "none") {
			directions.style.display = "none";
		} else {
			directions.style.display = "block";
		}
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
					<Col lg={5} className="align-self-center" id="tip-header">
						<p className="margin-bottom-zero">• Tip: The shorthand for the coordinates is in the format: degrees°minutes.</p>
					</Col>
					<Col>
						<button id="btn-to-home">
							<Link to={"/treasure-trails"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
				</Row>
			</form>

			<div>
				<Row>
					<Col xs={12}>
						<p id="tip-below-header">• Tip: The shorthand for the coordinates is in the format: degrees°minutes.</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="coordinate-btn-column">
						<Row>
							<Col xs={6} md={3} lg={2}>
								<button
									className="coordinate-btn"
									id={this.state.buttonNorth ? 'btn-option-north-clicked' : 'btn-option-north-unclicked'}
									onClick={this.toggleActiveNorth}>North
									</button>
							</Col>
							<Col xs={6} md={3} lg={2}>
								<button
									className="coordinate-btn"
									id={this.state.buttonSouth ? 'btn-option-south-clicked' : 'btn-option-south-unclicked'}
									onClick={this.toggleActiveSouth}>South
								</button>
							</Col>
							<Col></Col>
						</Row>

						<Row>
							<Col xs={6} md={3} lg={2}>
								<button
									className="coordinate-btn"
									id={this.state.buttonWest ? 'btn-option-west-clicked' : 'btn-option-west-unclicked'}
									onClick={this.toggleActiveWest}>West
									</button>
							</Col>
							<Col xs={6} md={3} lg={2}>
								<button
									className="coordinate-btn"
									id={this.state.buttonEast ? 'btn-option-east-clicked' : 'btn-option-east-unclicked'}
									onClick={this.toggleActiveEast}>East
									</button>
							</Col>
							<Col></Col>
						</Row>

						<Row>
							<Col xs={6} md={3} lg={2}>
								<input
									className="coordinate-input"
									id="degrees-ns"
									type="number"
									placeholder="degrees N/S"
									min="0"
									max="25"
									ref={input => this.degrees = input}
									onChange={this.handleDegreesChange} />
							</Col>
							<Col xs={6} md={3} lg={2}>
								<button
									id="refresh-btn"
									onClick={this.refreshAll}>
									<FontAwesomeIcon icon={faRedoAlt} />
								</button>
							</Col>
							<Col></Col>
						</Row>
					</Col>

					<Col xs={12} lg={7} id="result-container">
						{/* show results based on the directional buttons that are active */}
						{CoordinateData.map((coordinate, index) => {
							coordinate.key = index;

							// Check if the North and West buttons are active
							if (this.state.buttonNorth && this.state.buttonWest) {
								// Only display the clues that have values equal to or greater than 0 N/W
								if (coordinate.degreesN >= 0 && coordinate.minutesN >= 0 && coordinate.degreesW >= 0 && coordinate.minutesW >= 0) {
									// Show all clues if #input-ns is empty, otherwise show where coordinate.degreesN === #input-ns
									if (this.state.inputDegreesNS == coordinate.degreesN) {
										return <div className="results" key={index}>
											<Row>
												<Col xs={6}>
													<span>Coordinates:</span>
													<p>{coordinate.degreesN}°{coordinate.minutesN} N</p>
													<p>{coordinate.degreesW}°{coordinate.minutesW} W</p>
													<span>Location:</span>
													<p>{coordinate.location}</p>
												</Col>
												<Col xs={6} style={{ verticalAlign: "middle" }}>
													<img
														className="coordinate-images"
														alt="coordinate_image_failed_to_load"
														src={window.location.origin + process.env.PUBLIC_URL + "/images/coordinates_locations/" + coordinate.image}
													/>
												</Col>
											</Row>
										</div>
									} else if (this.state.inputDegreesNS == '') {
										return <div className="results" key={index}>
											<Row>
												<Col xs={6}>
													<span>Coordinates:</span>
													<p>{coordinate.degreesN}°{coordinate.minutesN} N</p>
													<p>{coordinate.degreesW}°{coordinate.minutesW} W</p>
													<span>Location:</span>
													<p>{coordinate.location}</p>
												</Col>
												<Col xs={6} style={{ verticalAlign: "middle" }}>
													<img
														className="coordinate-images"
														alt="coordinate_image_failed_to_load"
														src={window.location.origin + process.env.PUBLIC_URL + "/images/coordinates_locations/" + coordinate.image}
													/>
												</Col>
											</Row>
										</div>
									}
								}
							}
							// Check if the North and East buttons are active
							else if (this.state.buttonNorth && this.state.buttonEast) {
								// Only display the clues that have values equal to or greater than 0 N/E
								if (coordinate.degreesN >= 0 && coordinate.minutesN >= 0 && coordinate.degreesE >= 0 && coordinate.minutesE >= 0) {
									// Show all clues if #input-ns is empty, otherwise show where coordinate.degreesN === #input-ns
									if (this.state.inputDegreesNS == coordinate.degreesN) {
										return <div className="results" key={index}>
											<Row>
												<Col xs={6}>
													<span>Coordinates:</span>
													<p>{coordinate.degreesN}°{coordinate.minutesN} N</p>
													<p>{coordinate.degreesE}°{coordinate.minutesE} E</p>
													<span>Location:</span>
													<p>{coordinate.location}</p>
												</Col>
												<Col xs={6}>
													<img
														className="coordinate-images"
														alt="coordinate_image_failed_to_load"
														src={window.location.origin + process.env.PUBLIC_URL + "/images/coordinates_locations/" + coordinate.image}
													/>
												</Col>
											</Row>
										</div>
									} else if (this.state.inputDegreesNS == '') {
										return <div className="results" key={index}>
											<Row>
												<Col xs={6}>
													<span>Coordinates:</span>
													<p>{coordinate.degreesN}°{coordinate.minutesN} N</p>
													<p>{coordinate.degreesE}°{coordinate.minutesE} E</p>
													<span>Location:</span>
													<p>{coordinate.location}</p>
												</Col>
												<Col xs={6} style={{ verticalAlign: "middle" }}>
													<img
														className="coordinate-images"
														alt="coordinate_image_failed_to_load"
														src={window.location.origin + process.env.PUBLIC_URL + "/images/coordinates_locations/" + coordinate.image}
													/>
												</Col>
											</Row>
										</div>
									}
								}
							}

							// Check if the South and West buttons are active
							else if (this.state.buttonSouth && this.state.buttonWest) {
								if (coordinate.key === 0) {
									return <div className="results" key={index}>
										<p>There are no coordinate clues that point in the south-west direction.</p>
									</div>
								}
							}

							// Check if the South and East buttons are active
							else if (this.state.buttonSouth && this.state.buttonEast) {
								// Only display the clues that have values equal to or greater than 0 S/E
								if (coordinate.degreesS >= 0 && coordinate.minutesS >= 0 && coordinate.degreesE >= 0 && coordinate.minutesE >= 0) {
									// Show all clues if #input-ns is empty, otherwise show where coordinate.degreesN === #input-ns
									if (this.state.inputDegreesNS == coordinate.degreesS) {
										return <div className="results" key={index}>
											<Row>
												<Col xs={6}>
													<span>Coordinates:</span>
													<p>{coordinate.degreesS}°{coordinate.minutesS} S</p>
													<p>{coordinate.degreesE}°{coordinate.minutesE} E</p>
													<span>Location:</span>
													<p>{coordinate.location}</p>
												</Col>
												<Col xs={6}>
													<img
														className="coordinate-images"
														alt="coordinate_image_failed_to_load"
														src={window.location.origin + process.env.PUBLIC_URL + "/images/coordinates_locations/" + coordinate.image}
													/>
												</Col>
											</Row>
										</div>
									} else if (this.state.inputDegreesNS == '') {
										return <div className="results" key={index}>
											<Row>
												<Col xs={6}>
													<span>Coordinates:</span>
													<p>{coordinate.degreesS}°{coordinate.minutesS} S</p>
													<p>{coordinate.degreesE}°{coordinate.minutesE} E</p>
													<span>Location:</span>
													<p>{coordinate.location}</p>
												</Col>
												<Col xs={6}>
													<img
														className="coordinate-images"
														alt="coordinate_image_failed_to_load"
														src={window.location.origin + process.env.PUBLIC_URL + "/images/coordinates_locations/" + coordinate.image}
													/>
												</Col>
											</Row>
										</div>
									}
								}
							}
						})}
					</Col>

					{/* side menu links */}
					<Col lg={3} xl={2} id="side-design">

						<div className="side-menu-current">
							<p className="margin-bottom-zero"><span className="span-no-underline">Currently on:</span></p>
							<p className="margin-bottom-zero"><span className="span-no-underline">Coordinates</span></p>
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