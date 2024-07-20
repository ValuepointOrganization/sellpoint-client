import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "../specific/SearchBar";
import ChevronBack from "../../assets/image/ChevronBack.svg";
import FilterIcon from "../../assets/image/FilterIcon.svg";

const SearchHeader = () => {
  const navigate = useNavigate();

  return (
    <SearchHeaderContainer>
      <IconButton
        onClick={() => navigate(-1)}
      >
        <img src={ChevronBack} alt="BackBtn" />
      </IconButton>
      <SearchBar width="275px" height="50px" placeholder="애널리스트" />
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
