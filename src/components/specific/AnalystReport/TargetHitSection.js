import React from "react";
import { styled } from "styled-components";

import TimeIcon from "../../../assets/image/TimeIcon.svg";

import { Text, Image, Space, Flex } from "../../common/Index";

const TargetHitSection = () => {
  return (
    <TargetHitSectionWrapper>
      <SectionLogoNameWrapper></SectionLogoNameWrapper>
    </TargetHitSectionWrapper>
  );
};

export default TargetHitSection;

// 섹션을 감싸는 Wrapper
const TargetHitSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

// 이 섹션의 이름 및 로고 Wrapper
const SectionLogoNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;
