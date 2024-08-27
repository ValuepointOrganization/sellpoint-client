import React from "react";
import { styled } from "styled-components";
import axios from "axios";
import ReportSearchBar from "../../specific/ReportSearchBar";
import ScrollableReportList from "../../specific/AnalystDetail/ScrollableReportList";

import { DummyReport } from "../../../assets/dummy";
import Space from "../../common/Space";

const ReportWrapper = ({ analystId, analystName, analystCompany }) => {
  const [reports, setReports] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchAnalystReport = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/report/analyst?ANALYST_ID=${analystId}`
        );
        setReports(response.data);
      } catch (err) {
        setError("Failed to fetch analyst data");
      }
    };
    if (analystId) {
      fetchAnalystReport();
    }

    console.log(reports);
  }, [analystId]);
  console.log(reports);

  return (
    <AreaContainer>
      <AreaText>작성한 리포트</AreaText>
      <Space height="20px" />
      <ReportSearchBar />
      <Space height="12px" />
      <ScrollableReportList
        reports={reports}
        analystName={analystName}
        analystCompany={analystCompany}
      />
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
