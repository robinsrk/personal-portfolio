import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import "./Home.css";
import image from "../../images/dp3.png";

import ParticlesBg from "particles-bg";
import DecryptName from "./DecryptName";
const Home = () => {
  return (
    <MDBContainer id="home" className="mt-1">
      <ParticlesBg type="lines" bg={true} />
      <MDBRow className="d-flex align-items-center">
        <MDBCol md="6" className="align-items-center">
          <div className="mb-5 d-block" style={{ minHeight: "250px" }}>
            <h1>Hello there!</h1>
            <h1>
              I'm
              <strong>
                <span style={{ color: "#fa6454" }}> Robin</span>
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
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1J82eg5kzqzshceaPRvlm-7EkFA3l9mc9"
            download
            className="link"
          >
            <MDBBtn className="download-btn p-2" size="sm">
              <MDBIcon size="2x" className="icon" icon="arrow-down">
                Download my cv
              </MDBIcon>
            </MDBBtn>
          </a>
        </MDBCol>
        <MDBCol
          md="6"
          lg="6"
          size="6"
          className="d-flex justify-content-center"
        >
          <img alt="" className="img-fluid" src={image} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
