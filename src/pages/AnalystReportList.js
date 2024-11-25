import React from "react";
import { useNavigate } from "react-router-dom";
import SearchHeader from "../components/layout/SearchHeader";
import StockListWrapper from "../components/layout/StockList/StockListWrapper";
import ReportListWrapper from "../components/layout/ReportList/ReportListWrapper";
const AnalystReportList = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <SearchHeader onBackClick={handleBackClick} type="stock" />
      <ReportListWrapper />
    </>
  );
};

export default AnalystReportList;
