import React from "react";
import styled from "styled-components";
import Space from "../components/common/Space";
import SearchHeader from "../components/layout/SearchHeader";
import ListContent from "../components/specific/AnalystList/ListContent";

import { DummyAnalystProfile } from "../assets/dummy";
import { useNavigate } from "react-router-dom";
const AnalystList = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  const handleAnalystClick = (analyst) => {
    navigate(`/analyst/${analyst.id}`);
  };

  return (
    <>
      <SearchHeader onBackClick={handleBackClick} />
      <Space height="20px" />
      <ListContainer>
        <ListHeader>
          <span style={{ width: "131px" }}>랭킹</span>
          <StatHeaderArea>
            <span style={{ width: "70px" }}>오차</span>
            <span style={{ width: "70px" }}>적중기간</span>
            <span style={{ width: "70px" }}>리포트 수</span>
          </StatHeaderArea>
        </ListHeader>
        {DummyAnalystProfile.map((analyst, index) => (
          <ListContent 
            key={analyst.id} 
            analyst={analyst} 
            index={index + 1} 
            onClick={() => handleAnalystClick(analyst)}
          />
        ))}
      </ListContainer>
    </>
  );
};

export default AnalystList;

const ListContainer = styled.div`
  padding: 20px;
`;

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #565656;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.24px;
  padding-bottom: 10px;
  border-bottom: solid 1px #dadbdc;
`;

const StatHeaderArea = styled.div`
  display: flex;
  margin-left: auto;
`;
