import React from "react";
import Board from "components/Board";
import "css/WebProject.css";
import Pollexzone from "components/Pollexzone";

const WebProject = () => {
  return (
    <div className="WebProject">
      <Board />
      <br />
      <br />
      <Pollexzone />
    </div>
  );
};

export default WebProject;
