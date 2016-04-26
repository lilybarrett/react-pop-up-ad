import './app.scss';

import React from 'react';
import ReactDOM from 'react-dom';

let divElement = <div className="ad">
    <i className="fa fa-times" aria-hidden="true" onClick={event => alert("Are you sure?") }></i>
    <h3><strong>You have won tickets to see Taylor Swift!</strong></h3>
    <h6><strong>Please enter your email so we can send you the tickets</strong></h6>

    <form>
      <input type="text" placeholder="Your email here" id="email-field"></input>
      <input type="submit" value="CLAIM YOUR PRIZE" id="submit-field" onClick=
        {event => event.preventDefault(), console.log("Form Submitted!") }></input>
    </form>
</div>;

ReactDOM.render(
  divElement,
  document.getElementById('app')
);
