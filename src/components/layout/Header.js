import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">
        <a className="navbar-brand" href="#!">
          {branding}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="d-block">
          <ul className="navbar-nav mr-auto pull-right">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="fas fa-home" />
                &nbsp; Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/add">
                <i className="fas fa-plus" />
                &nbsp; Add
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fas fa-address-book" />
                &nbsp; About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Brand"
};

export default Header;
