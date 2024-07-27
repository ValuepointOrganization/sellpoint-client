import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  fill: ${(props) => props.fill || "currentColor"};
`;

const StyledSVG = ({ width, height, viewBox, fill, children, ...props }) => {
  return (
    <SVG
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </SVG>
  );
};

export default StyledSVG;
