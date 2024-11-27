import React, { useState } from "react";
import { Flex, Text } from "../../common/Index";
import axios from "axios";
import { useParams } from "react-router-dom";
import StockDetailReportSelect from "../../specific/StockDetail/StockDetailReportSelect";
import StockDetailReportBrief from "../../specific/StockDetail/StockDetailReportBrief";
import ReportSearchBar from "../../specific/ReportSearchBar";
import ScrollableReportList from "../../specific/AnalystDetail/ScrollableReportList";

const StockDetailReportWrapper = () => {
  const [reportType, setReportType] = useState("analyst");

  const { stockId } = useParams();
  const [reportList, setReportList] = useState(null);
  const fetchReportList = async ({ stockId }) => {
    try {
      const response = await axios.get(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/report/analyst?STOCK_ID=${stockId}`
      );
      setReportList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchReportList({ stockId });
  }, [stockId]);

  if (!reportList) return null;
  return (
    <React.Fragment>
      <Flex
        style={{
          padding: "0px 20px 0px 20px",
        }}
      >
        <StockDetailReportSelect
          reportType={reportType}
          setReportType={setReportType}
        />
      </Flex>
      {reportType === "analyst" ? (
        <Flex
          align="flex-start"
          gap="20px"
          direction="column"
          style={{
            padding: "0px 20px 100px 20px",
            background: "#FAFAFA;",
          }}
        >
          <StockDetailReportBrief
            reportType={reportType}
            reportNum={reportList.length}
          />
          <ReportSearchBar
            placeholder="애널리스트를 검색하세요."
            style={{ border: "1px #E6E9ED" }}
          />
          <ScrollableReportList reports={reportList} />
        </Flex>
      ) : (
        <Flex
          justify="center"
          align="center"
          style={{
            padding: "100px 20px",
            background: "#FAFAFA",
          }}
        >
          <Text fontSize="16px" color="#666">
            준비 중입니다
          </Text>
        </Flex>
      )}
    </React.Fragment>
  );
};

export default StockDetailReportWrapper;
