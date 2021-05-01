import { MDBBtn, MDBCol, MDBContainer, MDBLink, MDBRow } from "mdbreact";
import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <MDBContainer id="home" className="mt-1">
      <MDBRow style={{ height: "95vh" }} className="d-flex align-items-center">
        <MDBCol md="8" className="align-items-center">
          <div className="mb-5 d-block" style={{ minHeight: "200px" }}>
            <Typewriter
              className="m-5"
              style={{ minHeight: "200px" }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("<h1>Hello there,<br/></h1>")
                  .pauseFor(1000)
                  .typeString(
                    `<h1>I'm<strong> <span style="color: #9d57ff">Robin</span></strong></h1>`
                  )
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("My skills are,<br/>")
                  .pauseFor(1000)
                  .typeString(" Javascript")
                  .pauseFor(1000)
                  .deleteChars(10)
                  .typeString("ExpressJS")
                  .deleteAll()
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
          <MDBBtn className="download-btn" size="sm">
            <MDBLink
              to="https://drive.google.com/uc?export=download&id=1J82eg5kzqzshceaPRvlm-7EkFA3l9mc9"
              download
              className="link"
              rel="noreferrer"
              target="_blank"
            >
              Download
            </MDBLink>
          </MDBBtn>
        </MDBCol>
        <MDBCol size="4">
          <h4>Hello wrold</h4>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
