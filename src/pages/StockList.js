import React from "react";
import styled from "styled-components";
import Space from "../components/common/Space";
import SearchHeader from "../components/layout/SearchHeader";

import { DummyAnalystProfile } from "../assets/dummy";
import { useNavigate } from "react-router-dom";
const StockList = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleAnalystClick = (index) => {
    navigate(`/analyst/${index}`);
  };
  return (
    <>
      <SearchHeader onBackClick={handleBackClick} />
    </>
  );
};

export default StockList;

const ListContainer = styled.div`
  padding: 20px;
`;
