import React from "react";
import styled from "styled-components";
import StatBox from "../../specific/AnalystDetail/StatBox";

const ProfileStat = ({ analystProfile }) => {
  return (
    <StatContainer>
      <StatBox category={`오차(RMSE)`} detail={analystProfile.RMSE} />
      <StatBox category={`첫 예측 적중 기간`} detail={analystProfile.hitRate} />
      <StatBox category={`리포트 수`} detail={analystProfile.reportNum} />
    </StatContainer>
  );
};

export default ProfileStat;

const StatContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;
