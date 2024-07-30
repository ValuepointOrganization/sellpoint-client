import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIconSvg } from "../../assets/image/search.svg";
import { ReactComponent as CloseIconSvg } from "../../assets/image/close.svg";
import { Flex } from "../common/Index";

const SearchBar = ({
  width = "100%",
  height = "50px",
  placeholder = "종목 또는 애널리스트를 검색하세요.",
  onClick,
}) => {
  React.useEffect(() => {
    console.log("SearchBar mounted");
    return () => console.log("SearchBar unmounted");
  }, []);

  const handleClick = (e) => {
    console.log("SearchBar clicked");
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <SearchBarContainer width={width} height={height} onClick={handleClick}>
      <Flex align="center" gap="12px" style={{ height: "100%" }}>
        <SearchIconSvg width="18" height="18" />
        <SearchInput placeholder={placeholder} />
        <CloseIconSvg width="18" height="18" style={{ cursor: "pointer" }} />
      </Flex>
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

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  flex: 1;
  font-size: 16px;
`;
