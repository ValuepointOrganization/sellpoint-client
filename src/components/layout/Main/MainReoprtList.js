import React from "react";
import styled from "styled-components";
import ListContainerHeader from "../../specific/Main/ListContainerHeader";
import Space from "../../common/Space";

import NvidiaLogo from "../../../assets/image/NvidiaBig.svg";
import { DummyReport } from "../../../assets/dummy";

const ReportItem = ({ report }) => {
  return (
    <ReportArea>
      <ReportImage src={NvidiaLogo} alt={`${report.companyName} Logo`} />
      <ReportProfile>
        <AnalystInfo>
          {report.analystName} | {report.firmName}
        </AnalystInfo>
        <ReportTitle>{report.reportTitle}</ReportTitle>
        <CompanyName>{report.companyName}</CompanyName>
      </ReportProfile>
      <ReportOpinion>{report.opinion}</ReportOpinion>
    </ReportArea>
  );
};

const MainReportList = () => {
  return (
    <ReportListContainer>
      <ListContainerHeader
        title="인기 리포트"
        buttonText="리포트 더보기"
        buttonWidth={94}
        buttonHeight={22}
      />
      <Space height="20px" />
      <ReportItem report={DummyReport[0]} />
    </ReportListContainer>
  );
};

export default MainReportList;

const ReportListContainer = styled.div`
  width: 100%;
`;

const ReportArea = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
`;

const ReportImage = styled.img`
  margin-right: 20px;
`;

const ReportProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-right: 16px;
  flex-grow: 1;
`;

const AnalystInfo = styled.span`
  color: #83838a;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ReportTitle = styled.span`
  color: #2c2c2c;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CompanyName = styled.span`
  color: #bababf;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ReportOpinion = styled.div`
  display: flex;
  width: 40px;
  height: 22px;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
