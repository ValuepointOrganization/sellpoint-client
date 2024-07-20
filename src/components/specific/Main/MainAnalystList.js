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
      <ListSquare>
        <span
          style={{
            color: "#000",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "160%",
          }}
        >
          {DummyAnalyst[0].name}
        </span>
        <span
          style={{
            color: "#BABABF",
            fontSize: "12px",
            fontSyle: "normal",
            fontWeight: "600",
            lineHeight: "160%",
          }}
        >
          {DummyAnalyst[0].firm}
        </span>
      </ListSquare>
    </AnalystListContainer>
  );
};

export default MainAnalystList;

const AnalystListContainer = styled.div`
  width: 100%;
`;

const ListSquare = styled.div`
  width: 74px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #f5f6f7;
`;
