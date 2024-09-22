import React from "react";
import styled from "styled-components";
import PriceBar from "./PriceBar";

const TargetNowPriceSection = ({ targetPrice, nowPrice }) => {
  const targetPricePercentage = (targetPrice / nowPrice) * 100;
  const differencePercentage = (
    ((targetPrice - nowPrice) / targetPrice) *
    100
  ).toFixed(2);
  const differencePrice = (targetPrice - nowPrice).toFixed(2);

  const isTargetHigher = targetPrice > nowPrice;
  const widthPercentage = isTargetHigher
    ? (nowPrice / targetPrice) * 100
    : (targetPrice / nowPrice) * 100;

  console.log(widthPercentage);
  const compareTextColor = isTargetHigher ? "#FF3B30" : "#3182F6";

  return (
    <TargetPriceWrapper>
      <CompareText color={compareTextColor}>
        {Math.abs(differencePercentage)}% {isTargetHigher ? "저평가" : "고평가"}
        (₩{Math.abs(differencePrice)})
      </CompareText>
      <PriceBar
        backgroundColor="rgba(49, 130, 246, 0.1)"
        fillColor={compareTextColor}
        textColor="#FFF"
        fillWidth={`${isTargetHigher ? 100 : widthPercentage}%`}
      >
        목표가 (₩{targetPrice.toFixed(0)})
      </PriceBar>
      <PriceBar
        backgroundColor="white"
        fillColor="#E9E9E9"
        textColor="#8C8C8C"
        fillWidth={`${isTargetHigher ? widthPercentage : 100}%`}
      >
        현재가 (₩{nowPrice.toFixed(0)})
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
