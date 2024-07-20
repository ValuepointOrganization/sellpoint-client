import React from "react";
import styled from "styled-components";
import MoreButton from "./MoreButton";

const ListHeader = ({ title, buttonText, buttonWidth, buttonHeight }) => {
  return (
    <ListHeaderContainer>
      <p style={{ fontSize: "16px", fontWeight: 600, lineHeight: "160%" }}>
        {title}
      </p>
      <MoreButton text={buttonText} width={buttonWidth} height={buttonHeight} />
    </ListHeaderContainer>
  );
};

export default ListHeader;

const ListHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
