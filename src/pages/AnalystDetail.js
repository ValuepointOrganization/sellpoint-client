import React from "react";
import Header from "../components/layout/Header";
import AnalystDetailProfile from "../components/layout/AnalystDetail/AnalystDetailProfile";
import Space from "../components/common/Space.js";
import { DummyAnalystProfile } from "../assets/dummy";

const AnalystDetail = () => {
  return (
    <>
      <Header />
      <AnalystDetailProfile analystProfile={DummyAnalystProfile[0]} />
      <Space height="32px" />
    </>
  );
};

export default AnalystDetail;
