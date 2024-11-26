import React from "react";
import styled from "styled-components";

const SearchResults = ({ results }) => {
  if (!results || (!results.d && !results.a)) {
    return <NoResults>검색 결과가 없습니다.</NoResults>;
  }

  return (
    <ResultsContainer>
      {results.d && results.d.length > 0 && (
        <ResultSection>
          <SectionTitle>종목</SectionTitle>
          {results.d.map((item, index) => (
            <ResultItem key={`d-${index}`}>
              <ResultName>{item.STOCK_NAME}</ResultName>
              <ResultDescription>{item.STOCK_CODE}</ResultDescription>
            </ResultItem>
          ))}
        </ResultSection>
      )}

      {results.a && results.a.length > 0 && (
        <ResultSection>
          <SectionTitle>애널리스트</SectionTitle>
          {results.a.map((item, index) => (
            <ResultItem key={`a-${index}`}>
              <ResultName>{item.ANALYST_NAME}</ResultName>
              <ResultDescription>{item.COMPANY_NAME}</ResultDescription>
            </ResultItem>
          ))}
        </ResultSection>
      )}
    </ResultsContainer>
  );
};

export default SearchResults;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 0;
`;

const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  padding: 0 4px;
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

const ResultName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const ResultDescription = styled.div`
  font-size: 14px;
  color: #666;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 32px;
  color: #666;
`;
