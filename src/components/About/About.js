import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import "./About.css";
import profile from "../../images/dp.png";
import Experiences from "../Experiences/Experiences";
import { Bounce, Zoom } from "react-reveal";

const About = () => {
  return (
    <div id="about">
      <h1 className="title">About me</h1>
      <MDBContainer className="d-flex flex-column justify-content-start">
        <Zoom>
          <img alt="" src={profile} style={{ width: "300px" }} />
        </Zoom>
        <div className="d-flex align-items-start flex-column mt-5">
          <p>
            <span style={{ color: "#fa6454", fontWeight: "bold" }}>Name:</span>{" "}
            <span style={{ color: "white", fontWeight: "normal" }}>
              Abul Kalam Robin
            </span>{" "}
          </p>
          <p>
            <span style={{ color: "#fa6454", fontWeight: "bold" }}>Email:</span>{" "}
            <span style={{ color: "white", fontWeight: "normal" }}>
              abul.kalam.robin.dev@gmail.com
            </span>{" "}
          </p>
          <div
            className="d-flex align-items-start"
            style={{ textAlign: "start", color: "white", fontWeight: "normal" }}
          >
            <p>
              I'm a fresh flutter developer excited to kickstart my career. My
              goal is to work on mobile apps using flutter, making them
              user-friendly and cool. I want to join a fun team, keep learning,
              and improve my skills while working on interesting projects. I aim
              to create great apps that people love to use and stay up-to-date
              with all the cool stuff in mobile app development. I'm ready to be
              a helpful member of the team, help the company succeed, and grow
              in my career in the world of mobile app making.
            </p>
          </div>
        </div>
        <div className="d-flex">
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
      </MDBContainer>
    </div>
  );
};

export default About;
