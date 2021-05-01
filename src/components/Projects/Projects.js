import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import Project from "../Project/Project";
import repairss from "../../images/repair.png";
import railgariss from "../../images/railgari.png";
import amarboiss from "../../images/amar-boi.png";

const projectList = [
  {
    name: "Robin repair service",
    photo: repairss,
    features: ["1. "],
  },
  {
    name: "Amar boi online",
    photo: amarboiss,
    features: ["1. "],
  },
  {
    name: "Railgari online",
    photo: railgariss,
    features: ["1. "],
  },
];
const Projects = () => {
  return (
    <div id="projects">
      <MDBContainer>
        <h1
          style={{
            color: "#fa6454",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          My Projects
        </h1>
        <MDBRow
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "95vh" }}
        >
          {projectList.map((pt) => (
            <MDBCol sm="8" md="6" lg="4">
              <Project projectDetails={pt} />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default Projects;
