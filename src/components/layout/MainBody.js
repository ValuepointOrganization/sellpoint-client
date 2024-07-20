import React from "react";
import styled from "styled-components";
import SearchBar from "../specific/Main/SearchBar";
import MainStockList from "../specific/Main/MainStockList";
import Space from "../common/Space";

const MainBody = () => {
  return (
    <BodyContainer>
      <MainLine>숨겨진 매도 의견을{"\n"}확인해보세요.</MainLine>
      <Space height="32px" />
      <SearchBar />
      <Space height="128px" />
      <MainStockList />
    </BodyContainer>
  );
};

export default MainBody;

const BodyContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 20px;
`;

const MainLine = styled.span`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 160%;
  white-space: pre-line;
`;
