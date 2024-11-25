import React from "react";
import styled from "styled-components";

import { Flex, Text } from "../../common/Index";
import ReportItem from "../../specific/Main/ReportItem";

const ReportListWrapper = () => {
  const [reportListData, setReportListData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchReportListData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/report/analyst/?`
      );
      const data = await response.json();
      setReportListData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchReportListData();
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return (
    <Flex direction="column" style={{ padding: "20px" }}>
      {reportListData.map((report, index) => {
        return (
          <>
            <ReportItem report={report} key={index} />
            <Divider />
          </>
        );
      })}
    </Flex>
  );
};

export default ReportListWrapper;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f5f6f7;
  margin-top: 10px;
  margin-bottom: 10px;
`;
