import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import AnalystDetailProfile from "../components/layout/AnalystDetail/AnalystDetailProfile";
import Space from "../components/common/Space.js";
import { DummyAnalystProfile } from "../assets/dummy";

const AnalystDetail = () => {
  const { analystID } = useParams();

  const analystProfile = DummyAnalystProfile[analystID - 1];

  console.log(DummyAnalystProfile[0]);

  if (!analystProfile) {
    return <div>Analyst not found</div>;
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
