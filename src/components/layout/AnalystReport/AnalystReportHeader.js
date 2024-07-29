import React from "react";
import { styled } from "styled-components";
import BackIcon from "../../../assets/image/ChevronBack.svg";
const ReportHeader = () => {
  return (
    <Wrapper>
      <IconButton>
        <img src={BackIcon} alt="backIcon" />
      </IconButton>
      <HeaderText>애널리스트 리포트</HeaderText>
    </Wrapper>
  );
};

export default ReportHeader;

const Wrapper = styled.div`
  display: flex;
  width: 393px;
  padding: 0px 24px;
  align-items: center;
  gap: 16px;
  height: 50px;
  position: fixed;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

const HeaderText = styled.span`
  color: #000;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 129.412% */
  letter-spacing: -0.408px;
`;
