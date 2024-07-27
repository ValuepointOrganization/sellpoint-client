import React from "react";
import { styled } from "styled-components";

import BarChart from "../../../assets/image/BarChart.svg";
import InformationCircle from "../../../assets/image/InformationCircle.svg";

import CategoryName from "./CategoryName";
import { Text, Image, Space } from "../../common/Index";

const TargetPriceChange = () => {
  return (
    <TargetPriceChangeWrapper>
      <CategoryLogoNameWrapper>
        <Image height="18px" width="18px" src={BarChart} alt={`${BarChart}`} />
        <Text color="#8c8c8c" fontWeight="600" marginLeft="12px">
          목표가 상향
        </Text>
        <Image
          height="12px"
          width="12px"
          src={InformationCircle}
          alt={`${InformationCircle}`}
        />
      </CategoryLogoNameWrapper>
      <PriceChangewrapper>
        <Text color="#262626" fontWeight="600">
          120,000원
        </Text>
        <Text color="#36C78E" fontWeight="600">
          +20,000원 (+20%)
        </Text>
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
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
`;

// 이 섹션의 이름 및 로고 Wrapper
const CategoryLogoNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// 가격 변화 부분 Wrapper
const PriceChangewrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
