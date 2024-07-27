import React from "react";
import { styled } from "styled-components";

import TargetNowPriceSection from "../../specific/AnalystReport/TargetNowPriceSection";
import ShareBtn from "../../specific/ShareBtn";
import ReportOpinion from "../../specific/ReportOpinion";
import Divider from "../../specific/Divider";
import ReportProfile from "../../specific/AnalystReport/ReportProfile";
import TargetPriceChange from "../../specific/AnalystReport/TargetPriceChangeSection";
import TargetHitSection from "../../specific/AnalystReport/TargetHitSection";
import ReportSummarySection from "../../specific/AnalystReport/ReportSummarySection";

const AnalystReportBodyReportContent = () => {
  return (
    <ContentWrapper>
      <ContentHeader>
        <ReportOpinion>buy</ReportOpinion>
        <ShareBtn />
      </ContentHeader>
      <ReportProfile />
      <Divider />
      <TargetNowPriceSection targetPrice={200} nowPrice={389} />
      <Divider />
      <TargetPriceChange />
      <Divider />
      <TargetHitSection />
      <Divider />
      <ReportSummarySection />
    </ContentWrapper>
  );
};

export default AnalystReportBodyReportContent;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 30px;
`;
