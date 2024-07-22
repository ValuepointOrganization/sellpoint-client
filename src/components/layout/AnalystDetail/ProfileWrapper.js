import React from "react";
import styled from "styled-components";
import ShareIcon from "../../../assets/image/ShareIcon.svg";
import Space from "../../common/Space";
import ProfileStat from "./ProfileStat";

const ProfileWrapper = ({ analystProfile }) => {
  return (
    <>
      <ProfileContainer>
        <ProfileHeader>
          <NameFirm>
            <NameText>{analystProfile.name}</NameText>
            <FirmText>{analystProfile.firm}</FirmText>
          </NameFirm>
          <ShareBtn>
            <img src={ShareIcon} alt="ShareIcon" />
            <ShareText>공유</ShareText>
          </ShareBtn>
        </ProfileHeader>
        <Space height="32px" />
        <ProfileStat analystProfile={analystProfile} />
      </ProfileContainer>
    </>
  );
};

export default ProfileWrapper;

const ProfileContainer = styled.div`
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
