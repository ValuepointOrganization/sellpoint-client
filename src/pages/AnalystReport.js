import React from "react";
import ReportHeader from "../components/layout/AnalystReport/AnalystReportHeader";
import AnalystReportBodyWrapper from "../components/layout/AnalystReport/AnalystReportBodyWrapper";
import AnalystReportCommentInput from "../components/layout/AnalystReport/AnalytReportCommentInput";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import useKeyboardAdjustments from "../hooks/useKeyboardAdjustments";
const AnalystReport = () => {
  const { analystReportId } = useParams();

  const [analystReportData, setAnalystReportData] = React.useState(null);
  React.useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/report/analyst/${analystReportId}`
        );
        setAnalystReportData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReportData();
  }, [analystReportId]);
  if (analystReportData) {
    console.log(analystReportData);
  }

  useKeyboardAdjustments();
  return (
    <PageWrapper analystReportData={analystReportData}>
      <ReportHeader />
      <AnalystReportBodyWrapper analystReportData={analystReportData} />
      <AnalystReportCommentInput />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  position: relative;
  width: 393px;
  height: 100%;
  overflow: hidden;
  overflow-behavior: contain;
`;

export default AnalystReport;
