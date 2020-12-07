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
        <Text fontSize="3xl">
          안녕하세요. 풀스택 개발자가 되고 싶은 신입 개발자 황원동입니다.
        </Text>

        <Text fontSize="2xl">
          <span>Career</span>
          <ul>
            <li>
              분당 이젠컴퓨터학원 모바일 웹디자인 &amp; 프론트엔드 (2020-06-30 ~
              2020-12-16)
            </li>
            <li>대구 영진전문대학 웹프로그래밍과 중퇴 (2009-03 ~ 2013-01) </li>
          </ul>
        </Text>

        <Text fontSize="2xl">
          Github -&nbsp;
          <ChakraLink href="https://github.com/hwd3004" isExternal>
            https://github.com/hwd3004
          </ChakraLink>
        </Text>

        <Text fontSize="2xl">
          Blog -&nbsp;
          <ChakraLink href="https://liufeier.tistory.com/" isExternal>
            https://liufeier.tistory.com/
          </ChakraLink>
        </Text>

        <Text fontSize="2xl">
          <span>Stack</span>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Redux</li>
            <li>Redux Saga</li>
            <li>Firebase</li>
          </ul>
        </Text>
      </Stack>
    </div>
  );
};

export default Home;
