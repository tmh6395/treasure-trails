import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		return (<>
			<div className="main-design" style={{ backgroundColor: "#172136" }}>

				<Link
					className="main-menu-options"
					to={"/treasure-trails-helper/anagrams"}>
					<p>Anagrams</p>
				</Link>

				<Link
					className="main-menu-options"
					to={"/treasure-trails-helper/challenges"}>
					<p>Challenges</p>
				</Link>

				<Link
					className="main-menu-options"
					to={"/treasure-trails-helper/coordinates"}>
					<p>Coordinates</p>
				</Link>

				<Link
					className="main-menu-options"
					to={"/treasure-trails-helper/cryptics"}>
					<p>Cryptics</p>
				</Link>

				<Link
					className="main-menu-options"
					to={"/treasure-trails-helper/lockboxes"}>
					<p>Lockboxes</p>
				</Link>

				<Link
					className="main-menu-options"
					to={"/treasure-trails-helper/maps"}>
					<p>Maps</p>
				</Link>

				<Link
					className="main-menu-options"
					to={"/treasure-trails-helper/puzzleboxguide"}>
					<p>Puzzle Box Guide</p>
				</Link>

				<Link
					className="main-menu-options"
					to={"/treasure-trails-helper/scans"}>
					<p>Scans</p>
				</Link>

				<Link
					className="main-menu-options"
					to={"/treasure-trails-helper/skillingriddles"}>
					<p>Skilling Riddles</p>
				</Link>

				{/* Simple solution for pages where #btn-to-top doesn't exist, so the scrollFunction doesn't cry "error!" */}
				<span id="btn-to-top"></span>
			</div>
		</>);
	}
};

export default Home;