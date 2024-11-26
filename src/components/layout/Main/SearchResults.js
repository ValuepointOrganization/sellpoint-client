import React from "react";
import styled from "styled-components";

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <NoResults>검색 결과가 없습니다.</NoResults>;
  }

  return (
    <ResultsContainer>
      {results.map((result, index) => (
        <ResultItem key={index}>
          <ResultType>{result.type}</ResultType>
          <ResultName>{result.name}</ResultName>
          <ResultDescription>{result.description}</ResultDescription>
        </ResultItem>
      ))}
    </ResultsContainer>
  );
};

export default SearchResults;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

const ResultItem = styled.div`
  padding: 16px;
  background: #f5f6f7;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background: #e9eaeb;
  }
`;

const ResultType = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
`;

const ResultName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const ResultDescription = styled.div`
  font-size: 14px;
  color: #444;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 32px;
  color: #666;
`;
