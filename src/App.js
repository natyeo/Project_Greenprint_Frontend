import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome.jsx";
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
              <Welcome name="there" />
              <Route exact path="/" component={JourneyForm} />
            </div>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
