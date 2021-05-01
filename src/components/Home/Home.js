import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import image from "../../images/dp3.png";

const Home = () => {
  return (
    <MDBContainer id="home" className="mt-1">
      <MDBRow style={{ height: "95vh" }} className="d-flex align-items-center">
        <MDBCol md="6" className="align-items-center">
          <div className="mb-5 d-block" style={{ minHeight: "300px" }}>
            <h1>Hello there!</h1>
            <h1>
              I'm{" "}
              <strong>
                <span style={{ color: "#fa6454" }}>Robin</span>
              </strong>
            </h1>
            <br />
            <h2>I work on</h2>
            <Typewriter
              className="m-5"
              style={{ minHeight: "400px" }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<h1><strong style="color: #fa6454"> JavaScript</strong><h1>`
                  )
                  .pauseFor(1000)
                  .deleteChars(10)
                  .typeString(
                    `<h1><strong style="color: #fa6454">ExpressJS</strong><h1>`
                  )
                  .pauseFor(1000)
                  .deleteChars(9)
                  .typeString(
                    `<h1><strong style="color: #fa6454">NodeJS</strong><h1>`
                  )
                  .pauseFor(1000)
                  .deleteChars(6)
                  .typeString(
                    `<h1><strong style="color: #fa6454">MongoDB</strong><h1>`
                  )
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                cursor: " ",
                loop: true,
                delay: 50,
                deleteSpeed: 50,
              }}
            />
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
        <MDBCol sm="8" md="6" className="d-flex justify-content-center">
          <img alt="" className="img-fluid" src={image} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
