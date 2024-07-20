import React from "react";
import styled from "styled-components";
import Space from "../components/common/Space";

import Header from "../components/layout/Header";

import { DummyAnalystProfile } from "../assets/dummy";

import ShareIcon from "../assets/image/ShareIcon.svg";
const AnalystDetail = () => {
  return (
    <>
      <Header />
      <ProfileContainer>
        <ProfileHeader>
          <NameFirm>
            <NameText>{DummyAnalystProfile[0].name}</NameText>
            <FirmText>{DummyAnalystProfile[0].firm}</FirmText>
          </NameFirm>
          <ShareBtn>
            <img src={ShareIcon} alt="ShareIcon" />
            <ShareText>공유</ShareText>
          </ShareBtn>
        </ProfileHeader>
        <Space height="32px" />
      </ProfileContainer>
    </>
  );
};

export default AnalystDetail;

const ProfileContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameFirm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NameText = styled.span`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 91.667% */
  letter-spacing: -0.408px;
`;

const FirmText = styled.span`
  color: #bababf;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: -0.408px;
`;

const ShareBtn = styled.div`
  display: flex;
  padding: 4px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: #f5f7f9;
  cursor: pointer;
`;

const ShareText = styled.span`
  color: #8c8c8c;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 22.4px */
`;
