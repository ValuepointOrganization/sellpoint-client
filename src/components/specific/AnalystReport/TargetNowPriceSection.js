import React from "react";
import styled from "styled-components";
import PriceBar from "./PriceBar";

const TargetNowPriceSection = ({ targetPrice, nowPrice }) => {
  const maxPrice = Math.max(targetPrice, nowPrice);
  const minPrice = Math.min(targetPrice, nowPrice);
  const targetPricePercentage = (targetPrice / maxPrice) * 100;
  const nowPricePercentage = (nowPrice / maxPrice) * 100;
  const differencePercentage = (
    targetPricePercentage - nowPricePercentage
  ).toFixed(2);
  const differencePrice = (maxPrice - minPrice).toFixed(2);

  let targetBarColor = "#FF304A";
  if (targetPrice <= nowPrice) targetBarColor = "#3182F6";

  return (
    <TargetPriceWrapper>
      <CompareText>
        {differencePercentage}% 저평가(-${differencePrice})
      </CompareText>
      <PriceBar
        backgroundColor={targetBarColor}
        textColor="#FFF"
        width={`${targetPricePercentage}%`}
      >
        목표가 (${targetPrice.toFixed(2)})
      </PriceBar>
      <PriceBar
        backgroundColor="#E9E9E9"
        textColor="#8C8C8C"
        width={`${nowPricePercentage}%`}
      >
        현재가 (${nowPrice.toFixed(2)})
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

const CompareText = styled.span`
  color: #ff3b30;
  text-align: end;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  width: 100%;
`;
export default TargetNowPriceSection;
