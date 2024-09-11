import React from "react";
import styled from "styled-components";
import { Flex } from "../../common/Index";
const PriceBar = ({
  backgroundColor,
  textColor,
  fillWidth,
  fillColor,
  children,
}) => {
  return (
    <Flex
      align="center"
      style={{
        width: "100%",
        height: "35px",
        borderRadius: "12px",
        background: backgroundColor || "rgba(49, 130, 246, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PriceBarFill width={fillWidth} fillColor={fillColor} />
      <Flex
        align="center"
        gap="10px"
        padding="8px 12px"
        style={{
          color: textColor || "#FFF",
          textAlign: "center",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "140%",
          width: { fillWidth },
          height: "100%",
          position: "relative",
          zIndex: "2",
          padding: "8px 12px",
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

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

export default PriceBar;
