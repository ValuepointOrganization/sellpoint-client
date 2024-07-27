import React from "react";

import { Flex } from "../../common/Index";
import { ReactComponent as SendIcon } from "../../../assets/image/SendIcon.svg";

import CommentInputBar from "../../specific/AnalystReport/CommentInputBar";
const AnalystReportCommentInput = () => {
  return (
    <Flex
      width="100%"
      align="center"
      gap="20px"
      style={{
        position: "fixed",
        bottom: "0px",
        padding: "12px 20px",
        background: "rgba(255, 255, 255, 0.70)",
        boxShadow: "0px -10px 40px 0px rgba(0,0,0,0.10)",
        backdropFilter: "blur(16px)",
      }}
    >
      <CommentInputBar width="315px" />
      <SendIcon width="18px" height="18px" />
    </Flex>
  );
};

export default AnalystReportCommentInput;
