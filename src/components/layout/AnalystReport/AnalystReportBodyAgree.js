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
      <AgreeDisAgreeButton image={ThumbsUpImg} text="동의해요" number={91} />
      <AgreeDisAgreeButton image={ThumbsDownImg} text="반대해요" number={4} />
    </Flex>
  );
};

export default AnalystReportBodyAgree;
