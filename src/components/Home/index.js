import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
	render() {
		return (<>
			<div id="main-design">
				<Row className="main-row-links header-row">
					<Col></Col>
					<Col xs={12} md={8} lg={4} id="main-col-links">
						<Link
							to={"/treasure-trails-helper/anagrams"}>
							<p className="main-menu-options">Anagrams</p>
						</Link>
						
						<Link
							to={"/treasure-trails-helper/challenges"}>
							<p className="main-menu-options">Challenges</p>
						</Link>
						
						<Link
							to={"/treasure-trails-helper/coordinates"}>
							<p className="main-menu-options">Coordinates</p>
						</Link>
						
						<Link
							to={"/treasure-trails-helper/cryptics"}>
							<p className="main-menu-options">Cryptics</p>
						</Link>
						
						<Link
							to={"/treasure-trails-helper/lockboxes"}>
							<p className="main-menu-options">Lockboxes</p>
						</Link>
						
						<Link
							to={"/treasure-trails-helper/maps"}>
							<p className="main-menu-options">Maps</p>
						</Link>
						
						<Link
							to={"/treasure-trails-helper/puzzleboxguide"}>
							<p className="main-menu-options">Puzzle Box Guide</p>
						</Link>
						
						<Link
							to={"/treasure-trails-helper/scans"}>
							<p className="main-menu-options">Scans</p>
						</Link>
						
						<Link
							to={"/treasure-trails-helper/skillingriddles"}>
							<p className="main-menu-options">Skilling Riddles</p>
						</Link>
					</Col>
					<Col></Col>
				</Row>

				{/* Simple solution for pages where #btn-to-top doesn't exist, so the scrollFunction doesn't cry "error!" */}
				<span id="btn-to-top"></span>
			</div>
		</>);
	}
};

export default Home;