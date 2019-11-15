import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import MapData from "../../clue_data/maps.json";
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

	mapImageSwap = (mapId) => {
		let windowOrigin = window.location.origin;
		// Allows the images to load whether the app is loaded locally or on gh-pages
		// gh-pages needs '/treasure-trails' to properly follow the path, but locally needs nothing in its place
		if (windowOrigin === 'http://localhost:3000') {
			windowOrigin = '';
		} else if (windowOrigin === 'https://tmh6395.github.io') {
			windowOrigin = '/treasure-trails-helper';
		}

		let mapImage = document.getElementById(mapId);

		// This switches the <img>'s src attribute to change it from the clue map to the overworld map, or vice-versa, when clicked
		if (mapImage.src === (window.location.origin + windowOrigin + "/images/maps_locations/Map_clue_" + mapImage.id + ".png")) {
			mapImage.src = window.location.origin + windowOrigin + "/images/maps_locations/800px-Map_clue_location_" + mapImage.id + ".png";
		} else if (mapImage.src = window.location.origin + windowOrigin + "/images/maps_locations/800px-Map_clue_location_" + mapImage.id + ".png") {
			mapImage.src = window.location.origin + windowOrigin + "/images/maps_locations/Map_clue_" + mapImage.id + ".png";
		}

	}

	render() {

		let mapImageShow = {
			width: "100%",
			// display: "inline-block",
		}

		let mapImageHide = {
			width: "100%",
			display: "none",
		}

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
					<Col xs={1}></Col>
					<Col xs={4} lg={7} xl={9}>
						<button id="btn-to-home">
							<Link to={"/treasure-trails-helper"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
				</Row>
			</form>

			<div>
				<Row>
					<Col xs={12} lg={10} id="result-container">
						{/* the list of clues, narrowed down to whatever is in the search query */}
						<Row>
							{MapData.map((map, index) => {
								map.key = index;

								let mapImage = map.clueMap;
								let worldImage = map.worldMap;
								let windowOrigin = window.location.origin;
								// Allows the images to load whether the app is loaded locally or on gh-pages
								// gh-pages needs '/treasure-trails' to properly follow the path, but locally needs nothing in its place
								if (windowOrigin === 'http://localhost:3000') {
									windowOrigin = '';
								} else if (windowOrigin === 'https://tmh6395.github.io') {
									windowOrigin = '/treasure-trails-helper';
								}
								console.log("qwerty map.keyword:", map.keyword)

								return (<Col md={5} lg={4} xl={5} key={index} className="results" id="map-results">
									<img
										id={map.keyword}
										alt="map_image_failed_to_load"
										style={mapImageShow}
										onClick={this.mapImageSwap.bind(this, map.keyword)}
										src={window.location.origin + windowOrigin + "/images/maps_locations/Map_clue_" + map.keyword + ".png"} />
									<p>{map.location}</p>
								</Col>)
							})}
						</Row>
					</Col>

					{/* <Col></Col> */}

					{/* side menu links */}
					<Col lg={3} xl={2} id="side-design">
						<Link
							to={"/treasure-trails-helper"}>
							<h3 className="side-menu-options">Home</h3>
						</Link>

						<hr />

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
							to={"/treasure-trails-helper/cryptics"}>
							<h3 className="side-menu-options">Cryptics</h3>
						</Link>

						<Link
							to={"/treasure-trails-helper/lockboxes"}>
							<h3 className="side-menu-options">Lockboxes</h3>
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
					<Col xs={1} xl={9}></Col>
					<Col xs={6}>
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