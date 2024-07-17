import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #bababf;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  padding: 10px;
  font-size: 16px;
`;

const SearchIcon = styled.span`
  margin-right: 10px;
  font-size: 20px;
  color: #888;
`;

const ClearIcon = styled.span`
  margin-left: 10px;
  font-size: 20px;
  color: #888;
  cursor: pointer;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon>🔍</SearchIcon>
      <SearchInput placeholder="종목 또는 애널리스트를 검색하세요." />
      <ClearIcon>✖️</ClearIcon>
    </SearchBarContainer>
  );
};

export default SearchBar;
