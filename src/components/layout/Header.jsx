import React from "react";
import { Link } from "react-router-dom";
import "../../css/header.css";

function Header() {
  return (
    // <div className="nav">
    //   <Link to="/">Home</Link>
    //   <Link to="/movie">Movie</Link>
    //   <Link to="/count">Count</Link>
    //   <Link to="/about">About</Link>
    //   <button type="button" class="btn btn-info">info</button>
    // </div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">APP</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movie">Movie</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mini-game">Game</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/food">Food</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link disabled" to="/">disabled</Link>
          </li> */}
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link>
            <ul className="dropdown-menu" aria-labelledby="dropdown04">
              <li><Link className="dropdown-item" to="#">Action</Link></li>
              <li><Link className="dropdown-item" to="#">Another action</Link></li>
              <li><Link className="dropdown-item" to="#">Something else here</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;