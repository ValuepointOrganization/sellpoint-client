import React from "react";
import styled from "styled-components";
import ListContainerHeader from "../../specific/Main/ListContainerHeader";
import Space from "../../common/Space";
import ReportItem from "../../specific/Main/ReportItem";
import { DummyReport } from "../../../assets/dummy";

const BodyReportList = () => {
  return (
    <ReportListContainer>
      <ListContainerHeader
        title="인기 리포트"
        buttonText="리포트 더보기"
        buttonWidth={94}
        buttonHeight={22}
      />
      <Space height="20px" />
      {DummyReport.map((report, index) => {
        return <ReportItem report={report} key={index} />;
      })}
    </ReportListContainer>
  );
};

export default BodyReportList;

const ReportListContainer = styled.div`
  width: 100%;
`;
