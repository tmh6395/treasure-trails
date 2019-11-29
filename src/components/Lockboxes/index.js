import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import LockboxData from "../../clue_data/lockboxes.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
	// handler recieves the `e` event object
	formPreventDefault(e) {
		e.preventDefault();
	}

	state = {
		query: "",
		toggleSolved: 0,
	}

	handleQueryChange = () => {
		this.setState({
			query: this.search.value
		})
	}

	toggleDirections = () => {
		let directions = document.getElementById("div-directions");
		if (directions.style.display !== "none") {
			directions.style.display = "none";
		} else {
			directions.style.display = "block";
		}
	}

	switchImage = (lockboxId) => {
		let lockboxImage = document.getElementById(lockboxId);

		// This switches the <img>'s src attribute to change it from unsolved to solution, or vice-versa, when clicked
		if (lockboxImage.src === (window.location.origin + process.env.PUBLIC_URL + "/images/lockboxes/300px-Lockbox_example_" + lockboxImage.id + "_unsolved.png")) {
			lockboxImage.src = window.location.origin + process.env.PUBLIC_URL + "/images/lockboxes/300px-Lockbox_example_" + lockboxImage.id + "_solution.png";
		} else if (lockboxImage.src === (window.location.origin + process.env.PUBLIC_URL + "/images/lockboxes/300px-Lockbox_example_" + lockboxImage.id + "_solution.png")) {
			lockboxImage.src = window.location.origin + process.env.PUBLIC_URL + "/images/lockboxes/300px-Lockbox_example_" + lockboxImage.id + "_unsolved.png"
		}
	}

	render() {
		return (<>
			<form id="search-form" onSubmit={this.formPreventDefault}>
				<Row className="header-row">
					<Col xs={4} md={3} lg={1}>
						<button id="btn-to-home">
							<Link to={"/treasure-trails"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
					<Col xs={8} className="align-self-center">
						<p className="margin-bottom-zero">• Click on an image to toggle its solution. Click each title the number of times listed on it.</p>
					</Col>
				</Row>
			</form>

			<div>
				<Row>
					<Col xs={12} lg={9} id="result-container">

						{LockboxData.map((lockbox, index) => {

							return (<div key={index} className="div-lockboxes" style={{ display: "inline-block", padding: "1rem" }}>
								<p className="text-lockbox-patterns">Lockbox Pattern {index + 1}</p>
								<img
									id={lockbox.number}
									className="lockbox-images"
									alt="lockbox_image_failed_to_load"
									onClick={this.switchImage.bind(this, lockbox.number)}
									src={window.location.origin + process.env.PUBLIC_URL + "/images/lockboxes/300px-Lockbox_example_" + lockbox.number + "_unsolved.png"}
								/>
							</div>);
						})}
					</Col>

					{/* side menu links */}
					<Col lg={3} xl={2} id="side-design">

						<div className="side-menu-current">
							<p className="margin-bottom-zero"><span className="span-no-underline">Currently on:</span></p>
							<p className="margin-bottom-zero"><span className="span-no-underline">Lockboxes</span></p>
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
				{/* Simple solution for pages where #btn-to-top doesn't exist, so the scrollFunction doesn't cry "error!" */}
				<span id="btn-to-top"></span>
			</div>
		</>);
	}
}

export default App;