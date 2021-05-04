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
import { MDBCol, MDBRow } from "mdbreact";

const Experiences = () => {
  return (
    <MDBRow className="experience-icons d-flex justify-content-center">
      <MDBCol size="12">
        <img alt="" src={vscode} />
        <img alt="" src={react} />
        <img alt="" src={github} />
        <img alt="" src={node} />
        <img alt="" src={c} />
        <img alt="" src={python} />
        <img alt="" src={html} />
        <img alt="" src={css} />
      </MDBCol>
    </MDBRow>
  );
};

export default Experiences;
