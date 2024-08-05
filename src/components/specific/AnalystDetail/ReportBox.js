import React from "react";
import NvidiaLogo from "../../../assets/image/NvidiaSmaller.svg";
import Flex from "../../common/Flex";
import Text from "../../common/Text";
import Space from "../../common/Space";
import ReportOpinion from "../ReportOpinion";
import { ReportOutside, NameSection, Logo } from "./ReportBoxStyles";

const ReportBox = ({ report }) => {
  return (
    <ReportOutside>
      <ReportOpinion isBuy={report.opinion === "Buy"}>
        {report.opinion}
      </ReportOpinion>
      <Flex direction="column" flex="1 0 0">
        <NameSection>
          <Logo src={NvidiaLogo} alt="NvidiaLogo" />
          <Text color="#99a0a3" fontSize="12px" fontWeight="600">
            Nvidia
          </Text>
        </NameSection>
        <Space height="6px" />
        <Text color="#2c2c2c" fontSize="14px" fontWeight="600" lineHeight="140%">
          {report.reportTitle}
        </Text>
        <Space height="16px" />
        <Text color="#83838a" fontSize="12px" fontWeight="500">
          {report.analystName} | {report.firmName}
        </Text>
        <Space height="6px" />
        <Text color="#83838a" fontSize="12px" fontWeight="500">
          6개월 후 가격: {report.halfYear} ・ 1년 후 가격: {report.oneYear}
        </Text>
        <Space height="6px" />
        <Text color="#83838a" fontSize="12px" fontWeight="500">
          발행 날짜: {report.writtenDate}
        </Text>
      </Flex>
    </ReportOutside>
  );
};

export default ReportBox;
