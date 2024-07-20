import React from "react";
import styled from "styled-components";
import MoreButton from "./MoreButton";
import Space from "../../common/Space";

import NvidiaLogo from "../../../assets/image/nvidia.svg";
import DummyStock from "../../../assets/dummy.js";

const MainStockList = () => {
  return (
    <StockListContainer>
      <ListHeader>
        <p style={{ fontSize: "16px", fontWeight: 600, lineHeight: "160%" }}>
          인기 종목
        </p>
        <MoreButton text="종목 더보기" width={82} height={22} />
      </ListHeader>
      <Space height="20px" />
      {DummyStock.map((stock, index) => (
        <ListSquare key={index}>
          <StockProfile>
            <img src={NvidiaLogo} alt={`${stock.name} Logo`} />
            <span>{stock.name}</span>
          </StockProfile>
          <StockInfo>
            <span>{stock.code}</span>
            <span>{stock.up}</span>
          </StockInfo>
        </ListSquare>
      ))}
    </StockListContainer>
  );
};

export default MainStockList;

const StockListContainer = styled.div`
  width: 100%;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const ListSquare = styled.div`
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  background: #f5f6f7;
  display: flex;
  flex-direction: row;
`;

const StockProfile = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  gap: 12px;
`;

const StockInfo = styled.div`
  display: flex;
  width: 33px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
`;
