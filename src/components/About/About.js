import { MDBBtn, MDBContainer, MDBIcon } from "mdbreact";
import React from "react";
import "./About.css";
import profile from "../../images/dp3.png";
import Experiences from "../Experiences/Experiences";

const About = () => {
  return (
    <div id="about">
      <h1 className="title">About me</h1>
      <MDBContainer className="d-flex flex-column justify-content-center">
        <h3
          style={{ color: "#fa6454", fontWeight: "bold", marginTop: "100px" }}
        >
          Who am I
        </h3>
        <div className="d-flex mt-5">
          <div>
            <img alt="" src={profile} style={{ width: "300px" }} />
          </div>
          <div className="mt-5">
            <p>Name: Abul Kalam Robin</p>
            <p> Email: robinsrk3@gmail.com</p>
          </div>
        </div>
        <div>
          <a href="https://www.github.com/robinsrk">
            <MDBBtn className="social-button">
              <MDBIcon fab icon="github-alt" className="pr-1" />
              Github
            </MDBBtn>
          </a>
          <a href="https://www.linkedin.com/in/robinsrk">
            <MDBBtn className="social-button">
              <MDBIcon fab icon="linkedin" className="pr-1" />
              LinkedIn
            </MDBBtn>
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1J82eg5kzqzshceaPRvlm-7EkFA3l9mc9">
            <MDBBtn className="social-button">
              <MDBIcon icon="id-card" className="pr-1" />
              Resume
            </MDBBtn>
          </a>
        </div>
        <div>
          <h3 className="text-center mt-5 title">Experiences</h3>
          <Experiences />
        </div>
      </MDBContainer>
    </div>
  );
};

export default About;
