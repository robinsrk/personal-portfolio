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
      <div className="mb-5 d-block texts">
        <h1>Hello there!</h1>
        <h1>
          I'm
          <strong>
            <Link to="#about" smooth>
              <span
                style={{
                  color: "#fa6454",
                  fontFamily: "Monaco",
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
        <h2>I work on</h2>
        <h1>
          <strong>
            <span style={{ color: "#fa6454" }}>
              <DecryptName />
            </span>
          </strong>
        </h1>
        <a
          // href="https://drive.google.com/uc?export=download&id=1J82eg5kzqzshceaPRvlm-7EkFA3l9mc9"
          href="https://drive.google.com/uc?export=download&id=1p94ZmJeAkQUXz3U5KPSAm1wBjwzYF86r"
          download
          className="link"
        >
          <MDBBtn className="download-btn p-2" size="sm">
            <MDBIcon size="2x" className="icon" icon="arrow-down">
              <span> Download my resume</span>
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
