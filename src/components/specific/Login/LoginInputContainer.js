import React from "react";
import styled from "styled-components";

const SearchForm = ({ runSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      runSearch(searchTerm);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="search-input">Search Term:</StyledLabel>
      <StyledInput
        id="search-input"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter search term"
      />
      <StyledButton type="submit">Search!</StyledButton>
    </StyledForm>
  );
};

export default SearchForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
