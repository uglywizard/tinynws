import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./containers/DetailPage";
import Paginator from "./containers/Paginator";
import Headings from "./components/Headings";
import Footer from "./components/Footer";

/*
Given the simplicity of the requests, I decided to not use axios.
The two distinct requests are purely for the purpose of testing both endpoints of the API.
In retrospect I could have implemented a central store to manage
the data flow uniformly on both components.
*/

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
