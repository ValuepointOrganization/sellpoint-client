import React from "react";
import styled from "styled-components";
import Space from "../../common/Space.js";
import ListContainerHeader from "../../specific/Main/ListContainerHeader.js";
import ListSquare from "../../specific/Main/ListSquare.js";
import StyledSVG from "../../common/StyledSVG.js";

import { ReactComponent as NvidiaLogo } from "../../../assets/image/NvidiaLogo.svg";
import { DummyStock } from "../../../assets/dummy.js";

const BodyStockList = () => {
  return (
    <StockListContainer>
      <ListContainerHeader
        title="인기 종목"
        buttonText="종목 더보기"
        buttonWidth={82}
        buttonHeight={22}
      />
      <Space height="20px" />
      {DummyStock.map((stock, index) => (
        <ListSquare key={index} type="stock">
          <StockProfile>
            <StyledSVG width="30" height="30" viewBox="0 0 30 30">
              <NvidiaLogo />
            </StyledSVG>
            <span>{stock.name}</span>
          </StockProfile>
          <StockInfo>
            <span>{stock.code}</span>
            <span style={{ color: "#FF3B30" }}>{stock.up}</span>
          </StockInfo>
        </ListSquare>
      ))}
    </StockListContainer>
  );
};

export default BodyStockList;

const StockListContainer = styled.div`
  width: 100%;
`;

const StockProfile = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  gap: 12px;
  font-size: 14px;
`;

const StockInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
  font-size: 12px;
`;
