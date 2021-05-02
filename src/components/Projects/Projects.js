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
    features: [
      "1. Dashboard for users and admins with differnt functionalities",
      "2. Users can see their order history",
      "3. Admin can see all the order history",
      "4. Admin can appoint anyone as an admin",
      "5. Admin can control the order history",
    ],
  },
  {
    name: "Amar boi online",
    photo: amarboiss,
    features: [
      "1. Implemented private route, so that users can't order anything without login",
      "2. Users can see their order history from dashboard",
      "3. Users can search through the products",
    ],
  },
  {
    name: "Railgari online",
    photo: railgariss,
    features: [
      "1. Users can book a train ticket online",
      "2. Implemented private route, so that users can't order anything without login",
      "3. Integrated google maps for better route finding",
    ],
  },
];
const Projects = () => {
  return (
    <div
      id="projects"
      style={{ backgroundColor: "black", paddingTop: "100px" }}
    >
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
