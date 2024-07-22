import React from "react";
import styled from "styled-components";
import ShareIcon from "../../assets/image/ShareIcon.svg";

const ShareBtn = () => {
  return (
    <ShareBtnContainer>
      <img src={ShareIcon} alt="ShareIcon" />
      <ShareText>공유</ShareText>
    </ShareBtnContainer>
  );
};

export default ShareBtn;

const ShareBtnContainer = styled.div`
  display: flex;
  padding: 4px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: #f5f7f9;
  cursor: pointer;
`;

const ShareText = styled.span`
  color: #8c8c8c;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 22.4px */
`;
