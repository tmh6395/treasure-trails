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
import SimpleClues from "./components/SimpleClues/index";
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
        <Row id="main-row-routes">
          <Col>
            <Switch>
              <Route exact path="/treasure-trails" component={Home} />
              <Route path="/treasure-trails/anagrams" component={Anagrams} />
              <Route path="/treasure-trails/challenges" component={Challenges} />
              <Route path="/treasure-trails/coordinates" component={Coordinates} />
              <Route path="/treasure-trails/cryptics" component={Cryptics} />
              <Route path="/treasure-trails/lockboxes" component={Lockboxes} />
              <Route path="/treasure-trails/maps" component={Maps} />
              <Route path="/treasure-trails/puzzleboxguide" component={Puzzlebox} />
              <Route path="/treasure-trails/scans" component={Scans} />
              <Route path="/treasure-trails/simpleclues" component={SimpleClues} />
              <Route path="/treasure-trails/skillingriddles" component={SkillingRiddles} />
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
