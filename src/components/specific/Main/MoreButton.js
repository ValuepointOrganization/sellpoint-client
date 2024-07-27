import React from "react";
import styled from "styled-components";
import forwardIcon from "../../../assets/image/ChevronForward.svg";

const MoreButton = ({ text, width, height, fontSize, onClick }) => {
  return (
    <StyledButton width={width} height={height} onClick={onClick}>
      <ButtonText fontSize={fontSize}>{text}</ButtonText>
      <IconWrapper src={forwardIcon} alt="Forward" />
    </StyledButton>
  );
};

export default MoreButton;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;

const ButtonText = styled.span`
  color: #bababf;
  font-size: ${(props) => props.fontSize || "14px"};
  margin-right: 4px;
`;

const IconWrapper = styled.img`
  width: 16px;
  height: 16px;
`;
