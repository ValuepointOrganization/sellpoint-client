import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${(props) => props.width || "18px"}
  height: ${(props) => props.height || "18px"};
  display: block;
`;

const Image = ({ src, alt, ...props }) => {
  return <StyledImage src={src} alt={alt} {...props} />;
};

export default Image;
