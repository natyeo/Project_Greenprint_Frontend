import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import Welcome from "./components/welcome.jsx";
import JourneyForm from "./components/journey.jsx";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <div className="journey-planner">
              <Route exact path="/" component={JourneyForm} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </div>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
