import { React } from "react";
import { styled } from "styled-components";
import SearchBar from "../specific/SearchBar";
import ChevronBack from "../../assets/image/ChevronBack.svg";
import FilterIcon from "../../assets/image/FilterIcon.svg";
const SearchHedaer = () => {
  return (
    <SearchHeaderContainer>
      <img src={ChevronBack} alt="BackBtn" />
      <SearchBar width="275px" height="50px" placeholder="애널리스트" />
      <img src={FilterIcon} alt="FilterBtn" />
    </SearchHeaderContainer>
  );
};

export default SearchHedaer;

const SearchHeaderContainer = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
  gap: 16px;
`;
