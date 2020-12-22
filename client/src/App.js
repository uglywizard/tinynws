import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./containers/DetailPage";
import Paginator from "./containers/Paginator";
import Headings from "./components/Headings";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='main'>
      <Headings />
      <Router>
        <Switch>
          <Route path='/' exact component={Paginator} />
          <Route path='/:id/' component={DetailPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
