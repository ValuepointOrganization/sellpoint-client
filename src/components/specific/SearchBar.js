import React from "react";
import styled from "styled-components";
import SearchIconSvg from "../../assets/image/search.svg";
import CloseIconSvg from "../../assets/image/close.svg";

const SearchBar = ({
  width = "100%",
  height = "50px",
  placeholder = "종목 또는 애널리스트를 검색하세요.",
}) => {
  return (
    <SearchBarContainer width={width} height={height}>
      <SearchIcon src={SearchIconSvg} alt="Search" />
      <SearchInput placeholder={placeholder} />
      <ClearIcon src={CloseIconSvg} alt="Clear" />
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  align-items: center;
  align-self: stretch;
  border-radius: 24px;
  background: #f5f6f7;
  backdrop-filter: blur(50px);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  font-size: 16px;
`;

const SearchIcon = styled.img`
  margin-right: 12px;
  width: 18px;
  height: 18px;
`;

const ClearIcon = styled.img`
  margin-left: 12px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
