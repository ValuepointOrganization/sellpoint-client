import React from "react";
import styled from "styled-components";
import Space from "../../common/Space";
import ListContainerHeader from "./ListContainerHeader";
import ScrollContainer from "./ScrollContainer";
import ListSquare from "./ListSquare";

import { DummyUser } from "../../../assets/dummy";

const MainUserList = () => {
  return (
    <UserListContainer>
      <ListContainerHeader
        title="인기 유저"
        buttonText="유저 더보기"
        buttonWidth={82}
        buttonHeight={22}
      />
      <Space height="20px" />
      <ScrollContainer>
        {DummyUser.map((user, index) => (
          <ListSquare key={index} type="user">
            <UserName>{user.name}</UserName>
            <UserPerformance>{user.performance}</UserPerformance>
          </ListSquare>
        ))}
      </ScrollContainer>
    </UserListContainer>
  );
};

export default MainUserList;

const UserListContainer = styled.div`
  width: 100%;
`;

const UserName = styled.span`
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
