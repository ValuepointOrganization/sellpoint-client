import { React } from "react";

import { Flex, Text } from "../../common/Index";

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
      <Text fontSize="12px" fontWeight="400" lineHeight="160%">
        {content}
      </Text>
      <Text color="#8c8c8c" fontSize="10px" fontWeight="400" lineHeight="160%">
        {dateTime}
      </Text>
    </Flex>
  );
};

export default Comment;
