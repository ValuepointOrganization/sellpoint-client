import React from "react";
import styled from "styled-components";

import Header from "../components/layout/Header";
import StockDetailStockWrapper from "../components/layout/StockDetail/StockDetailStockWrapper";
import StockDetailReportWrpper from "../components/layout/StockDetail/StockDetailReportWrapper";
const StockDetail = () => {
  return (
    <>
      <Header />
      <StockDetailStockWrapper />
      <StockDetailReportWrpper />
    </>
  );
};

export default StockDetail;
