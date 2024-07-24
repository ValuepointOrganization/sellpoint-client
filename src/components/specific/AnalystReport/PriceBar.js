import React from "react";
import styled from "styled-components";

const PriceBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  border-radius: 12px;
  background: ${(props) => props.backgroundColor || "#FF304A"};
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
  width: ${(props) => props.width || "100%"};
  height: 100%;
  border-radius: 12px;
  background: ${(props) => props.backgroundColor || "#FF304A"};
  opacity: ${(props) => (props.isLower ? 0.1 : 1)};
`;

const PriceBar = ({ backgroundColor, textColor, width, children, isLower }) => {
  return (
    <PriceBarContainer backgroundColor={backgroundColor}>
      <PriceBarContent
        backgroundColor={backgroundColor}
        textColor={textColor}
        width={width}
        isLower={isLower}
      >
        {children}
      </PriceBarContent>
    </PriceBarContainer>
  );
};

export default PriceBar;
