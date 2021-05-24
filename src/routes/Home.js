import React from "react";
import { Stack, Text, Link as ChakraLink } from "@chakra-ui/react";

import myphoto from "assets/image/PhotoView.jfif";

const Home = () => {
  return (
    <div className="Home">
      <br />
      <img src={myphoto} alt="myphoto" />
      <br />
      <Stack spacing={3}>
        <Text fontSize="5xl">황 원동 | Won Dong Hwang</Text>
        <Text fontSize="3xl">안녕하세요. 신입 웹 개발자 황원동입니다.</Text>

        <Text fontSize="2xl">
          Github -&nbsp;
          <ChakraLink href="https://github.com/hwd3004" isExternal>
            https://github.com/hwd3004
          </ChakraLink>
        </Text>

        <Text fontSize="2xl">
          <span>Stack</span>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Firebase</li>
          </ul>
        </Text>
      </Stack>
    </div>
  );
};

export default Home;
