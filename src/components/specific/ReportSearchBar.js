import React from "react";
import styled from "styled-components";
import { Flex } from "../common/Index";
import SearchBar from "./SearchBar";
import { ReactComponent as FilterIcon } from "../../assets/image/FilterIcon.svg";

const ReportSearchBar = ({ placeholder = "종목을 검색하세요." }) => {
  return (
    <Flex gap="20px" alignItems="center">
      <SearchBar width="313px" placeholder={placeholder} />
      <IconButton>
        <FilterIcon />
      </IconButton>
    </Flex>
  );
};

export default ReportSearchBar;

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
