import React from "react";

import { Flex } from "../../common/Index";

import ThumbsUpImg from "../../../assets/image/ThumbsUp.svg";
import ThumbsDownImg from "../../../assets/image/ThumbsDown.svg";

import AgreeDisAgreeButton from "../../specific/AnalystReport/AgreeDisAgreeButton";

const AnalystReportBodyAgree = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap="32px"
      style={{ alignSelf: "stretch", width: "100%" }}
    >
      <AgreeDisAgreeButton image={ThumbsUpImg} number={91}>
        동의해요
      </AgreeDisAgreeButton>
      <AgreeDisAgreeButton image={ThumbsDownImg} number={4}>
        반대해요
      </AgreeDisAgreeButton>
    </Flex>
  );
};

export default AnalystReportBodyAgree;
