import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIconSvg } from "../../assets/image/search.svg";
import { ReactComponent as CloseIconSvg } from "../../assets/image/close.svg";
import { Flex } from "../common/Index";

const SearchBar = ({
  width = "100%",
  height = "50px",
  placeholder = "종목 또는 애널리스트를 검색하세요.",
  onSubmit,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(searchTerm);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchBarContainer width={width} height={height}>
        <Flex align="center" gap="12px" style={{ height: "100%" }}>
          <SearchIconSvg width="18" height="18" />
          <SearchInput
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleChange}
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
      </SearchBarContainer>
    </SearchForm>
  );
};

export default SearchBar;

const SearchForm = styled.form`
  width: 100%;
`;

const SearchBarContainer = styled.div`
  padding: 12px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
