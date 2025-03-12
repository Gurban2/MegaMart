import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import styled from 'styled-components';
import { Container, PrimaryButton, OutlineButton } from '../styles/StyledComponents';

const CartWrapper = styled.div`
  padding: 2rem 0;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  
  svg {
    color: var(--dark-gray);
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--dark-gray);
    margin-bottom: 1.5rem;
  }
`;

const CartHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h1 {
    font-size: 1.75rem;
    color: var(--text-color);
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const ClearButton = styled(OutlineButton)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CartItems = styled.div`
  margin-bottom: 2rem;
`;

const CartSummary = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  max-width: 400px;
  margin-left: auto;
  
  @media (max-width: 768px) {
    max-width: none;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  color: var(--text-color);
`;

const TotalRow = styled(SummaryRow)`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  color: var(--primary-color);
`;

const CheckoutButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem;
`;

const Cart = () => {
  const { items, totalAmount, clearCart } = useCart();
  
  if (items.length === 0) {
    return (
      <Container>
        <CartWrapper>
          <EmptyCart>
            <FiShoppingBag size={64} />
            <h2>Your cart is empty</h2>
            <p>Add some products to make an order</p>
            <PrimaryButton as={Link} to="/">
              Continue shopping
            </PrimaryButton>
          </EmptyCart>
        </CartWrapper>
      </Container>
    );
  }
  
  return (
    <Container>
      <CartWrapper>
        <CartHeading>
          <h1>Cart</h1>
          <ClearButton onClick={clearCart}>
            <FiTrash2 />
            <span>Clear cart</span>
          </ClearButton>
        </CartHeading>
        
        <CartItems>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartItems>
        
        <CartSummary>
          <SummaryRow>
            <span>Number of items:</span>
            <span>{items.reduce((acc, item) => acc + item.quantity, 0)}</span>
          </SummaryRow>
          
          <TotalRow>
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </TotalRow>
          
          <CheckoutButton as={Link} to="/checkout">
            Checkout
          </CheckoutButton>
        </CartSummary>
      </CartWrapper>
    </Container>
  );
};

export default Cart; 