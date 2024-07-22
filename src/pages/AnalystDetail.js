import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import AnalystDetailProfile from "../components/layout/AnalystDetail/AnalystDetailProfile";
import Space from "../components/common/Space.js";
import { DummyAnalystProfile } from "../assets/dummy";

const AnalystDetail = () => {
  const { analystID } = useParams();
  const [analystProfile, setAnalystProfile] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchAnalystProfile = async () => {
      try {
        // Replace this with your actual fetch call
        // const response = await fetch(`/api/analyst/${analystID}`);
        // const data = await response.json();
        const data = DummyAnalystProfile; // Using dummy data for now
        const profile = data[parseInt(analystID) - 1];
        if (profile) {
          setAnalystProfile(profile);
        } else {
          setError("Analyst not found");
        }
      } catch (err) {
        console.error(err.message);
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
      <AnalystDetailProfile analystProfile={analystProfile} />
      <Space height="32px" />
    </>
  );
};

export default AnalystDetail;
