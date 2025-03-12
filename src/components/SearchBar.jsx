import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 3rem;
  border: 1px solid var(--medium-gray);
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s;
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.2);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };
  
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton type="submit">
        <FiSearch size={18} />
      </SearchButton>
    </SearchForm>
  );
};

export default SearchBar; 