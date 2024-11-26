import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "../../specific/SearchBar";
import SearchHeader from "../SearchHeader";
import BodyStockList from "./BodyStockList";
import BodyAnalystList from "./BodyAnalystList";
import BodyUserList from "./BodyUserList";
import BodyReportList from "./BodyReportList";
import SearchResults from "./SearchResults";
import Space from "../../common/Space";
import axios from "axios";

const BodyWrapper = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const fetchSearch = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/search/main?query=${searchTerm}`
      );
      setSearchResults(response.data);
      console.log(response.data);
    } catch (err) {
      setError("Failed to fetch report data");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearch(searchTerm);
  }, [searchTerm]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    fetchSearch(term);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleBackClick = useCallback(() => {
    setIsSearchActive(false);
    setSearchTerm("");
    setSearchResults([]);
  }, []);

  return (
    <>
      {isSearchActive ? (
        <SearchHeader 
          onBackClick={handleBackClick}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
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
            <SearchResults results={searchResults} searchTerm={searchTerm} />
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
