import React from "react";
import NvidiaLogo from "../../../assets/image/NvidiaSmaller.svg";
import axios from "axios";
import Flex from "../../common/Flex";
import Text from "../../common/Text";
import Space from "../../common/Space";
import ReportOpinion from "../ReportOpinion";
import { ReportOutside, NameSection, Logo } from "./ReportBoxStyles";
import { useNavigate } from "react-router-dom";
const ReportBox = ({ report, analystCompany, analystName }) => {
  const [stockProfile, setStockProfile] = React.useState(null);
  const [analystProfile, setAnalystProfile] = React.useState(null);

  const navigate = useNavigate();
  const handleTitleClick = () => {
    navigate(`/analyst-report/${report.ANALYST_REPORT_ID}`);
  };
  const fetchStockData = async () => {
    try {
      const response = await axios.get(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/stock/profile/${report.STOCK_ID}`
      );
      setStockProfile(response.data);
    } catch (err) {}
  };
  const fetchAnalystData = async () => {
    try {
      const response = await axios.get(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/analyst/${report.ANALYST_ID}`
      );
      setAnalystProfile(response.data);
    } catch (err) {}
  };
  React.useEffect(() => {
    if (report) {
      fetchStockData();
      fetchAnalystData();
    }
    if (analystProfile) console.log(analystProfile);
  }, [report]);

  if (!stockProfile || !analystProfile) {
    return (
      <ReportOutside>
        <Text color="#83838a" fontSize="12px" fontWeight="500">
          Loading stock profile...
        </Text>
      </ReportOutside>
    );
  }

  return (
    <ReportOutside>
      <ReportOpinion isBuy={report.ANALYST_OPINION === "Buy"}>
        {report.ANALYST_OPINION}
      </ReportOpinion>
      <Flex direction="column" flex="1 0 0">
        <NameSection>
          {/* Logo Deprecated */}
          {/* <Logo src={NvidiaLogo} alt="NvidiaLogo" /> */}
          <Text color="#99a0a3" fontSize="12px" fontWeight="600">
            {stockProfile.STOCK_NAME}
          </Text>
        </NameSection>
        <Space height="6px" />
        <Text
          color="#2c2c2c"
          fontSize="14px"
          fontWeight="600"
          lineHeight="140%"
          cursor="pointer"
          onClick={handleTitleClick}
        >
          {report.ANALYST_REPORT_NAME}
        </Text>
        <Space height="16px" />
        <Text color="#83838a" fontSize="12px" fontWeight="500">
          {analystProfile.ANALYST_NAME} | {analystProfile.ANALYST_COMPANY}
        </Text>
        <Space height="6px" />
        <Text color="#83838a" fontSize="12px" fontWeight="500">
          6개월 후 가격: {report.halfYear} ・ 1년 후 가격: {report.oneYear}
        </Text>
        <Space height="6px" />
        <Text color="#83838a" fontSize="12px" fontWeight="500">
          발행 날짜: {report.ANALYST_UPLOAD_DATE}
        </Text>
      </Flex>
    </ReportOutside>
  );
};

export default ReportBox;
