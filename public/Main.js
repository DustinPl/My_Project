import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "../src/Home";
  import Stuff from "../src/Tires";
  import Contact from "../src/Contact"; 

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>R&J Tire</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Tires">Tires</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/Tires" component={Stuff}/>
            <Route exact path="/contact" component={Contact}/>            
             </div>
        </div> 
        </HashRouter>

    );
  }
}

export default Main;