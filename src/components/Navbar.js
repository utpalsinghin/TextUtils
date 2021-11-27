import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  if (props.mode === true) {
    document.body.style.background = "#042743";
    document.body.style.color = "white";
  }
  else {
    document.body.style.background = "white";
    document.body.style.color = "#042743";
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode ? "dark" : "light"} bg-${props.mode ? "dark" : "light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.titleText}
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li> */}
            {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {props.toggleMode}/>
          <label className={`form-check-label ${props.mode ? "text-light" : "text-dark"}`}htmlFor="flexSwitchCheckDefault">{props.mode ? 'Disable Dark Mode' : 'Enable Dark Mode'}</label>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  titleText: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  titleText: "Set Tiltle Here",
  aboutText: "About Us",
};
