import React from "react";
import Flex from "../../common/Flex";
import Text from "../../common/Text";
import MoreButton from "./MoreButton";

const ListContainerHeader = ({
  title,
  buttonText,
  buttonWidth,
  buttonHeight,
  onButtonClick,
}) => {
  return (
    <Flex justify="space-between" align="center" style={{ alignSelf: "stretch" }}>
      <Text fontSize="16px" fontWeight={600} lineHeight="160%">
        {title}
      </Text>
      <MoreButton
        text={buttonText}
        width={buttonWidth}
        height={buttonHeight}
        onClick={onButtonClick}
      />
    </Flex>
  );
};

export default ListContainerHeader;
