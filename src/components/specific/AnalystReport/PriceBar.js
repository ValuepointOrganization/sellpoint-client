import React from "react";
import styled from "styled-components";

const PriceBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  border-radius: 12px;
  background: ${(props) => props.backgroundColor || "rgba(49, 130, 246, 0.1)"};
  position: relative;
  overflow: hidden;
`;

const PriceBarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  color: ${(props) => props.textColor || "#FFF"};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
`;

const PriceBarFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.fillColor || "rgba(49, 130, 246, 1)"};
  border-radius: 12px;
  z-index: 1;
`;

const PriceBar = ({ backgroundColor, textColor, fillWidth, fillColor, children }) => {
  return (
    <PriceBarContainer backgroundColor={backgroundColor}>
      <PriceBarFill width={fillWidth} fillColor={fillColor} />
      <PriceBarContent textColor={textColor}>
        {children}
      </PriceBarContent>
    </PriceBarContainer>
  );
};

export default PriceBar;