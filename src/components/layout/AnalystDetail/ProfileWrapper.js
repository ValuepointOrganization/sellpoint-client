import React from "react";
import styled from "styled-components";
import Space from "../../common/Space";
import ProfileStat from "./ProfileStat";
import ShareBtn from "../../specific/ShareBtn";

const ProfileWrapper = ({ analystProfile }) => {
  return (
    <>
      <ProfileContainer>
        <ProfileHeader>
          <NameFirm>
            <NameText>{analystProfile.name}</NameText>
            <FirmText>{analystProfile.firm}</FirmText>
          </NameFirm>
          <ShareBtn />
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

