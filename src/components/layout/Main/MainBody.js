import React, { useState, useCallback } from "react";
import styled from "styled-components";
import SearchBar from "../../specific/SearchBar";
import SearchHeader from "../SearchHeader";
import MainStockList from "./MainStockList";
import MainAnalystList from "./MainAnalystList";
import MainUserList from "./MainUserList";
import MainReportList from "./MainReportList";

import Space from "../../common/Space";

const MainBody = () => {
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
        <MainStockList />
        <Space height="64px" />
        <MainAnalystList />
        <Space height="64px" />
        <MainUserList />
        <Space height="64px" />
        <MainReportList />
      </BodyContainer>
    </>
  );
};

export default MainBody;

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
