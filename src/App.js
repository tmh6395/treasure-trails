import React, { Component } from 'react';
import Home from "./components/Home/index";
import Anagrams from "./components/Anagrams/index";
// import Challenges from "./components/Challenges/index";
// import Coordinates from "./components/Coordinates/index";
// import Cryptics from "./components/Cryptics/index";
// import Lockboxes from "./components/Lockboxes/index";
// import Maps from "./components/Maps";
// import Puzzlebox from "./components/Puzzle_Boxes/index";
// import Scans from "./components/Scans/index";
// import SkillingRiddles from "./components/Skilling_Riddles/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    return (
      <Router>

        <Row id="main-row">
          <Col>
            <Switch>
              <Route exact path="/treasure-trails" component={Home} />
              <Route exact path="/treasure-trails/anagrams" component={Anagrams} />
              {/* <Route exact path="/treasure-trails/challenges" component={Challenges} /> */}
              {/* <Route exact path="/treasure-trails/coordinates" component={Coordinates} /> */}
              {/* <Route exact path="/treasure-trails/cryptics" component={Cryptics} /> */}
              {/* <Route exact path="/treasure-trails/lockboxes" component={Lockboxes} /> */}
              {/* <Route exact path="/treasure-trails/maps" component={Maps} /> */}
              {/* <Route exact path="/treasure-trails/puzzleboxguide" component={Puzzlebox} /> */}
              {/* <Route exact path="/treasure-trails/scans" component={Scans} /> */}
              {/* <Route exact path="/treasure-trails/skillingriddles" component={SkillingRiddles} /> */} */}
              {/* next step: maybe make a route for simple clues?
            https://runescape.wiki/w/Treasure_Trails/Guide/Simple_clues
            */}
            </Switch>
          </Col>
        </Row >

      </Router >
    )
  }
}

export default App;
