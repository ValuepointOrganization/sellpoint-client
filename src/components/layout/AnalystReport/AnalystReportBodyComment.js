import { React } from "react";
import { styled } from "styled-components";

import { Flex, Text } from "../../common/Index";

const AnalystReportBodyComment = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="24px"
      style={{ alignSelf: "stretch" }}
    >
      <Text fontSize="16px" lineHeight="22px">
        이 리포트에 대한 댓글
      </Text>
      <Text color="#8c8c8c" fontSize="16px" lineHeight="22px">
        24
      </Text>
    </Flex>
  );
};

export default AnalystReportBodyComment;
