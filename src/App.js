import React, { Component } from "react";
import { Router } from "@reach/router";

// components
// import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";

//styles
import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
