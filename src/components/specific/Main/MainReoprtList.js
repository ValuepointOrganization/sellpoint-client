import React from "react";
import styled from "styled-components";
import ListContainerHeader from "./ListContainerHeader";
import Space from "../../common/Space";

import { DummyReport } from "../../../assets/dummy";

const MainReportList = () => {
  return (
    <ReportContainer>
      <ListContainerHeader
        title="인기 리포트"
        buttonText="리포트 더보기"
        buttonWidth={94}
        buttonHeight={22}
      />
      <Space height="20px" />
    </ReportContainer>
  );
};

export default MainReportList;

const ReportContainer = styled.div`
  width: 100%;
`;
