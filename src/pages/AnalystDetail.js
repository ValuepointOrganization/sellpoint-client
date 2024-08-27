import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import ProfileWrapper from "../components/layout/AnalystDetail/ProfileWrapper";
import ReportWrapper from "../components/layout/AnalystDetail/ReportWrapper";
import Space from "../components/common/Space";
import { DummyAnalystProfile } from "../assets/dummy";

const AnalystDetail = () => {
  const { analystId } = useParams();
  const [analystProfile, setAnalystProfile] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchAnalystProfile = async () => {
      try {
        const response = await axios.get(
          `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/analyst/${analystId}`
        );
        setAnalystProfile(response.data);
      } catch (err) {
        setError("Failed to fetch analyst data");
      }
    };
    fetchAnalystProfile();
  }, [analystId]);

  console.log(analystId);
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
