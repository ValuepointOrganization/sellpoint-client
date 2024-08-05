import React from "react";
import styled from "styled-components";

import NvidiaLogo from "../../../assets/image/NvidiaSmaller.svg";
import Space from "../../common/Space";
import ReportOpinion from "../ReportOpinion";

const ReportBox = ({ report }) => {
  return (
    <ReportOutside>
      <ReportOpinion isBuy={report.opinion === "Buy"}>
        {report.opinion}
      </ReportOpinion>
      <ReportContent>
        <NameSection>
          <Logo src={NvidiaLogo} alt={`NvidiaLogo`} />
          <CompanyText>Nvidia</CompanyText>
        </NameSection>
        <Space height="6px" />
        <TitleText>{report.reportTitle}</TitleText>
        <Space height="16px" />
        <ContentText>
          {report.analystName} | {report.firmName}
        </ContentText>
        <Space height="6px" />
        <ContentText>
          6개월 후 가격: {report.halfYear} ・ 1년 후 가격: {report.oneYear}
        </ContentText>
        <Space height="6px" />
        <ContentText>발행 날짜: {report.writtenDate}</ContentText>
      </ReportContent>
    </ReportOutside>
  );
};

export default ReportBox;

const ReportOutside = styled.div`
  display: flex;
  padding: 20px 12px 20px 12px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-bottom: solid 1px #f5f6f7;
`;

const ReportContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
`;

const NameSection = styled.div`
  display: flex;
`;

const Logo = styled.img`
  margin-right: 6px;
`;

const CompanyText = styled.p`
  color: #99a0a3;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TitleText = styled.span`
  color: #2c2c2c;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
`;

const ContentText = styled.span`
  color: #83838a;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
