import React from "react";
import styled from "styled-components";
import Space from "../components/common/Space";
import SearchHeader from "../components/layout/SearchHeader";

import { DummyAnalystProfile } from "../assets/dummy";
const AnalystList = () => {
  return (
    <>
      <SearchHeader />
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
        {DummyAnalystProfile.map((analyst, index) => {
          return (
            <ListContent key={index}>
              <RankArea>
                <RankNum>{index}</RankNum>
                <Space width="12px" />
                <NameFirm>
                  <NameText>{analyst.name}</NameText>
                  <FirmText>{analyst.firm}</FirmText>
                </NameFirm>
              </RankArea>
              <StatArea>
                <ListText>{analyst.RMSE}</ListText>
                <ListText>{analyst.hitRate}</ListText>
                <ListText>{analyst.reportNum}</ListText>
              </StatArea>
            </ListContent>
          );
        })}
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

const ListContent = styled.div`
  padding: 22px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListText = styled.span`
  color: #8c8c8c;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.24px;
  width: 70px;
`;

const RankNum = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.32px;
  width: 40px;
`;

const NameFirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const FirmText = styled.div`
  color: #5f676f;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
`;

const NameText = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.32px;
`;

const RankArea = styled.div`
  display: flex;
`;

const StatArea = styled.div`
  display: flex;
`;

const StatHeaderArea = styled(StatArea)`
  margin-left: auto;
`;
