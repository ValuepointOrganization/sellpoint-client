import React from "react";
import styled from "styled-components";
import PriceBar from "./PriceBar";

const TargetNowPriceSection = ({ targetPrice, nowPrice }) => {
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

export default TargetNowPriceSection;
