import React from "react";
import BarChart from "../../../assets/image/BarChart.svg";
import InformationCircle from "../../../assets/image/InformationCircle.svg";
import RightArrow from "../../../assets/image/RightArrow.svg";

import { Text, Image, Flex } from "../../common/index";

const TargetPriceChange = () => {
  return (
    <Flex justify="space-between" align="center" style={{ alignSelf: 'stretch' }}>
      <Flex align="center">
        <Image height="18px" width="18px" src={BarChart} alt="BarChart" />
        <Flex width="12px" />
        <Text color="#8c8c8c" fontWeight="600" fontSize="14px">
          목표가 상향
        </Text>
        <Flex width="6px" />
        <Image
          height="12px"
          width="12px"
          src={InformationCircle}
          alt="InformationCircle"
        />
      </Flex>
      <Flex align="center" gap="12px">
        <Text>$840.35</Text>
        <Image width="50px" src={RightArrow} alt="RightArrow" />
        <Text>$900</Text>
      </Flex>
    </Flex>
  );
};

export default TargetPriceChange;
