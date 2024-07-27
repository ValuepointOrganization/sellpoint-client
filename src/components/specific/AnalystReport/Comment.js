import { React } from "react";
import { styled } from "styled-components";

import { Flex, Text } from "../../common/Index";
import StyledSVG from "../../common/StyledSVG";

import { ReactComponent as PersonIcon } from "../../../assets/image/PersonIcon.svg";

const Comment = ({ userName, content, dateTime }) => {
  return (
    <Flex direction="column" justify="center" align="flex-start" gap="12px">
      <Flex align="center" gap="8px">
        <PersonIcon width="20" height="21" fill="#DEDEDF" />
        <Text fontSize="13px" lineHeight="160%">
          {userName}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
