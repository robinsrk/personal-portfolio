import React from "react";
import { LightSpeed } from "react-reveal";
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
    <LightSpeed>
      <MDBCol>
        <MDBCard className="cards" style={{ width: "22rem" }}>
          <MDBCardImage
            className="img-fluid"
            style={{ borderRadius: "10px" }}
            src={projectDetails.photo}
            waves
          />
          <MDBCardBody className="d-flex flex-column">
            <MDBCardTitle>{projectDetails.name}</MDBCardTitle>
            <MDBCardText className="mb-auto">
              <ul>
                {projectDetails.features.map((ft) => (
                  <li>{ft}</li>
                ))}
              </ul>
            </MDBCardText>
            <div>
              <MDBBtn href={projectDetails.live} className="download-btn">
                Website
              </MDBBtn>
              <MDBBtn href={projectDetails.github} className="download-btn">
                Source Code
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </LightSpeed>
  );
};

export default Project;
