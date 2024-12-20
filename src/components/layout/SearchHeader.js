import React from "react";
import styled from "styled-components";
import SearchBar from "../specific/SearchBar";
import ChevronBack from "../../assets/image/ChevronBack.svg";
import FilterIcon from "../../assets/image/FilterIcon.svg";

const SearchHeader = ({ onBackClick, type, searchTerm, onSearchChange, onSearchSubmit }) => {
  let placeholderText = "";

  switch (type) {
    case "analyst":
      placeholderText = "애널리스트";
      break;
    case "stock":
      placeholderText = "종목";
      break;
    default:
      placeholderText = "검색어를 입력하세요";
  }
  return (
    <SearchHeaderContainer>
      <IconButton onClick={onBackClick}>
        <img src={ChevronBack} alt="BackBtn" />
      </IconButton>
      <SearchBar
        width="275px"
        height="50px"
        placeholder={placeholderText}
        value={searchTerm}
        onChange={onSearchChange}
        onSubmit={onSearchSubmit}
      />
      <IconButton
        onClick={() => {
          /* Add your filter functionality here */
        }}
      >
        <img src={FilterIcon} alt="FilterBtn" />
      </IconButton>
    </SearchHeaderContainer>
  );
};

export default SearchHeader;

const SearchHeaderContainer = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 0px 24px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;
