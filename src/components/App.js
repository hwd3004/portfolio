import React from "react";
import Footer from "./Footer";
import "scss/App.scss";
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/WebProject">
          <WebProject />
        </Route>
        <Footer />
      </Container>
    </div>
  );
};
export default App;
