import { React } from "react";
import { styled } from "styled-components";

import { Flex, Text } from "../../common/Index";
import Comment from "../../specific/AnalystReport/Comment";

const dummy = {
  userName: "Jake",
  content:
    "별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다.",
  dateTime: "04/28/2024 20:27",
};

const AnalystReportBodyComment = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="24px"
      style={{ alignSelf: "stretch" }}
    >
      <Flex
        direction="row"
        justify="flex-start"
        align="center"
        style={{ width: "100%" }}
      >
        <Text fontSize="16px" lineHeight="22px">
          이 리포트에 대한 댓글&nbsp;
        </Text>
        <Text color="#8c8c8c" fontSize="16px" lineHeight="22px">
          24
        </Text>
      </Flex>
      <Comment {...dummy} />
    </Flex>
  );
};

export default AnalystReportBodyComment;
