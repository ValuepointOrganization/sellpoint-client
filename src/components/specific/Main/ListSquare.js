import React from "react";
import styled from "styled-components";

const ListSquare = ({ type, children, ...props }) => {
  return (
    <StyledListSquare type={type} {...props}>
      {children}
    </StyledListSquare>
  );
};

export default ListSquare;

const StyledListSquare = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #f5f6f7;

  ${({ type }) => {
    switch (type) {
      case "analyst":
        return `
          min-width: 74px;
          max-width: 100px;
          height: auto; // 높이를 자동으로 조절
          min-height: 100px; // 최소 높이 설정
          overflow: visible; // overflow 제거
        `;
      case "user":
        return `
          min-width: 93px;
          height: auto; // 높이를 자동으로 조절
        `;
      case "stock":
        return `
          width: 100%;
          padding: 12px;
          flex-direction: row;
          justify-content: space-between;
          &:not(:last-child) {
            margin-bottom: 12px;
          }
        `;
      case "report":
        return `
          height: auto; // 높이를 자동으로 조절
        `;
      default:
        return "";
    }
  }}
`;

export const TruncatedText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px; // 기본 폰트 크기 설정
  line-height: 1.2; // 줄 간격 설정
  word-wrap: break-word; // 긴 단어의 경우 줄바꿈
  
  @media (max-width: 768px) {
    font-size: 12px; // 작은 화면에서 폰트 크기 줄임
  }
`;
