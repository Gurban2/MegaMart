import React from 'react';
import styled from 'styled-components';
import { Container, PageTitle } from '../styles/StyledComponents';
import { FiSearch, FiShoppingCart, FiCreditCard, FiTruck } from 'react-icons/fi';

const HowToOrderContainer = styled.div`
  padding: 2rem 0;
`;

const StepsContainer = styled.div`
  margin: 3rem 0;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  color: white;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const StepContent = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--dark-gray);
    line-height: 1.7;
    margin-bottom: 1rem;
  }
  
  ul {
    color: var(--text-color);
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const FAQSection = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 2rem;
  margin-top: 3rem;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--dark-gray);
    line-height: 1.6;
  }
`;

const HowToOrder = () => {
  return (
    <Container>
      <HowToOrderContainer>
        <PageTitle>How to Place an Order</PageTitle>
        
        <p>
          Ordering from MegaMarket is simple and convenient. Follow these easy steps to make your purchase:
        </p>
        
        <StepsContainer>
          <Step>
            <StepIcon>
              <FiSearch />
            </StepIcon>
            <StepContent>
              <h2>Step 1: Find Your Products</h2>
              <p>
                Start by browsing our extensive catalog or use the search function to find specific items. You can also use filters to narrow down your options by category, price range, or customer ratings.
              </p>
              <ul>
                <li>Browse categories from the main menu</li>
                <li>Use the search bar at the top of the page</li>
                <li>Apply filters to refine your results</li>
                <li>Click on any product to view its details</li>
              </ul>
            </StepContent>
          </Step>
          
          <Step>
            <StepIcon>
              <FiShoppingCart />
            </StepIcon>
            <StepContent>
              <h2>Step 2: Add Items to Cart</h2>
              <p>
                When you find an item you'd like to purchase, simply click the "Add to Cart" button. You can adjust the quantity before adding or directly from your cart later.
              </p>
              <ul>
                <li>Click "Add to Cart" on the product page</li>
                <li>A confirmation will appear, and the item will be added to your cart</li>
                <li>Continue shopping or proceed to checkout</li>
                <li>View your cart anytime by clicking the cart icon in the top navigation</li>
              </ul>
            </StepContent>
          </Step>
          
          <Step>
            <StepIcon>
              <FiCreditCard />
            </StepIcon>
            <StepContent>
              <h2>Step 3: Checkout and Payment</h2>
              <p>
                When you're ready to complete your purchase, proceed to checkout. You'll need to provide your shipping information and select a payment method.
              </p>
              <ul>
                <li>Click "Checkout" in your shopping cart</li>
                <li>Enter your shipping address or select a saved address</li>
                <li>Choose your preferred delivery option</li>
                <li>Select a payment method (credit card, PayPal, etc.)</li>
                <li>Review your order details before confirming</li>
              </ul>
            </StepContent>
          </Step>
          
          <Step>
            <StepIcon>
              <FiTruck />
            </StepIcon>
            <StepContent>
              <h2>Step 4: Order Confirmation and Tracking</h2>
              <p>
                After placing your order, you'll receive an order confirmation email with all the details. Once your order ships, you'll get another email with tracking information.
              </p>
              <ul>
                <li>Check your email for order confirmation</li>
                <li>Use your order number for any inquiries</li>
                <li>Track your package using the provided tracking number</li>
                <li>View your order history in your account dashboard</li>
              </ul>
            </StepContent>
          </Step>
        </StepsContainer>
        
        <FAQSection>
          <h2>Frequently Asked Questions</h2>
          
          <FAQItem>
            <h3>Do I need to create an account to place an order?</h3>
            <p>
              While you can check out as a guest, creating an account offers several benefits, including faster checkout in the future, order tracking, and access to your purchase history.
            </p>
          </FAQItem>
          
          <FAQItem>
            <h3>Can I modify my order after placing it?</h3>
            <p>
              Orders can sometimes be modified if they haven't been processed yet. Please contact our customer service team as soon as possible with your order number if you need to make changes.
            </p>
          </FAQItem>
          
          <FAQItem>
            <h3>What payment methods do you accept?</h3>
            <p>
              We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. For certain regions, we also offer cash on delivery.
            </p>
          </FAQItem>
          
          <FAQItem>
            <h3>How can I get help with placing an order?</h3>
            <p>
              Our customer service team is available to assist you with any questions or concerns. You can reach us via live chat, email, or phone during business hours.
            </p>
          </FAQItem>
        </FAQSection>
      </HowToOrderContainer>
    </Container>
  );
};

export default HowToOrder; 