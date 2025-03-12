import React, { useState, useEffect } from 'react';
import { FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styled from 'styled-components';
import { OutlineButton, Select, Input } from '../styles/StyledComponents';

const FiltersContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

const FiltersHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => props.isOpen ? '1px solid var(--border-color)' : 'none'};
  cursor: pointer;
  user-select: none;
  color: var(--text-color);
`;

const FiltersTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  
  svg {
    color: var(--primary-color);
  }
`;

const FiltersBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FiltersSection = styled.div`
  h4 {
    margin-bottom: 0.75rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-color);
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    color: var(--dark-gray);
  }
`;

const PriceInput = styled(Input)`
  width: 100%;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  input[type="range"] {
    width: 100%;
    accent-color: var(--primary-color);
  }
  
  span {
    font-size: 0.875rem;
    color: var(--text-color);
  }
`;

const ResetButton = styled(OutlineButton)`
  width: 100%;
  margin-top: 1rem;
`;

const Filters = ({ categories, onFilterChange, onSearch }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [rating, setRating] = useState(0);
  
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory,
        price: priceRange,
        rating
      });
    }
  }, [selectedCategory, priceRange, rating, onFilterChange]);
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
  const handlePriceChange = (e) => {
    setPriceRange({
      ...priceRange,
      [e.target.name]: Number(e.target.value)
    });
  };
  
  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };
  
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };
  
  const resetFilters = () => {
    setSelectedCategory('');
    setPriceRange({ min: 0, max: 1000 });
    setRating(0);
  };
  
  return (
    <FiltersContainer>
      <FiltersHeader isOpen={isOpen} onClick={toggleFilters}>
        <FiltersTitle>
          <FiFilter />
          <span>Filters</span>
        </FiltersTitle>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </FiltersHeader>
      
      {isOpen && (
        <FiltersBody>
          <FiltersSection>
            <h4>Category</h4>
            <Select 
              value={selectedCategory} 
              onChange={handleCategoryChange}
            >
              <option value="">All categories</option>
              {categories && categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </FiltersSection>
          
          <FiltersSection>
            <h4>Price</h4>
            <PriceContainer>
              <PriceInput
                type="number"
                name="min"
                placeholder="From"
                value={priceRange.min}
                onChange={handlePriceChange}
                min={0}
              />
              <span>—</span>
              <PriceInput
                type="number"
                name="max"
                placeholder="To"
                value={priceRange.max}
                onChange={handlePriceChange}
                min={priceRange.min}
              />
            </PriceContainer>
          </FiltersSection>
          
          <FiltersSection>
            <h4>Rating</h4>
            <RatingContainer>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={rating}
                onChange={handleRatingChange}
              />
              <span>{rating > 0 ? `${rating} and above` : 'Any'}</span>
            </RatingContainer>
          </FiltersSection>
          
          <ResetButton onClick={resetFilters}>
            Reset filters
          </ResetButton>
        </FiltersBody>
      )}
    </FiltersContainer>
  );
};

export default Filters; 