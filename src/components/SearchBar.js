import React from "react";
import styled from "styled-components";
import SearchIconSvg from "../assets/image/search.svg";
import CloseIconSvg from "../assets/image/close.svg";

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

const SearchIcon = styled.img`
  margin-right: 10px;
  width: 18px;
  height: 18px;
`;

const ClearIcon = styled.img`
  margin-left: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon src={SearchIconSvg} alt="Search" />
      <SearchInput placeholder="종목 또는 애널리스트를 검색하세요." />
      <ClearIcon src={CloseIconSvg} alt="Clear" />
    </SearchBarContainer>
  );
};

export default SearchBar;
