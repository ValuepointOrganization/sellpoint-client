import React, { useState, useCallback } from "react";
import styled from "styled-components";
import SearchBar from "../../specific/SearchBar";
import SearchHeader from "../SearchHeader";
import BodyStockList from "./BodyStockList";
import BodyAnalystList from "./BodyAnalystList";
import BodyUserList from "./BodyUserList";
import BodyReportList from "./BodyReportList";

import Space from "../../common/Space";

const BodyWrapper = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleBackClick = useCallback(() => {
    setIsSearchActive(false);
  }, []);

  return (
    <>
      {isSearchActive ? (
        <SearchHeader onBackClick={handleBackClick} />
      ) : (
        <SearchBarWrapper>
          <SearchBar onClick={handleSearchClick} />
        </SearchBarWrapper>
      )}
      <BodyContainer isSearchActive={isSearchActive}>
        {!isSearchActive && (
          <>
            <MainLine>숨겨진 매도 의견을{"\n"}확인해보세요.</MainLine>
          </>
        )}
        <Space height={isSearchActive ? "7px" : "128px"} />
        <BodyStockList />
        <Space height="64px" />
        <BodyAnalystList />
        {/* <Space height="64px" />
        <BodyUserList /> */}
        <Space height="64px" />
        <BodyReportList />
      </BodyContainer>
    </>
  );
};

export default BodyWrapper;

const SearchBarWrapper = styled.div`
  padding: 40px 20px 0;
`;

const BodyContainer = styled.div`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.isSearchActive ? "0 20px" : "40px 20px")};
`;

const MainLine = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 160%;
  white-space: pre-line;
`;
