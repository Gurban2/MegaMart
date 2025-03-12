import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiStar, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import useFetch from '../hooks/useFetch';
import { getProductById } from '../api/storeApi';
import styled from 'styled-components';
import { Container, PrimaryButton, OutlineButton } from '../styles/StyledComponents';

const ProductPageWrapper = styled.div`
  padding: 2rem 0;
`;

const BackButton = styled(OutlineButton)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Category = styled.div`
  color: var(--dark-gray);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin: 0.5rem 0;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    color: var(--dark-gray);
  }
`;

const RatingStars = styled.div`
  display: flex;
  color: gold;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0.5rem 0;
`;

const Description = styled.div`
  margin: 1.5rem 0;
  
  h2 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  p {
    line-height: 1.6;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  input {
    width: 60px;
    padding: 0.5rem;
    border: 1px solid var(--medium-gray);
    border-radius: 4px;
    text-align: center;
  }
`;

const AddToCartButton = styled(PrimaryButton)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  
  h2 {
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: var(--error-color);
  }
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 3rem;
`;

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
  const { data: product, loading, error } = useFetch(getProductById, id);
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleAddToCart = () => {
    if (product) {
      addItem({ ...product, quantity });
      showToast(`Product "${product.title}" added to cart`, 'success');
    }
  };
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          <p>Loading product...</p>
        </LoadingContainer>
      </Container>
    );
  }
  
  if (error || !product) {
    return (
      <Container>
        <ErrorMessage>
          <h2>Product not found</h2>
          <p>{error}</p>
          <PrimaryButton onClick={handleGoBack}>
            Go back
          </PrimaryButton>
        </ErrorMessage>
      </Container>
    );
  }
  
  const { title, price, description, image, category, rating } = product;
  
  return (
    <Container>
      <ProductPageWrapper>
        <BackButton onClick={handleGoBack}>
          <FiArrowLeft />
          <span>Back</span>
        </BackButton>
        
        <ProductContent>
          <ImageContainer>
            <ProductImage 
              src={image} 
              alt={title} 
            />
          </ImageContainer>
          
          <ProductInfo>
            <Category>
              {category}
            </Category>
            
            <Title>{title}</Title>
            
            <Rating>
              <RatingStars>
                <FiStar fill={rating?.rate >= 1 ? "gold" : "none"} />
                <FiStar fill={rating?.rate >= 2 ? "gold" : "none"} />
                <FiStar fill={rating?.rate >= 3 ? "gold" : "none"} />
                <FiStar fill={rating?.rate >= 4 ? "gold" : "none"} />
                <FiStar fill={rating?.rate >= 5 ? "gold" : "none"} />
              </RatingStars>
              <span>{rating?.rate} ({rating?.count} reviews)</span>
            </Rating>
            
            <Price>
              ${price.toFixed(2)}
            </Price>
            
            <Description>
              <h2>Description</h2>
              <p>{description}</p>
            </Description>
            
            <Actions>
              <QuantityContainer>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </QuantityContainer>
              
              <AddToCartButton 
                onClick={handleAddToCart} 
              >
                <FiShoppingCart />
                <span>Add to cart</span>
              </AddToCartButton>
            </Actions>
          </ProductInfo>
        </ProductContent>
      </ProductPageWrapper>
    </Container>
  );
};

export default ProductPage; 