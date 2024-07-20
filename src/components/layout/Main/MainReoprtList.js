import React from "react";
import styled from "styled-components";
import ListContainerHeader from "../../specific/Main/ListContainerHeader";
import Space from "../../common/Space";

import NvidiaLogo from "../../../assets/image/NvidiaBig.svg";
import { DummyReport } from "../../../assets/dummy";

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
      <ReportArea>
        <ReportImage
          src={NvidiaLogo}
          alt={`${DummyReport[0].companyName} Logo`}
        />
        <ReportProfile>
          <span
            style={{
              color: "#83838A",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            {DummyReport[0].analystName}
            {" | "}
            {DummyReport[0].firmName}
          </span>
          <span
            style={{
              color: "#2C2C2C",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            {DummyReport[0].reportTitle}
          </span>
          <span
            style={{
              color: "#BABABF",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            {DummyReport[0].companyName}
          </span>
        </ReportProfile>
        <ReportOpinion>{DummyReport[0].opinion}</ReportOpinion>
      </ReportArea>
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
  aligh-itmes: center;
`;

const ReportImage = styled.img``;

const ReportProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
