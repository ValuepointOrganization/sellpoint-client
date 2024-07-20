import React from "react";
import Header from "../components/layout/Header";
import AnalystDetailProfile from "../components/layout/AnalystDetail/AnalystDetailProfile";
import { DummyAnalystProfile } from "../assets/dummy";

const AnalystDetail = () => {
  return (
    <>
      <Header />
      <AnalystDetailProfile analystProfile={DummyAnalystProfile[0]} />
    </>
  );
};

export default AnalystDetail;
