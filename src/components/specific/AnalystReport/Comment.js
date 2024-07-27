import { React } from "react";
import { styled } from "styled-components";

import { Flex } from "../../common/Index";
import { ReactComponent as PersonIcon } from "../../../assets/image/PersonIcon.svg";

const Comment = ({ userName, content, dateTime }) => {
  return (
    <Flex direction="column" justify="center" align="flex-start" gap="12px">
      <Flex align="center" gap="8px">
        <PersonIcon width="20" height="21" fill="#DEDEDF" />
      </Flex>
    </Flex>
  );
};

export default Comment;
