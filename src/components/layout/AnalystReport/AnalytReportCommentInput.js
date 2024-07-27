import React from "react";
import styled from "styled-components";
import { Flex } from "../../common/Index";
import { ReactComponent as SendIcon } from "../../../assets/image/SendIcon.svg";

import CommentInputBar from "../../specific/AnalystReport/CommentInputBar";

const AnalystReportCommentInput = () => {
  return (
    <StyledFlex
      width="100%"
      align="center"
      gap="20px"
    >
      <CommentInputBar width="315px" />
      <StyledSendIcon width="18px" height="18px" />
    </StyledFlex>
  );
};

const StyledFlex = styled(Flex)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.70);
  box-shadow: 0px -10px 40px 0px rgba(0,0,0,0.10);
  backdrop-filter: blur(16px);
`;

const StyledSendIcon = styled(SendIcon)`
  cursor: pointer;
`;

export default AnalystReportCommentInput;
