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
          height: 100px;
          overflow: hidden;
        `;
      case "user":
        return `
          min-width: 93px;
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
        `;
      default:
        return "";
    }
  }}
`;

export const TruncatedText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`;
