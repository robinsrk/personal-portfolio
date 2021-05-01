import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
// import {
//   Link,
//   DirectLink,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from "react-scroll";
import Home from "../Home/Home";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar expand="md" className="navbar">
        <MDBNavbarBrand>
          <h1>
            <strong style={{ color: "#fa6454" }}>Robin</strong>
          </h1>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <Link className="m-5 text-white" smooth to="#home">
                Home
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth className="m-5 text-white" to="#projects">
                Projects
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth className="m-5 text-white" to={{ Home }}>
                Blogs
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth className="m-5 text-white" to={{ Home }}>
                About
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
