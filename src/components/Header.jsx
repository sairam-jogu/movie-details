import React from "react";
import { Link } from "react-router-dom";

import { NavbarItems } from "./NavbarItems";

function Header() {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl text-center">
          <div className="row">
            <div className="col-4">
              <p className="text-white mb-0">
                Watch your Free Online{" "}
                <span className="logo" style={{ fontSize: 16 }}>
                  Movies
                </span>{" "}
                and{" "}
                <span className="logo" style={{ fontSize: 16 }}>
                  Series
                </span>
              </p>
            </div>
            <div className="col-8 px-5">
              <p className="text-end mb-0">
                <span className="logo" style={{ fontSize: 16 }}>
                  HotLine:
                </span>
                <a className="text-white link" href="tel:+91 7674889148">
                  +91 7674889148
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2">
        <div className="conatiner-xxl pad text-center">
          <div className="row">
            <div className="col-4 py-3">
              <h2>
                <Link className="text-white link">
                  <span className="logo">IRIS</span> Movies
                </Link>
              </h2>
            </div>
            <div className="col-8 px-5 searchButton">
              {/* <Link to={'/search'} className="btn btn-dark search2"  style={{backgroundColor:'#ff004f',width:'100%'}}>
              Search */}
              <Link to={"/search"}>
                <button className="search2">Search</button>
              </Link>
            </div>
            {/* <div className="col-4 searchButton">
              <Link to={'/signup'}>
                <button className="search2">LOGIN</button>
              </Link>
            </div> */}
          </div>
        </div>
      </header>
      <header className="navbar-strip py-2">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid containerTwo">
            <button
              className="navbar-toggler navs"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                style={{ border: "none" }}
              ></span>
            </button>
            <div
              className="collapse navbar-collapse navi-container"
              id="navbarNav"
            >
              <ul className="navbar-nav ">
                {NavbarItems.map((item, index) => {
                  return (
                    <div className="col-7 text-center navbar-color" key={index}>
                      <li key={index} className={item.cName}>
                        <Link to={item.url} key={index} className="nav-link">
                          {item.title}
                        </Link>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
