import React from "react";
import styled from "styled-components";
import Space from "../../common/Space";
import ListHeader from "./ListHeader";

import { DummyAnalyst } from "../../../assets/dummy";

const MainAnalystList = () => {
  return (
    <AnalystListContainer>
      <ListHeader
        title="인기 애널리스트"
        buttonText="애널리스트 더보기"
        buttonWidth={119}
        buttonHeight={22}
      />
      <Space height="20px" />
      <ScrollContainer>
        {DummyAnalyst.map((analyst, index) => (
          <ListSquare key={index}>
            <AnalystName>{analyst.name}</AnalystName>
            <AnalystFirm>{analyst.firm}</AnalystFirm>
          </ListSquare>
        ))}
      </ScrollContainer>
    </AnalystListContainer>
  );
};

export default MainAnalystList;

const AnalystListContainer = styled.div`
  width: 100%;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-bottom: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ListSquare = styled.div`
  min-width: 74px;
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
