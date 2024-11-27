import React from "react";
import styled from "styled-components";
import ListContainerHeader from "../../specific/Main/ListContainerHeader";
import Space from "../../common/Space";
import ReportItem from "../../specific/Main/ReportItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BodyReportList = () => {
  const navigate = useNavigate();
  const [reportData, setReportData] = React.useState([]);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/report/analyst/top5`
        );
        setReportData(response.data);
      } catch (err) {
        setError("Failed to fetch report data");
        console.log(error);
      }
    };
    fetchReport();
  }, []);
  // console.log(reportData);
  return (
    <ReportListContainer>
      <ListContainerHeader
        title="인기 리포트"
        buttonText="리포트 더보기"
        buttonWidth={94}
        buttonHeight={22}
        onButtonClick={() => {
          navigate(`/analyst-report-list`);
        }}
      />
      <Space height="20px" />
      {reportData.slice(0, 3).map((report, index) => {
        return <ReportItem report={report} key={index} />;
      })}
    </ReportListContainer>
  );
};

export default BodyReportList;

const ReportListContainer = styled.div`
  width: 100%;
`;
