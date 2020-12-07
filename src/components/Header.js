import React from "react";
import "scss/Header.scss";
import banner from "assets/image/banner.jpg";
import { Button, Container, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="Header">
      <div id="bannerDiv">
        <img src={banner} alt="banner" />
      </div>

      <Container>
        <br />
        <Button as={Link} to="/">
          Home
        </Button>
        &nbsp;&nbsp;
        <Button as={Link} to="/WebProject">
          Web Project
        </Button>
        &nbsp;&nbsp;
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Container>
      <br />
    </div>
  );
};

export default Header;
