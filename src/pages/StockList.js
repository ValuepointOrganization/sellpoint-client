import React from "react";
import { useNavigate } from "react-router-dom";
import SearchHeader from "../components/layout/SearchHeader";
import StockListWrapper from "../components/layout/StockList/StockListWrapper";
const StockList = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <SearchHeader onBackClick={handleBackClick} type="stock" />
      <StockListWrapper />
    </>
  );
};

export default StockList;
