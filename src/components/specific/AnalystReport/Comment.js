import { React } from "react";
import { styled } from "styled-components";

import { Flex } from "../../common/Index";
import StyledSVG from "../../common/StyledSVG";

import { ReactComponent as PersonIcon } from "../../../assets/image/PersonIcon.svg";

const Comment = ({ userName, content, dateTime }) => {
  return (
    <Flex direction="column" justify="center" align="flex-start" gap="12px">
      <Flex align="center" gap="8px">
        <StyledSVG width="20" height="21" viewBox="0 0 20 21" as={PersonIcon} />
      </Flex>
    </Flex>
  );
};

export default Comment;
