import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import MapData from "../../clue_data/maps.json";
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

	mapImageSwap = (mapId) => {
		let mapImage = document.getElementById(mapId);

		// This switches the <img>'s src attribute to change it from the clue map to the overworld map, or vice-versa, when clicked
		if (mapImage.src === (window.location.origin + process.env.PUBLIC_URL + "/images/maps_locations/Map_clue_" + mapImage.id + ".png")) {
			mapImage.src = window.location.origin + process.env.PUBLIC_URL + "/images/maps_locations/800px-Map_clue_location_" + mapImage.id + ".png";
		} else if (mapImage.src === window.location.origin + process.env.PUBLIC_URL + "/images/maps_locations/800px-Map_clue_location_" + mapImage.id + ".png") {
			mapImage.src = window.location.origin + process.env.PUBLIC_URL + "/images/maps_locations/Map_clue_" + mapImage.id + ".png";
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
					<Col xs={4} md={3} lg={1}>
						<button id="btn-to-home" className="btn-to-home-map">
							<Link to={"/treasure-trails"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
					<Col xs={8} className="align-self-center">
						<p className="margin-bottom-zero">• Click a map to toggle between its scroll and overworld variants.</p>
					</Col>
				</Row>
			</form>

			<div>
				<Row>
					<Col xs={12} lg={9} xl={10} id="result-container">
						{/* the list of clues, narrowed down to whatever is in the search query */}
						<Row>
							{MapData.map((map, index) => {
								map.key = index;
								return (<Col md={5} key={index} className="results map-results">
									<img
										id={map.keyword}
										alt="map_image_failed_to_load"
										style={{ width: "100%" }}
										onClick={this.mapImageSwap.bind(this, map.keyword)}
										src={window.location.origin + process.env.PUBLIC_URL + "/images/maps_locations/Map_clue_" + map.keyword + ".png"} />
									<p>• {map.location}</p>
								</Col>)
							})}
						</Row>
					</Col>

					{/* side menu links */}
					<Col lg={3} xl={2} id="side-design">

						<div className="side-menu-current">
							<p className="margin-bottom-zero"><span className="span-no-underline">Currently on:</span></p>
							<p className="margin-bottom-zero"><span className="span-no-underline">Maps</span></p>
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
							to={"/treasure-trails/cryptics"}>
							<p className="side-menu-options">Cryptics</p>
						</Link>

						<Link
							to={"/treasure-trails/lockboxes"}>
							<p className="side-menu-options">Lockboxes</p>
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

			<BtnToTop />
		</>);
	}
}

export default App;