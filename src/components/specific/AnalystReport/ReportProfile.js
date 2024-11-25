import React from "react";
import { styled } from "styled-components";
import axios from "axios";
import { ReactComponent as NvidiaLogo } from "../../../assets/image/NvidiaSmaller.svg";

import { Flex, Text } from "../../common/Index";

const ReportProfile = ({
  analystReportTitle,
  stockName,
  analystName,
  analystCompany,
}) => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="12px"
      style={{ alignSelf: "stretch" }}
    >
      <Flex>
        <CompanyText>{stockName}</CompanyText>
      </Flex>
      <TitleText>{analystReportTitle}</TitleText>
      <OtherText>
        {analystName} | {analystCompany}
      </OtherText>
    </Flex>
  );
};

export default ReportProfile;

const LogoWrapper = styled.div`
  margin-right: 8px;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const CompanyText = styled(Text)`
  color: #99a0a3;
  font-weight: 600;
  font-size: 14px;
`;

const TitleText = styled(Text)`
  color: #2c2c2c;
  font-weight: 600;
  font-size: 24px;
`;

const OtherText = styled(Text)`
  color: #83838a;
  font-size: 12px;
  font-weight: 500;
`;
