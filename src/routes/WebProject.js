import React from "react";
import Cosco from "components/Cosco";
import "scss/WebProject.scss";
import Pollexzone from "components/Pollexzone";

const WebProject = () => {
  return (
    <div className="WebProject">
      <Cosco />
      <br />
      <br />
      <Pollexzone />
    </div>
  );
};

export default WebProject;
