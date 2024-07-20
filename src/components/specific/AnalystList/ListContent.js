import React from "react";
import styled from "styled-components";
import Space from "../../common/Space";

const ListContent = ({ analyst, index }) => {
  return (
    <ListContentWrapper>
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
    </ListContentWrapper>
  );
};

export default ListContent;

const ListContentWrapper = styled.div`
  padding: 22px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #f5f6f7;
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
  line-height: 140%;
`;

const NameText = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.32px;
`;

const RankArea = styled.div`
  display: flex;
`;

const StatArea = styled.div`
  display: flex;
`;
