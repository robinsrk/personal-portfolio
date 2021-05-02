import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <h1 className="title">About me</h1>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <h4 className="title">Experiences</h4>
          </MDBCol>
          <MDBCol>
            <h4 className="title">Experiences</h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default About;
