import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import AnalystDetailProfile from "../components/layout/AnalystDetail/AnalystDetailProfile";
import Space from "../components/common/Space.js";
import { DummyAnalystProfile } from "../assets/dummy";

const AnalystDetail = () => {
  const analystID = useParams();
  const [analystProfile, setAnalystProfile] = React.useState(null);

  React.useEffect(() => {
    const fetchAnalystProfile = async () => {
      try {
        // Replace this with your actual fetch call
        // const response = await fetch(`/api/analyst/${analystID}`);
        // const data = await response.json();
        const data = DummyAnalystProfile; // Using dummy data for now
        console.log(data[analystID]);
        console.log(analystID);
        setAnalystProfile(data[analystID - 1]);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAnalystProfile();
  }, [analystID]);

  return (
    <>
      <Header />
      {/* <AnalystDetailProfile analystProfile={analystProfile} /> */}
      <p>현재 parameter는 {analystProfile} 입니다.</p>
      <Space height="32px" />
    </>
  );
};

export default AnalystDetail;
