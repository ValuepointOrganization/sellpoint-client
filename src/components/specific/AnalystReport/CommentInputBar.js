import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseIconSvg } from "../../../assets/image/close.svg";
import { Flex } from "../../common/Index";

const CommentInputBar = ({
  width = "100%",
  height = "50px",
  placeholder = "댓글을 입력하세요.",
  onClick,
}) => {
  return (
    <CommentInputContainer width={width} height={height} onClick={onClick}>
      <Flex align="center" gap="12px" style={{ height: "100%" }}>
        <CommentInput placeholder={placeholder} />
        <CloseIconSvg width="18" height="18" style={{ cursor: "pointer" }} />
      </Flex>
    </CommentInputContainer>
  );
};

export default CommentInputBar;

const CommentInputContainer = styled.div`
  padding: 12px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 24px;
  background: #f5f6f7;
  backdrop-filter: blur(50px);
`;

const CommentInput = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  font-size: 16px;
`;
