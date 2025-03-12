import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import Filters from './Filters';
import { FiLoader } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import { getAllProducts, getCategories } from '../api/storeApi';
import { useToast } from '../context/ToastContext';
import styled from 'styled-components';
import { Container, PageTitle } from '../styles/StyledComponents';

const ProductListContainer = styled.div`
  padding: 2rem 0;
`;

const ProductListContent = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const MainContent = styled.main``;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  
  p {
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  
  svg {
    color: var(--primary-color);
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-color);
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  
  p {
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }
`;

const ProductList = () => {
    const { data: products, loading: productsLoading, error: productsError } = useFetch(getAllProducts);
    const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch(getCategories);
    
    const { showToast } = useToast();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState({
        category: '',
        price: { min: 0, max: 1000 },
        rating: 0
    });
    
    // Show loading errors
    useEffect(() => {
        if (productsError) {
            showToast(productsError, 'error');
        }
        if (categoriesError) {
            showToast(categoriesError, 'error');
        }
    }, [productsError, categoriesError, showToast]);
    
    // Apply filters and search
    useEffect(() => {
        if (!products) return;
        
        let result = [...products];
        
        // Filter by category
        if (activeFilters.category) {
            result = result.filter(product => product.category === activeFilters.category);
        }
        
        // Filter by price
        result = result.filter(product => 
            product.price >= activeFilters.price.min && 
            product.price <= activeFilters.price.max
        );
        
        // Filter by rating
        if (activeFilters.rating > 0) {
            result = result.filter(product => product.rating?.rate >= activeFilters.rating);
        }
        
        // Search by title and description
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(product => 
                product.title.toLowerCase().includes(term) || 
                product.description.toLowerCase().includes(term)
            );
        }
        
        setFilteredProducts(result);
    }, [products, activeFilters, searchTerm]);
    
    const handleFilterChange = useCallback((filters) => {
        setActiveFilters(filters);
    }, []);
    
    const handleSearch = useCallback((term) => {
        setSearchTerm(term);
    }, []);
    
    if (productsLoading || categoriesLoading) {
        return (
            <Container>
                <LoadingContainer>
                    <FiLoader size={40} />
                    <p>Loading products...</p>
                </LoadingContainer>
            </Container>
        );
    }
    
    if (!products || productsError) {
        return (
            <Container>
                <ErrorContainer>
                    <p>Failed to load products. Please try again later.</p>
                    <button 
                        className="btn btn-primary" 
                        onClick={() => window.location.reload()}
                    >
                        Try Again
                    </button>
                </ErrorContainer>
            </Container>
        );
    }
    
    return (
        <Container>
            <ProductListContainer>
                <PageTitle>Product Catalog</PageTitle>
                
                <ProductListContent>
                    <Sidebar>
                        <Filters 
                            categories={categories || []} 
                            onFilterChange={handleFilterChange}
                            onSearch={handleSearch} 
                        />
                    </Sidebar>
                    
                    <MainContent>
                        {filteredProducts.length === 0 ? (
                            <EmptyState>
                                <p>No products found matching your criteria.</p>
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => {
                                        setActiveFilters({
                                            category: '',
                                            price: { min: 0, max: 1000 },
                                            rating: 0
                                        });
                                        setSearchTerm('');
                                    }}
                                >
                                    Reset All Filters
                                </button>
                            </EmptyState>
                        ) : (
                            <ProductGrid>
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </ProductGrid>
                        )}
                    </MainContent>
                </ProductListContent>
            </ProductListContainer>
        </Container>
    );
};

export default ProductList; 