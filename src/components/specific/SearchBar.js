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
  value,
  onChange,
  onSubmit,
}) => {
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(value);
  };

  const handleClear = () => {
    if (onChange) onChange("");
  };

  return (
    <SearchBarContainer width={width} height={height} onClick={handleClick}>
      <SearchForm onSubmit={handleSubmit}>
        <Flex align="center" gap="12px" style={{ height: "100%" }}>
          <SearchIconSvg width="18" height="18" />
          <SearchInput
            placeholder={placeholder}
            value={value || ""}
            onChange={(e) => onChange && onChange(e.target.value)}
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
