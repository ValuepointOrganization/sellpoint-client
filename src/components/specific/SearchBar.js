import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIconSvg } from "../../assets/image/search.svg";
import { ReactComponent as CloseIconSvg } from "../../assets/image/close.svg";
import { Flex } from "../common/Index";

const SearchBar = ({
  width = "100%",
  height = "50px",
  placeholder = "종목 또는 애널리스트를 검색하세요.",
  onClick,
  type,
}) => {
  const [searchData, setSearchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSearchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/search/main?query=${searchTerm}`
      );
      const data = await response.json();
      setSearchData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchReportData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://port-0-server-lzz7360l6d1cd162.sel4.cloudtype.app/api/report/analyst/query/${searchTerm}`
      );
      const data = await response.json();
      setSearchData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  let fetchFunction;

  switch (type) {
    case "analyst":
      fetchFunction = fetchReportData;
      break;
    case "stock":
      placeholder = "종목";
      break;
    default:
      fetchFunction = fetchSearchData;
  }

  const handleClick = (e) => {
    console.log("SearchBar clicked");
    if (onClick) {
      onClick(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchTerm);
    if (onClick) {
      onClick(searchTerm);
    }
    fetchFunction && fetchFunction();
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <SearchBarContainer width={width} height={height} onClick={handleClick}>
      <SearchForm onSubmit={handleSubmit}>
        <Flex align="center" gap="12px" style={{ height: "100%" }}>
          <SearchIconSvg width="18" height="18" />
          <SearchInput
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleInputChange}
          />
          {searchTerm && (
            <CloseIconSvg
              width="18"
              height="18"
              style={{ cursor: "pointer" }}
              onClick={handleClear}
            />
          )}
        </Flex>
      </SearchForm>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  padding: 12px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 24px;
  background: #f5f6f7;
  backdrop-filter: blur(50px);
`;

const SearchForm = styled.form`
  width: 100%;
  height: 100%;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  font-size: 16px;
`;
