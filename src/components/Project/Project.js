import React from "react";
import { Bounce } from "react-reveal";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import "./Project.css";

const Project = ({ projectDetails }) => {
  console.log("projectDetails = ", projectDetails);
  return (
    <Bounce>
      <MDBCol>
        <MDBCard className="cards" style={{ width: "22rem" }}>
          <MDBCardImage
            className="img-fluid"
            style={{ borderRadius: "10px" }}
            src={projectDetails.photo}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>{projectDetails.name}</MDBCardTitle>
            <MDBCardText>
              <ul>
                {projectDetails.features.map((ft) => (
                  <li>{ft}</li>
                ))}
              </ul>
            </MDBCardText>
            <MDBBtn href="#" className="button">
              Website
            </MDBBtn>
            <MDBBtn href="#" className="button">
              Source Code
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Bounce>
  );
};

export default Project;
