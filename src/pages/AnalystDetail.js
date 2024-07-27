import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import ProfileWrapper from "../components/layout/AnalystDetail/ProfileWrapper";
import ReportWrapper from "../components/layout/AnalystDetail/ReportWrapper";
import Space from "../components/common/Space";
import { DummyAnalystProfile } from "../assets/dummy";

const AnalystDetail = () => {
  const { analystID } = useParams();
  const [analystProfile, setAnalystProfile] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchAnalystProfile = async () => {
      try {
        const data = DummyAnalystProfile; // Using dummy data for now
        const profile = data[parseInt(analystID) - 1];
        if (profile) {
          setAnalystProfile(profile);
        } else {
          setError("Analyst not found");
        }
      } catch (err) {
        setError("An error occurred while fetching the analyst profile");
      }
    };
    fetchAnalystProfile();
  }, [analystID]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!analystProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <BodyWrapper>
        <ProfileWrapper analystProfile={analystProfile} />
        <Space height="80px" />
        <ReportWrapper />
      </BodyWrapper>
    </>
  );
};

export default AnalystDetail;

const BodyWrapper = styled.div`
  padding: 20px;
`;
