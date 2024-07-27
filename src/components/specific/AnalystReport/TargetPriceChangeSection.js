import React from "react";
import { styled } from "styled-components";

import BarChart from "../../../assets/image/BarChart.svg";
import InformationCircle from "../../../assets/image/InformationCircle.svg";
import RightArrow from "../../../assets/image/RightArrow.svg";

import { Text, Image, Space } from "../../common/Index";

const TargetPriceChange = () => {
  return (
    <TargetPriceChangeWrapper>
      <CategoryLogoNameWrapper>
        <Image height="18px" width="18px" src={BarChart} alt={`${BarChart}`} />
        <Space width="12px" />
        <Text color="#8c8c8c" fontWeight="600" fontSize="14px">
          목표가 상향
        </Text>
        <Space width="6px" />
        <Image
          height="12px"
          width="12px"
          src={InformationCircle}
          alt={`${InformationCircle}`}
        />
      </CategoryLogoNameWrapper>
      <PriceChangewrapper>
        <Text>$840.35</Text>
        <Image width="50px" src={RightArrow} alt={`${RightArrow}`} />
        <Text>$900</Text>
      </PriceChangewrapper>
    </TargetPriceChangeWrapper>
  );
};

export default TargetPriceChange;

//이 컴포넌트를 감싸는 Wrapper
const TargetPriceChangeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

// 이 섹션의 이름 및 로고 Wrapper
const CategoryLogoNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// 가격 변화 부분 Wrapper
const PriceChangewrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
