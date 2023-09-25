import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import "./Home.css";
import image from "../../images/profile_pic.png";
import profile from "../../images/pro.png";

import { HashLink as Link } from "react-router-hash-link";
import DecryptName from "./DecryptName";
const Home = () => {
  return (
    <MDBContainer
      id="home"
      className="mt-1 d-flex align-items-center justify-content-center"
    >
      <div
        data-cursor-stick="#download"
        data-cursor-color="white"
        style={{
          minWidth: "100vw !important",
          textAlign: "start",
          color: "white",
        }}
        className="mb-5 d-block texts"
      >
        <h1>Hello there!</h1>
        <h1>
          I'm
          <strong>
            <Link to="#about" smooth>
              <span
                id="name"
                style={{
                  textAlign: "center",
                  color: "#4A0BDB",
                  fontFamily: "Lobster",
                  fontSize: "6vh",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                Abul Kalam Robin
              </span>
            </Link>
          </strong>
        </h1>
        <br />
        <h2>
          <span style={{ color: "#4A0BDB", fontWeight: "bolder" }}>
            <DecryptName />
          </span>
        </h2>
        <a
          href="https://drive.google.com/uc?export=download&id=1p94ZmJeAkQUXz3U5KPSAm1wBjwzYF86r"
          download
          className="link"
        >
          <MDBBtn
            data-cursor-color="#4A0BDB"
            data-cursor-size="50"
            className="download-btn p-2"
            style={{ cursor: "none" }}
          >
            <MDBIcon size="2x" className="icon p-2" icon="arrow-down">
              <span id="resume"> Download my resume</span>
            </MDBIcon>
          </MDBBtn>
        </a>
      </div>
      {/* <MDBCol
          md="6"
          lg="6"
          size="6"
          className="d-flex justify-content-center"
        >
          <Link smooth to="#about">
            <img
              alt=""
              style={{ borderRadius: "30%" }}
              className="img-fluid flower__head"
              src={profile}
            />
          </Link>
        </MDBCol> */}
    </MDBContainer>
  );
};

export default Home;
