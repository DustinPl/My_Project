import React, { Component } from "react";
import flatTire from "./flattire.jpg";
import mich from "./michekin.jpg";
import good from "./goodyear.jpg";
import toyo from "./1024_2.jpg";
 
class Tires extends Component {
  render() {
    return (
      <div>
        <h2>Flat tire service<img src={flatTire} alt="flat tire" width="150" height="90"></img></h2>
        <p>You get a flat tire while riding down the road? Give us a call(276-252-5578) or (276-226-6729) or (276-224-7282)and we will get you set up!!</p>
        <h2>We sell all kinds of different brands of tires</h2>
        <p>We have toyo tires <img src={toyo} alt="toyo"/><br/>
            Michelin Tires<img src={mich} alt="mich" /><br/>
            GoodYear Tires <img src={good} alt="goodyear"/><br/>
            and more! </p>

      </div>
    );
  }
}
 
export default Tires;