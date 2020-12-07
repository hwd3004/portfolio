import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      {/* why not wokring */}
      {/* <ColorModeScript initialColorMode="Dark" /> */}
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
