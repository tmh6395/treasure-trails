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
					<Col xs={4} md={3} lg={1}>
						<button id="btn-to-home" className="btn-to-home-map">
							<Link to={"/treasure-trails-helper"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
					<Col xs={8} className="align-self-center">
						<p className="margin-bottom-zero">• Complete the puzzle by solving each group of tiles in order of 1-6.</p>
					</Col>
				</Row>
			</form>

			<div>
				<Row>
					<Col md={2} lg={2}></Col>
					<Col xs={12} md={8} lg={5} id="result-container">

						<div style={{ margin: "1rem" }}>
							<img style={{ width: "100%" }} alt="puzzle_box_guide_failed_to_load" src={process.env.PUBLIC_URL + '/images/puzzle_box_guide.jpg'} />
						</div>
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
							to={"/treasure-trails-helper/cryptics"}>
							<p className="side-menu-options">Cryptics</p>
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
							to={"/treasure-trails-helper/scans"}>
							<p className="side-menu-options">Scans</p>
						</Link>

						<Link
							to={"/treasure-trails-helper/skillingriddles"}>
							<p className="side-menu-options">Skilling Riddles</p>
						</Link>
					</Col>
					<Col></Col>
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