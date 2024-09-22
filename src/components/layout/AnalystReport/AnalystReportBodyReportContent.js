import React from "react";
import { styled } from "styled-components";
import axios from "axios";
import TargetNowPriceSection from "../../specific/AnalystReport/TargetNowPriceSection";
import ShareBtn from "../../specific/ShareBtn";
import ReportOpinion from "../../specific/ReportOpinion";
import Divider from "../../specific/Divider";
import ReportProfile from "../../specific/AnalystReport/ReportProfile";
import TargetPriceChange from "../../specific/AnalystReport/TargetPriceChangeSection";
import TargetHitSection from "../../specific/AnalystReport/TargetHitSection";
import ReportSummarySection from "../../specific/AnalystReport/ReportSummarySection";

const AnalystReportBodyReportContent = ({ analystReportData }) => {
  console.log(analystReportData);
  const [stockProfile, setStockProfile] = React.useState(null);
  const [analystProfile, setAnalystProfile] = React.useState(null);
  const fetchStockProfile = async ({ stockId }) => {
    try {
      const response = await axios.get(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/stock/profile/${stockId}`
      );
      const data = response.data;
      setStockProfile(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (analystReportData) {
      fetchStockProfile({ stockId: analystReportData.STOCK_ID });
      console.log(stockProfile);
    }
  }, [analystReportData]);

  const fetchAnalystProfile = async ({ analystId }) => {
    try {
      const response = await axios.get(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/analyst/${analystId}`
      );
      const data = await response.data;
      setAnalystProfile(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (analystReportData) {
      fetchAnalystProfile({ analystId: analystReportData.ANALYST_ID });
    }
  }, [analystReportData]);

  if (!analystReportData || !stockProfile || !analystProfile) {
    return null;
  } else {
    const floatPrice = parseFloat(
      analystReportData.ANALYST_TARGET_PRICE.replace(/,/g, "")
    );
    return (
      <ContentWrapper>
        <ContentHeader>
          <ReportOpinion>{analystReportData.ANALYST_OPINION}</ReportOpinion>
          <ShareBtn />
        </ContentHeader>
        <ReportProfile
          analystReportTitle={analystReportData.ANALYST_REPORT_NAME}
          stockName={stockProfile.STOCK_NAME}
          analystName={analystProfile.ANALYST_NAME}
          analystCompany={analystProfile.ANALYST_COMPANY}
        />
        <Divider />
        <TargetNowPriceSection
          targetPrice={floatPrice}
          nowPrice={parseFloat(stockProfile.PRICE)}
        />
        <Divider />
        <TargetPriceChange
          targetPrice={analystReportData.ANALYST_TARGET_PRICE}
        />
        <Divider />
        <TargetHitSection />
        <Divider />
        <ReportSummarySection
          reportSummary={analystReportData.ANALYST_SUMMARY}
        />
      </ContentWrapper>
    );
  }
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
