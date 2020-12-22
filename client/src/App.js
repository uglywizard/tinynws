import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./containers/DetailPage";
import Paginator from "./containers/Paginator";

function App() {
  return (
    <div>
      <div>
        <h1>Tiny NeoWS</h1>
        <h2>Near Earth Objects Dashboard</h2>
      </div>
      <Router>
        <Switch>
          <Route path='/' exact component={Paginator} />
          <Route path='/:id/' component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
