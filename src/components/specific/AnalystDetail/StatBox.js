import React from "react";
import styled from "styled-components";

const StatSquare = ({ category, detail }) => {
  return (
    <StatBox>
      <CategoryText>{category}</CategoryText>
      <DetailText>{detail === null ? "-" : detail}</DetailText>
    </StatBox>
  );
};

export default StatSquare;

const StatBox = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  border-radius: 8px;
  background: #f5f6f7;
`;

const CategoryText = styled.span`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const DetailText = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
