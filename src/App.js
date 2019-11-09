import React, { Component } from 'react';
import Home from "./components/Home/index";
import Anagrams from "./components/Anagrams/index";
import Challenges from "./components/Challenges/index";
import Coordinates from "./components/Coordinates/index";
import Cryptics from "./components/Cryptics/index";
import Lockboxes from "./components/Lockboxes/index";
import Maps from "./components/Maps";
import Puzzlebox from "./components/Puzzleboxes/index";
import Scans from "./components/Scans/index";
import SkillingRiddles from "./components/SkillingRiddles/index";
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
              <Route exact path="/treasure-trails-helper" component={Home} />
              <Route exact path="/treasure-trails-helper/anagrams" component={Anagrams} />
              <Route exact path="/treasure-trails-helper/challenges" component={Challenges} />
              <Route exact path="/treasure-trails-helper/coordinates" component={Coordinates} />
              <Route exact path="/treasure-trails-helper/cryptics" component={Cryptics} />
              <Route exact path="/treasure-trails-helper/lockboxes" component={Lockboxes} />
              <Route exact path="/treasure-trails-helper/maps" component={Maps} />
              <Route exact path="/treasure-trails-helper/puzzleboxguide" component={Puzzlebox} />
              <Route exact path="/treasure-trails-helper/scans" component={Scans} />
              <Route exact path="/treasure-trails-helper/skillingriddles" component={SkillingRiddles} />
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
