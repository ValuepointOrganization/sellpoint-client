import { React } from "react";
import { styled } from "styled-components";

import { Flex, Text } from "../../common/Index";
import StyledSVG from "../../common/StyledSVG";

import { ReactComponent as PersonIcon } from "../../../assets/image/PersonIcon.svg";

const Comment = ({ prpops }) => {
  return (
    <Flex direction="column" justify="center" align="flex-start" gap="12px">
      <Flex align="center" gap="8px">
        <StyledSVG width="20" height="21" viewBox="0 0 20 21" fill="#DEDEDF">
          <PersonIcon />
        </StyledSVG>
        <Text fontSize="13px" lineHeight="160%">
          {prpops.userName}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
