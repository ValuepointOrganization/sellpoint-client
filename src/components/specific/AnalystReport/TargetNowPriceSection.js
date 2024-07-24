import React from "react";
import styled from "styled-components";
import PriceBar from "./PriceBar";

const TargetNowPriceSection = ({ targetPrice, nowPrice }) => {
  const maxPrice = Math.max(targetPrice, nowPrice);
  const minPrice = Math.min(targetPrice, nowPrice);
  const targetPricePercentage = (targetPrice / nowPrice) * 100;
  const differencePercentage = ((targetPrice - nowPrice) / nowPrice * 100).toFixed(2);
  const differencePrice = (targetPrice - nowPrice).toFixed(2);

  const isTargetHigher = targetPrice > nowPrice;
  const compareTextColor = isTargetHigher ? "#3182F6" : "#FF3B30";

  return (
    <TargetPriceWrapper>
      <CompareText color={compareTextColor}>
        {Math.abs(differencePercentage)}% {isTargetHigher ? "저평가" : "고평가"}(${Math.abs(differencePrice)})
      </CompareText>
      <PriceBar
        backgroundColor="rgba(49, 130, 246, 0.1)"
        fillColor="rgba(49, 130, 246, 1)"
        textColor="#FFF"
        fillWidth={`${isTargetHigher ? 100 : targetPricePercentage}%`}
      >
        목표가 (${targetPrice.toFixed(2)})
      </PriceBar>
      <PriceBar
        backgroundColor="#E9E9E9"
        fillColor="#E9E9E9"
        textColor="#8C8C8C"
        fillWidth="100%"
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
  color: ${(props) => props.color || "#FF3B30"};
  text-align: end;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  width: 100%;
`;
export default TargetNowPriceSection;
