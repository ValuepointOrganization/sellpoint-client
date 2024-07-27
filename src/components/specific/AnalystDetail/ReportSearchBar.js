import { React } from "react";
import { styled } from "styled-components";

import SearchBar from "../SearchBar";
import FilterIcon from "../../../assets/image/FilterIcon.svg";

const ReportSearchBar = () => {
  return (
    <Wrapper>
      <SearchBar width="313px" placeholder="종목을 검색하세요." />
      <IconButton>
        <img src={FilterIcon} alt="FilterBtn" />
      </IconButton>
    </Wrapper>
  );
};

export default ReportSearchBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
