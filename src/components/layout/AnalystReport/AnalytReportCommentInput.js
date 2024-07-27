import React from "react";
import styled from "styled-components";
import { Flex } from "../../common/Index";
import { ReactComponent as SendIcon } from "../../../assets/image/SendIcon.svg";

import CommentInputBar from "../../specific/AnalystReport/CommentInputBar";

const AnalystReportCommentInput = () => {
  return (
    <StyledFlex width="100%" align="center" gap="20px">
      <CommentInputBar width="315px" />
      <StyledSendIcon width="18px" height="18px" />
    </StyledFlex>
  );
};

const StyledFlex = styled(Flex)`
  width: 100%;
`;

const StyledSendIcon = styled(SendIcon)`
  cursor: pointer;
`;

export default AnalystReportCommentInput;
