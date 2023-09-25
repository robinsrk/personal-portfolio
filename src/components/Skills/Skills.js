import { MDBCol } from "mdbreact";
import React from "react";

const Skills = ({ skill }) => {
  return (
    <div>
      <p>
        <MDBCol lg="2" size="6" className="p-3">
          <img alt="" style={{ width: "100px" }} src={skill.photo} />
        </MDBCol>
      </p>
    </div>
  );
};

export default Skills;
