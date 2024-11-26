import React, { useState, useCallback, useEffect } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Dummy data for testing
  const dummyResults = [
    {
      type: "애널리스트",
      name: "김투자",
      description: "삼성증권 수석애널리스트"
    },
    {
      type: "종목",
      name: "삼성전자",
      description: "전자제품 제조 및 판매"
    },
    {
      type: "리포트",
      name: "2024년 반도체 전망",
      description: "반도체 시장 분석 및 전망"
    }
  ];

  useEffect(() => {
    if (searchTerm) {
      // 실제 API 호출 대신 더미 데이터 사용
      setSearchResults(dummyResults.filter(item => 
        item.name.includes(searchTerm) || 
        item.description.includes(searchTerm)
      ));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleBackClick = useCallback(() => {
    setIsSearchActive(false);
  }, []);

  return (
    <>
      {isSearchActive ? (
        <SearchHeader 
          onBackClick={handleBackClick}
          onSearch={handleSearch}
        />
      ) : (
        <SearchBarWrapper>
          <SearchBar onClick={handleSearchClick} />
        </SearchBarWrapper>
      )}
      <BodyContainer isSearchActive={isSearchActive}>
        {!isSearchActive ? (
          <>
            <MainLine>숨겨진 매도 의견을{"\n"}확인해보세요.</MainLine>
            <Space height="128px" />
            <BodyStockList />
            <Space height="64px" />
            <BodyAnalystList />
            <Space height="64px" />
            <BodyReportList />
          </>
        ) : (
          <SearchResultContainer>
            <SearchResults results={searchResults} />
          </SearchResultContainer>
        )}
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

const SearchResultContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  background: white;
`;
