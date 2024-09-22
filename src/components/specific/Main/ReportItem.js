import React from "react";
import axios from "axios";
import { Flex, Text } from "../../common/Index";
import { ReactComponent as NvidiaLogo } from "../../../assets/image/NvidiaLogo.svg";
import { useNavigate } from "react-router-dom";

const ReportItem = ({ report }) => {
  const [analystData, setAnalystData] = React.useState(null);
  const [stockData, setStockData] = React.useState(null);

  const navigate = useNavigate();
  const handleReportTitleClick = () => {
    navigate(`/analyst-report/${report.ANALYST_REPORT_ID}`);
  };

  React.useEffect(() => {
    const fetchAnalyst = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/analyst/${report.ANALYST_ID}`
        );
        setAnalystData(response.data);
      } catch (err) {}
    };
    fetchAnalyst();
  }, [report]);

  React.useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/stock/profile/${report.STOCK_ID}`
        );
        setStockData(response.data);
      } catch (err) {}
    };
    fetchStock();
  }, [report]);
  return (
    <Flex
      style={{
        display: "flex",
        padding: "12px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "16px",
        width: "100%",
      }}
    >
      <Flex
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <NvidiaLogo width="50" height="34" viewBox="0 0 26 18" />
        <Flex
          direction="column"
          gap="6px"
          align="flex-start"
          style={{ flexGrow: 1, width: "calc(100% - 110px)" }}
        >
          <Text
            color="#83838A"
            fontSize="12px"
            fontWeight={600}
            style={{ width: "100%" }}
          >
            {analystData?.ANALYST_NAME} | {analystData?.ANALYST_COMPANY}
          </Text>
          <Text
            color="#2C2C2C"
            fontSize="14px"
            fontWeight={600}
            style={{
              width: "100%",
              wordBreak: "break-word",
              cursor: "pointer",
            }}
            onClick={() => handleReportTitleClick()}
          >
            {report.ANALYST_REPORT_NAME}
          </Text>
          <Text
            color="#BABABF"
            fontSize="12px"
            fontWeight={500}
            style={{ width: "100%" }}
          >
            {stockData?.STOCK_NAME}
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          align="center"
          style={{
            width: "40px",
            padding: "4px 6px",
            flexShrink: 0,
            borderRadius: "8px",
            background: "rgba(255, 59, 48, 0.10)",
          }}
        >
          <Text color="#FF3B30" fontSize="12px" fontWeight={600}>
            {report.ANALYST_OPINION}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ReportItem;
