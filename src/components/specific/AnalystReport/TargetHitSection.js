import React from "react";

import TimeIcon from "../../../assets/image/TimeIcon.svg";
import InformationCircle from "../../../assets/image/InformationCircle.svg";

import { Text, Image, Space, Flex } from "../../common/Index";

const TargetHitSection = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      style={{ alignSelf: "stretch" }}
    >
      <Flex align="center">
        <Image height="18px" width="18px" src={TimeIcon} alt="TimeIcon" />
        <Space width="12px" />
        <Text color="#8c8c8c" fontWeight="600" fontSize="14px">
          첫 상향 예측 적중 소요 기간
        </Text>
        <Space width="6px" />
        <Image
          height="12px"
          width="12px"
          src={InformationCircle}
          alt="InformationCircle"
        />
      </Flex>
      <Text>82일</Text>
    </Flex>
  );
};

export default TargetHitSection;
