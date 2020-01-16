import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import JourneyForm from "./components/journey.jsx";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
// import { userService } from "./services/authentication.service";
import Profile from "./components/profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  myCallback = dataFromChild => {
    this.setState({ isLoggedIn: dataFromChild });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar isLoggedIn={this.state.isLoggedIn} />
          <div className="journey-planner">
            <Switch>
              <Route exact path="/" component={JourneyForm} />
              <Route
                exact
                path="/login"
                render={props => (
                  <Login {...props} callbackFromParent={this.myCallback} />
                )}
              />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
