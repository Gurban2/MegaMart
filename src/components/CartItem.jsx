import React from 'react';
import { Link } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CartItemWrapper = styled(motion.div)`
  display: flex;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 1.5rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductTitle = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: 0.5rem;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Price = styled.div`
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    justify-content: space-between;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const QuantityButton = styled(motion.button)`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: var(--light-gray);
  border: none;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--medium-gray);
  }
`;

const QuantityValue = styled.span`
  margin: 0 0.5rem;
  font-weight: 500;
  min-width: 24px;
  text-align: center;
  color: var(--text-color);
`;

const TotalPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-right: 1.5rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const RemoveButton = styled(motion.button)`
  background: none;
  border: none;
  color: var(--dark-gray);
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--error-color);
  }
`;

const cartItemVariants = {
  hidden: { opacity: 0, height: 0, marginBottom: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto', 
    marginBottom: '1rem',
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  exit: { 
    opacity: 0, 
    height: 0, 
    marginBottom: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const { id, title, price, image, quantity } = item;
  
  const handleIncrease = () => {
    updateQuantity(id, quantity + 1);
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeItem(id);
    }
  };
  
  const handleRemove = () => {
    removeItem(id);
  };
  
  return (
    <AnimatePresence>
      <CartItemWrapper
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={cartItemVariants}
        layout
      >
        <ImageContainer>
          <Link to={`/product/${id}`}>
            <ProductImage src={image} alt={title} />
          </Link>
        </ImageContainer>
        
        <Details>
          <ProductTitle to={`/product/${id}`}>
            {title}
          </ProductTitle>
          
          <Price>
            ${price.toFixed(2)}
          </Price>
        </Details>
        
        <Actions>
          <QuantityControl>
            <QuantityButton 
              onClick={handleDecrease} 
              aria-label="Decrease quantity"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <FiMinus />
            </QuantityButton>
            
            <QuantityValue>{quantity}</QuantityValue>
            
            <QuantityButton 
              onClick={handleIncrease} 
              aria-label="Increase quantity"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <FiPlus />
            </QuantityButton>
          </QuantityControl>
          
          <TotalPrice>
            ${(price * quantity).toFixed(2)}
          </TotalPrice>
          
          <RemoveButton 
            onClick={handleRemove} 
            aria-label="Remove item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiTrash size={18} />
          </RemoveButton>
        </Actions>
      </CartItemWrapper>
    </AnimatePresence>
  );
};

export default CartItem; 