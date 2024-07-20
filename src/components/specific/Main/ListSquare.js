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
      case 'analyst':
        return `
          min-width: 74px;
        `;
      case 'user':
        return `
          min-width: 93px;
        `;
      case 'stock':
        return `
          width: 100%;
          padding: 12px;
          flex-direction: row;
          justify-content: space-between;
          &:not(:last-child) {
            margin-bottom: 12px;
          }
        `;
      default:
        return '';
    }
  }}
`;
