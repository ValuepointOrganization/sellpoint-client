import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ results, searchTerm }) => {
  const navigate = useNavigate();

  if (!searchTerm.trim()) {
    return (
      <ResultsContainer>
        <NoResults>검색어를 입력해주세요.</NoResults>
      </ResultsContainer>
    );
  }

  if (!results) {
    return <></>;
  }

  return (
    <ResultsContainer>
      <ResultSection>
        <SectionTitle>종목</SectionTitle>
        {results.STOCK_PROFILE && results.STOCK_PROFILE.length > 0 ? (
          results.STOCK_PROFILE.map((item, index) => (
            <ResultItem
              key={`d-${index}`}
              onClick={() => {
                navigate(`/stock/${item.STOCK_ID}`);
              }}
            >
              <ResultName>{item.STOCK_NAME}</ResultName>
              <ResultDescription>{item.CODE}</ResultDescription>
            </ResultItem>
          ))
        ) : (
          <NoResultsSection>종목 검색 결과가 없습니다.</NoResultsSection>
        )}
      </ResultSection>

      <ResultSection>
        <SectionTitle>애널리스트</SectionTitle>
        {results.ANALYST_PROFILE && results.ANALYST_PROFILE.length > 0 ? (
          results.ANALYST_PROFILE.map((item, index) => (
            <ResultItem
              key={`a-${index}`}
              onClick={() => {
                navigate(`/analyst/${item.ANALYST_ID}`);
              }}
            >
              <ResultName>{item.ANALYST_NAME}</ResultName>
              <ResultDescription>{item.ANALYST_COMPANY}</ResultDescription>
            </ResultItem>
          ))
        ) : (
          <NoResultsSection>애널리스트 검색 결과가 없습니다.</NoResultsSection>
        )}
      </ResultSection>
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

const NoResultsSection = styled.div`
  text-align: center;
  padding: 16px;
  color: #666;
  background: #f5f6f7;
  border-radius: 8px;
`;
