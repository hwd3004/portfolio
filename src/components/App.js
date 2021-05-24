import React from "react";
import Footer from "./Footer";
import "css/App.css";
import Home from "routes/Home";
import { Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Header from "./Header";
import WebProject from "routes/WebProject";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container minWidth="960px">
        <Route exact path="/portfolio">
          <Home />
        </Route>
        <Route exact path="/portfolio/web_project">
          <WebProject />
        </Route>
        <Footer />
      </Container>
    </div>
  );
};
export default App;
