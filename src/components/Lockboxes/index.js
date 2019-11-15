import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
		if (directions.style.display != "none") {
			directions.style.display = "none";
		} else {
			directions.style.display = "block";
		}
	}

	switchImage = (lockboxId) => {
		let windowOrigin = window.location.origin;
		// Allows the images to load whether the app is loaded locally or on gh-pages
		// gh-pages needs '/treasure-trails' to properly follow the path, but locally needs nothing in its place
		if (windowOrigin === 'http://localhost:3000') {
			windowOrigin = '';
		} else if (windowOrigin === 'https://tmh6395.github.io') {
			windowOrigin = '/treasure-trails-helper';
		}

		let lockboxImage = document.getElementById(lockboxId);
		console.log("lockboxImage:", lockboxImage);
		console.log("lockboxImage.id:", lockboxImage.id);
		console.log("lockboxImage.src:", lockboxImage.src);

		// This switches the <img>'s src attribute to change it from unsolved to solution, or vice-versa, when clicked
		if (lockboxImage.src === (window.location.origin + windowOrigin + "/images/lockboxes/300px-Lockbox_example_" + lockboxImage.id + "_unsolved.png")) {
			lockboxImage.src = window.location.origin + windowOrigin + "/images/lockboxes/300px-Lockbox_example_" + lockboxImage.id + "_solution.png";
		} else if (lockboxImage.src === (window.location.origin + windowOrigin + "/images/lockboxes/300px-Lockbox_example_" + lockboxImage.id + "_solution.png")) {
			lockboxImage.src = window.location.origin + windowOrigin + "/images/lockboxes/300px-Lockbox_example_" + lockboxImage.id + "_unsolved.png"
		}
	}

	render() {

		let windowOrigin = window.location.origin;
		// Allows the images to load whether the app is loaded locally or on gh-pages
		// gh-pages needs '/treasure-trails-helper' to properly follow the path, but locally needs nothing in its place
		if (windowOrigin === 'http://localhost:3000') {
			windowOrigin = '';
		} else if (windowOrigin === 'https://tmh6395.github.io') {
			windowOrigin = '/treasure-trails-helper';
		}

		let status = "unsolved";


		return (<>
			<form id="search-form" onSubmit={this.formPreventDefault}>
				<Row>
					<Col xs={1}></Col>
					<Col xs={1}>
						<button id="btn-to-home">
							<Link to={"/treasure-trails-helper"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
					<Col xs={8} id="lockbox-basic-text"><h3>Click on an image to see its solution.  Click the help button for extra help.</h3></Col>
					<Col id="btn-help-column">
						<button id="btn-help" onClick={this.toggleDirections}>Help</button>
					</Col>
				</Row>
				<Row>
					<Col xs={2}></Col>
					<Col>
						<div id="div-directions" style={{ display: "none" }}>
							<hr />
							<p>1. Starting in the second row, click the tiles to change all of the tiles in the first row to be the same icon.</p>
							<p>2. Repeat this for each row, to change the row above it, until all of the tiles are the same icon except in the last row.</p>
							<p>3. Match your pattern to one of the patterns below, then click on it.  Remember the order: Melee > Range > Magic ></p>
							<p>4. Starting from the top, click each tile a number of times equal to the number on said tile.</p>
						</div>
					</Col>
					<Col xs={2}></Col>
				</Row>
			</form>

			<div>
				<Row>
					<Col lg={9} id="result-container">

						{LockboxData.map((lockbox, index) => {
							let windowOrigin = window.location.origin;
							// Allows the images to load whether the app is loaded locally or on gh-pages
							// gh-pages needs '/treasure-trails' to properly follow the path, but locally needs nothing in its place
							if (windowOrigin === 'http://localhost:3000') {
								windowOrigin = '';
							} else if (windowOrigin === 'https://tmh6395.github.io') {
								windowOrigin = '/treasure-trails-helper';
							}

							return (<div key={index} className="div-lockboxes" style={{ display: "inline-block", margin: "auto", padding: "1rem" }}>
								<h2 className="text-lockbox-patterns">Lockbox Pattern {index + 1}</h2>
								<img
									id={lockbox.number}
									alt="lockbox_image_failed_to_load"
									onClick={this.switchImage.bind(this, lockbox.number)}
									src={window.location.origin + windowOrigin + "/images/lockboxes/300px-Lockbox_example_" + lockbox.number + "_unsolved.png"}
								/>
							</div>)

						})}
					</Col>

					<Col></Col>

					{/* side menu links */}
					<Col xl={2} lg={3} id="side-design">
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
				{/* Simple solution for pages where #btn-to-top doesn't exist, so the scrollFunction doesn't cry "error!" */}
				<span id="btn-to-top"></span>
			</div>
		</>);
	}
}

export default App;