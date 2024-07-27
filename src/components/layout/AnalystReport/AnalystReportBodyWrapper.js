import React from "react";
import { styled } from "styled-components";
import AnalystReportBodyReportContent from "./AnalystReportBodyReportContent";
import AnalystReportBodyAgree from "./AnalystReportBodyAgree";

const AnalystReportBodyWrapper = () => {
  return (
    <Wrapper>
      <AnalystReportBodyReportContent />
      <AnalystReportBodyAgree />
    </Wrapper>
  );
};

export default AnalystReportBodyWrapper;

const Wrapper = styled.div`
  display: flex;
  width: 393px;
  padding: 20px 20px 100px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
`;
