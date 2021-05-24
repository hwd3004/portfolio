import React from "react";
import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import board_img from "assets/image/capture 2021-05-24 113839.png";

const Board = () => {
  return (
    <div className="Board">
      <div className="webpDiv" id="BoardDiv">
        <div className="explainDiv" id="explainBoard">
          <Stack spacing={2}>
            <Text>
              url -&nbsp;
              <ChakraLink
                href="https://practice-board-1.firebaseapp.com/"
                isExternal
              >
                practice-board-1.firebaseapp.com/
              </ChakraLink>
            </Text>
            <Text>
              Github - &nbsp;
              <ChakraLink
                href="https://github.com/hwd3004/practice_board_02"
                isExternal
              >
                github.com/hwd3004/practice_board_02
              </ChakraLink>
            </Text>
            <br></br>
            <Text>파이어베이스와 리액트를 이용하여 만든 게시판입니다.</Text>
            <Text>글 쓰기와 페이지네이션을 구현하였습니다.</Text>
          </Stack>
        </div>
        <ChakraLink
          className="imgLink"
          href="https://practice-board-1.firebaseapp.com/"
          isExternal
        >
          <img src={board_img} alt="intro Board" />
        </ChakraLink>
      </div>
    </div>
  );
};

export default Board;
