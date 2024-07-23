import React from "react";
import styled from "styled-components";

const TargetPriceSection = () => {
  return <TargetPriceWrapper></TargetPriceWrapper>;
};

const TargetPriceWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const PriceBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  background: #ff304a;
  padding: 8px 12px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
`;

export default TargetPriceSection;
