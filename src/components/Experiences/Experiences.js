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

const Experiences = () => {
  return (
    <MDBRow className="experience-icons d-flex justify-content-center">
      <MDBCol size="12">
        <MDBTooltip placement="left">
          <img alt="" src={vscode} />
          <span>VSCODE</span>
        </MDBTooltip>
        <MDBTooltip placement="top">
          <img alt="" src={react} />
          <span>React</span>
        </MDBTooltip>
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
