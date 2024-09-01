import React from "react";
import styled from "styled-components";
import ListContainerHeader from "../../specific/Main/ListContainerHeader";
import Space from "../../common/Space";
import ReportItem from "../../specific/Main/ReportItem";
import { DummyReport } from "../../../assets/dummy";
import axios from "axios";

const BodyReportList = () => {
  const [reportData, setReportData] = React.useState([]);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/report/analyst?`
        );
        setReportData(response.data);
      } catch (err) {
        setError("Failed to fetch report data");
        console.log(error);
      }
    };
    fetchReport();
  }, []);
  console.log(reportData);
  return (
    <ReportListContainer>
      <ListContainerHeader
        title="인기 리포트"
        buttonText="리포트 더보기"
        buttonWidth={94}
        buttonHeight={22}
      />
      <Space height="20px" />
      {reportData.map((report, index) => {
        return <ReportItem report={report} key={index} />;
      })}
    </ReportListContainer>
  );
};

export default BodyReportList;

const ReportListContainer = styled.div`
  width: 100%;
`;
