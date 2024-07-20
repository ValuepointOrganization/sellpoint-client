import React from "react";
import styled from "styled-components";
import Space from "../../common/Space";
import ListHeader from "./ListContainerHeader";
import ScrollContainer from "./ScrollContainer";

import { DummyUser } from "../../../assets/dummy";

const MainUserList = () => {
  return (
    <AnalystListContainer>
      <ListHeader
        title="인기 유저"
        buttonText="유저 더보기"
        buttonWidth={82}
        buttonHeight={22}
      />
      <Space height="20px" />
      <ScrollContainer>
        {DummyUser.map((analyst, index) => (
          <ListSquare key={index}>
            <AnalystName>{analyst.name}</AnalystName>
            <AnalystFirm>{analyst.performance}</AnalystFirm>
          </ListSquare>
        ))}
      </ScrollContainer>
    </AnalystListContainer>
  );
};

export default MainUserList;

const AnalystListContainer = styled.div`
  width: 100%;
`;

const ListSquare = styled.div`
  min-width: 93px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #f5f6f7;
`;

const AnalystName = styled.span`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
`;

const AnalystFirm = styled.span`
  color: #bababf;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
`;
