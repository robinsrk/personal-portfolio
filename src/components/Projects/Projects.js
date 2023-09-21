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
      "Dashboard for users and admins with differnt functionalities",
      "Users can see their order history",
      "Admin can see all the order history",
      "Admin can appoint anyone as an admin",
      "Admin can control the order history",
    ],
    github: "https://github.com/robinsrk/robin-repair-service-client",
    live: "https://robin-computer-service.web.app/",
  },
  {
    name: "Amar boi online",
    photo: amarboiss,
    features: [
      "Implemented private route, so that users can't order anything without login",
      "Users can see their order history from dashboard",
      "Users can search through the products",
    ],
    github: "https://github.com/robinsrk/amar-boi-online-client",
    live: "https://amar-boi-online.web.app/",
  },
  {
    name: "Railgari online",
    photo: railgariss,
    features: [
      "Users can book a train ticket online",
      "Implemented private route, so that users can't order anything without login",
      "Integrated google maps for better route finding",
    ],
    github: "https://github.com/robinsrk/railgari",
    live: "https://railgari-ticket.web.app/",
  },
];
const Projects = () => {
  return (
    <div id="projects" style={{ backgroundColor: "black" }}>
      <MDBContainer>
        <h1
          style={{
            color: "#fa6454",
            textAlign: "center",
            fontWeight: "bold",
            padding: "100px",
          }}
        >
          My Projects
        </h1>
        <MDBRow className="d-flex align-items-center justify-content-center">
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
