import React from "react";
import styled from "styled-components";

const TargetPriceSection = ({ targetPrice, nowPrice }) => {
  const maxPrice = Math.max(targetPrice, nowPrice);
  const targetPricePercentage = (targetPrice / maxPrice) * 100;
  const nowPricePercentage = (nowPrice / maxPrice) * 100;
  
  let targetBarColor = "#FF304A";
  if (targetPrice <= nowPrice) targetBarColor = "#3182F6";

  return (
    <TargetPriceWrapper>
      <PriceBar 
        backgroundColor={targetBarColor} 
        textColor="#FFF"
        width={`${targetPricePercentage}%`}
      >
        목표가 (${targetPrice})
      </PriceBar>
      <PriceBar 
        backgroundColor="#E9E9E9" 
        textColor="#8C8C8C"
        width={`${nowPricePercentage}%`}
      >
        현재가 (${nowPrice})
      </PriceBar>
    </TargetPriceWrapper>
  );
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
  border-radius: 12px;
  background: ${(props) => props.backgroundColor || "#FF304A"};
  padding: 8px 12px;
  color: ${(props) => props.textColor || "#FFF"};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  width: ${(props) => props.width || "100%"};
`;

export default TargetPriceSection;
