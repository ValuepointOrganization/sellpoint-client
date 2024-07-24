import React from "react";
import { styled } from "styled-components";
import NvidiaLogo from "../../../assets/image/NvidiaSmaller.svg";

const ReportProfile = () => {
  return (
    <ReportProfileWrapper>
      <NameSection>
        <Logo src={NvidiaLogo} alt={`NvidiaLogo`} />
        <CompanyText>Nvidia</CompanyText>
      </NameSection>
      <TitleText>혁신의 선두주자, AI와 게이밍 시장을 장악하다</TitleText>
      <OtherText>한유진 | 한국증권</OtherText>
    </ReportProfileWrapper>
  );
};

export default ReportProfile;

const ReportProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const NameSection = styled.div`
  display: flex;
`;

const Logo = styled.img`
  margin-right: 8px;
`;

const CompanyText = styled.p`
  color: #99a0a3;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TitleText = styled.span`
  color: #2c2c2c;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
`;

const OtherText = styled.span`
  color: #83838a;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
