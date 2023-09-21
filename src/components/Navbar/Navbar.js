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
                &lt;Header /&gt;
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth className="m-5 text-white texts" to="#projects">
                &lt;Projects /&gt;
              </Link>
            </MDBNavItem>
            {/* <MDBNavItem>
              <Link smooth className="m-5 text-white texts" to="#blogs">
                &lt;Blogs /&gt;
              </Link>
            </MDBNavItem> */}
            <MDBNavItem>
              <Link smooth className="m-5 text-white texts" to="#about">
                &lt;About /&gt;
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link smooth className="m-5 text-white texts" to="#contactus">
                &lt;Footer /&gt;
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
export default NavbarPage;
