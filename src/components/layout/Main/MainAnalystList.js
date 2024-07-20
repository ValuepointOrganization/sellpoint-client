import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Space from "../../common/Space";
import ListContainerHeader from "../../specific/Main/ListContainerHeader";
import ScrollContainer from "../../specific/Main/ScrollContainer";
import ListSquare from "../../specific/Main/ListSquare";

import { DummyAnalyst } from "../../../assets/dummy";

const MainAnalystList = () => {
  const navigate = useNavigate();

  const handleMoreButtonClick = () => {
    navigate("/analyst-list");
  };

  return (
    <AnalystListContainer>
      <ListContainerHeader
        title="인기 애널리스트"
        buttonText="애널리스트 더보기"
        buttonWidth={119}
        buttonHeight={22}
        onButtonClick={handleMoreButtonClick}
      />
      <Space height="20px" />
      <ScrollContainer>
        {DummyAnalyst.map((analyst, index) => (
          <ListSquare key={index} type="analyst">
            <AnalystName>{analyst.name}</AnalystName>
            <AnalystFirm>{analyst.firm}</AnalystFirm>
          </ListSquare>
        ))}
      </ScrollContainer>
    </AnalystListContainer>
  );
};

export default MainAnalystList;

const AnalystListContainer = styled.div`
  width: 100%;
`;

const AnalystName = styled.span`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
`;

const AnalystFirm = styled.span`
  color: #bababf;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
`;
