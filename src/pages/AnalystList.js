import React from "react";
import Space from "../components/common/Space";
import SearchHeader from "../components/layout/SearchHeader";
import AnalystListContainer from "../components/layout/AnalystList/AnalystListContainer";
import { useNavigate } from "react-router-dom";
const AnalystList = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <>
      <SearchHeader onBackClick={handleBackClick} type="analyst" />
      <Space height="20px" />
      <AnalystListContainer />
    </>
  );
};

export default AnalystList;
