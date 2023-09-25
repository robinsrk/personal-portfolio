import React from "react";
import vscode from "../../images/vscode.svg";
import react from "../../images/react.svg";
import github from "../../images/github.svg";
import node from "../../images/node.svg";
import python from "../../images/python.svg";
import c from "../../images/c.svg";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import { MDBRow } from "mdbreact";
import Skills from "../Skills/Skills";
import { Bounce } from "react-reveal";

const Experiences = () => {
  const skillList = [
    { name: "VSCODE", photo: vscode },
    { name: "React", photo: react },
    { name: "NODE", photo: node },
    { name: "Github", photo: github },
    { name: "Python", photo: python },
    { name: "C++", photo: c },
    { name: "HTML", photo: html },
    { name: "CSS", photo: css },
  ];
  return (
    <div style={{ minHeight: "50vh" }}>
      <div>
        <Bounce>
          <h3
            style={{
              color: "#fa6454",
              fontWeight: "bold",
              marginTop: "100px",
              paddingBottom: "50px",
            }}
          >
            Skills
          </h3>
        </Bounce>
      </div>
      <MDBRow className="d-flex justify-content-center">
        {skillList.map((skill) => (
          <Skills skill={skill}></Skills>
        ))}
      </MDBRow>
    </div>
  );
};

export default Experiences;
