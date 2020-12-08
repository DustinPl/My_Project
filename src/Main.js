import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Tires";
  import Contact from "./Contact"; 
  import logo from "./logo.png";

class Main extends Component {
  render() {
    return (
        <HashRouter>

        <div>  
          <div id= "center"><img src={logo} alt="logo" width="900" height="350"></img></div>

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