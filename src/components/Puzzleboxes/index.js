import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
					<Col>
						<button id="btn-to-home" className="btn-to-home-map">
							<Link to={"/treasure-trails"} id="link-to-home"><FontAwesomeIcon icon={faArrowLeft} /></Link>
						</button>
					</Col>
					<Col xs={8} className="align-self-center">
						<p id="tip-header-searchless" className="margin-bottom-zero">• Complete the puzzle by solving each group of tiles in order of 1-6.</p>
					</Col>
				</Row>
			</form>

			<div>
				<Row>
					<Col xs={12}>
						<p id="tip-below-header-searchless" className="margin-bottom-zero">• Complete the puzzle by solving each group of tiles in order of 1-6.</p>
					</Col>
				</Row>
				<Row>
					<Col md={2} lg={2}></Col>
					<Col xs={12} md={8} lg={5} id="result-container">

						<div style={{ margin: "1rem" }}>
							<img style={{ width: "100%" }} alt="puzzle_box_guide_failed_to_load" src={process.env.PUBLIC_URL + '/images/puzzle_box_guide.jpg'} />
						</div>
					</Col>

					{/* side menu links */}
					<Col lg={3} xl={2} id="side-design">

						<div className="side-menu-current">
							<p className="margin-bottom-zero"><span className="span-no-underline">Currently on:</span></p>
							<p className="margin-bottom-zero"><span className="span-no-underline">Puzzle Box Guide</span></p>
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
							to={"/treasure-trails/maps"}>
							<p className="side-menu-options">Maps</p>
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