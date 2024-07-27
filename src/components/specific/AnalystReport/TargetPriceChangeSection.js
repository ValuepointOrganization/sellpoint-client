import React from "react";
import { styled } from "styled-components";

import BarChart from "../../../assets/image/BarChart.svg";
import InformationCircle from "../../../assets/image/InformationCircle.svg";

import CategoryName from "./CategoryName";
import { Text, Image } from "../../common/index";

const TargetPriceChange = () => {
  return (
    <TargetPriceChangeWrapper>
      <CategoryLogoNameWrapper>
        <Image height="18px" width="18px" src={BarChart} alt={`${BarChart}`} />
        <Text color="#8c8c8c" fontWeight="600" marginLeft="12px" fontSize="14px">
          목표가 상향
        </Text>
        <Image
          height="12px"
          width="12px"
          src={InformationCircle}
          alt={`${InformationCircle}`}
        />
      </CategoryLogoNameWrapper>
      <PriceChangewrapper></PriceChangewrapper>
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
