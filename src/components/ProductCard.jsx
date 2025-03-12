import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { addToCartAnimation } from '../styles/animations';

const CardWrapper = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  display: block;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 1rem;
  background-color: var(--card-bg);
`;

const ProductContent = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 2.4em;
`;

const ProductPrice = styled.div`
  font-family: var(--font-headings);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0.5rem 0;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  
  span {
    margin-left: 0.25rem;
    color: var(--dark-gray);
  }
`;

const RatingStars = styled.div`
  display: flex;
  color: gold;
`;

const AddToCartButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #303f9f;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 20,
      duration: 0.4 
    }
  },
  hover: { 
    y: -5,
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 15 
    }
  }
};

const ProductCard = ({ product, index }) => {
  const { addItem } = useCart();
  const { showToast } = useToast();
  
  const { id, title, price, image, rating } = product;
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product);
    showToast(`Product "${title}" added to cart`, 'success');
  };
  
  return (
    <CardWrapper
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.3 }}
      custom={index}
      layout
    >
      <CardLink to={`/product/${id}`}>
        <ProductImage 
          src={image} 
          alt={title} 
          loading="lazy" 
        />
        
        <ProductContent>
          <ProductTitle>{title}</ProductTitle>
          
          <ProductPrice>
            ${price.toFixed(2)}
          </ProductPrice>
          
          <ActionsContainer>
            <Rating>
              <RatingStars>
                <FiStar fill={rating?.rate >= 1 ? "gold" : "none"} />
                <FiStar fill={rating?.rate >= 2 ? "gold" : "none"} />
                <FiStar fill={rating?.rate >= 3 ? "gold" : "none"} />
                <FiStar fill={rating?.rate >= 4 ? "gold" : "none"} />
                <FiStar fill={rating?.rate >= 5 ? "gold" : "none"} />
              </RatingStars>
              <span>{rating?.rate}</span>
            </Rating>
            
            <AddToCartButton 
              onClick={handleAddToCart} 
              aria-label="Add to cart"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <FiShoppingCart />
            </AddToCartButton>
          </ActionsContainer>
        </ProductContent>
      </CardLink>
    </CardWrapper>
  );
};

export default ProductCard; 