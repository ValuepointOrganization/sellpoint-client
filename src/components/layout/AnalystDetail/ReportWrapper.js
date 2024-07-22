import React from "react";
import { styled } from "styled-components";

import ReportSearchBar from "../../specific/AnalystDetail/ReportSearchBar";
import ReportBox from "../../specific/AnalystDetail/ReportBox";

import { DummyReport } from "../../../assets/dummy";
import Space from "../../common/Space";

const ReportWrapper = () => {
  return (
    <AreaContainer>
      <AreaText>작성한 리포트</AreaText>
      <Space height="20px" />
      <ReportSearchBar />
      <Space height="12px" />
      {DummyReport.map((report, index) => {
        return <ReportBox key={index} report={report} />;
      })}
    </AreaContainer>
  );
};

export default ReportWrapper;

const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;

const AreaText = styled.p`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;
