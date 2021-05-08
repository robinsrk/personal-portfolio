import React from "react";
import vscode from "../../images/vscode.svg";
import react from "../../images/react.svg";
import github from "../../images/github.svg";
import node from "../../images/node.svg";
import python from "../../images/python.svg";
import c from "../../images/c.svg";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import "./Experiences.css";
import { MDBCol, MDBRow, MDBTooltip } from "mdbreact";
import Skills from "../Skills/Skills";

const Experiences = () => {
  const skillList = [
    { name: "VSCODE", photo: vscode },
    { name: "React", photo: react },
    { name: "NODE", photo: node },
    { name: "Python", photo: python },
    { name: "C++", photo: c },
    { name: "HTML", photo: html },
    { name: "CSS", photo: css },
  ];
  return (
    <MDBRow className="d-flex justify-content-center">
      {skillList.map((skill) => (
        <Skills skill={skill}></Skills>
      ))}
    </MDBRow>
  );
};

export default Experiences;
