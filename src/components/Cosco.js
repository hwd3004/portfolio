import React from "react";
import cosco from "assets/image/capture-201207-1257.png";
import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";

const Cosco = () => {
  return (
    <div className="Cosco">
      <div className="webpDiv" id="coscoDiv">
        <div className="explainDiv" id="explainCosco">
          <Stack spacing={2}>
            <Text>
              url -&nbsp;
              <ChakraLink href="https://cos-co.firebaseapp.com/" isExternal>
                cos-co.firebaseapp.com
              </ChakraLink>
            </Text>
            <Text>
              Github - &nbsp;
              <ChakraLink
                href="https://github.com/hwd3004/cojubu_2nd"
                isExternal
              >
                github.com/hwd3004/cojubu_2nd
              </ChakraLink>
            </Text>
            <br></br>
            <Text>
              React, Redux, Redux-Saga, Firebase, CKEditor5를 사용한<br></br>
              게시판 형식의 커뮤니티 사이트입니다.
            </Text>
            <Text>
              회원가입, 로그인, 글쓰기/수정/삭제, 조회수,<br></br>
              게시판, 페이지네이션, 추천/비추천(중복 불가), <br></br>댓글 쓰기
              기능을 구현하였습니다.
            </Text>
          </Stack>
        </div>
        <ChakraLink
          className="imgLink"
          href="https://cos-co.firebaseapp.com/"
          isExternal
        >
          <img src={cosco} alt="intro cosco" />
        </ChakraLink>
      </div>
    </div>
  );
};

export default Cosco;
