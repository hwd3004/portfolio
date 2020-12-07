import { Stack, Text, Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import pollexzone from "assets/image/capture-201207-1352.png";

const Pollexzone = () => {
  return (
    <div className="Pollexzone">
      <div className="webpDiv" id="pollexzoneDiv">
        <div className="explainDiv" id="explainPollexzone">
          <Stack spacing={2}>
            <Text>
              url -&nbsp;
              <ChakraLink
                href="https://hwd3004.github.io/pollexzone/"
                isExternal
              >
                hwd3004.github.io/pollexzone
              </ChakraLink>
            </Text>
            <Text>
              Github - &nbsp;
              <ChakraLink
                href="https://github.com/hwd3004/pollexzone"
                isExternal
              >
                github.com/hwd3004/pollexzone
              </ChakraLink>
            </Text>
            <br></br>
            <Text>
              HTML5, CSS3, Javascript, jQuery를 사용하여<br></br>
              메인 페이지만 완성한 반응형 웹사이트 클론 코딩입니다.
            </Text>
          </Stack>
        </div>
        <ChakraLink
          className="imgLink"
          href="https://hwd3004.github.io/pollexzone/"
          isExternal
        >
          <img src={pollexzone} alt="intro pollexzone" />
        </ChakraLink>
      </div>
    </div>
  );
};

export default Pollexzone;
