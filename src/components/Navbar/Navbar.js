import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
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
      <MDBNavbar
        expand="md"
        dark
        className="navbar"
        style={{ fontWeight: "bold", color: "#fa6454" }}
      >
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <Link className="m-5 text-white texts" smooth to="#home">
                Home
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth className="m-5 text-white texts" to="#projects">
                Projects
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth className="m-5 text-white texts" to="#blogs">
                Blogs
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth className="m-5 text-white texts" to="#about">
                About
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth className="m-5 text-white texts" to="#contactus">
                Contact Me
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
