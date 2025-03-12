import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { submitOrder } from '../api/storeApi';
import styled from 'styled-components';
import { Container, PageTitle } from '../styles/StyledComponents';

// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required field'),
  lastName: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required field'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required field'),
  phone: Yup.string()
    .matches(/^\+?[0-9]{10,15}$/, 'Invalid phone format')
    .required('Required field'),
  address: Yup.string()
    .min(5, 'Minimum 5 characters')
    .required('Required field'),
  city: Yup.string()
    .required('Required field'),
  postalCode: Yup.string()
    .matches(/^[0-9]{5,10}$/, 'Invalid postal code format')
    .required('Required field'),
  paymentMethod: Yup.string()
    .required('Please select a payment method')
});

const CheckoutContainer = styled.div`
  padding: 2rem 0;
`;

const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
  
  h2 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
  }
  
  input, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--input-bg);
    color: var(--text-color);
    
    &:focus {
      border-color: var(--primary-color);
      outline: none;
    }
  }
`;

const FormError = styled.div`
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const RadioGroup = styled.div`
  margin-bottom: 1rem;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  input {
    margin-right: 0.5rem;
  }
  
  label {
    margin-bottom: 0;
    cursor: pointer;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  
  input {
    margin-right: 0.5rem;
    width: auto;
  }
  
  label {
    margin-bottom: 0;
    cursor: pointer;
  }
`;

const OrderSummary = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  
  h2 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
  }
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-right: 1rem;
  }
  
  .details {
    flex: 1;
    
    .title {
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
      color: var(--text-color);
    }
    
    .quantity {
      font-size: 0.75rem;
      color: var(--dark-gray);
    }
  }
  
  .price {
    font-weight: 500;
    color: var(--text-color);
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  color: var(--text-color);
  
  &.total {
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
    color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1.5rem;
  
  &:hover {
    background-color: #303f9f;
  }
  
  &:disabled {
    background-color: var(--medium-gray);
    cursor: not-allowed;
  }
`;

const Checkout = () => {
  const { items, totalAmount, clearCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  if (items.length === 0) {
    // Redirect to cart if no items
    navigate('/cart');
    return null;
  }
  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);
    
    try {
      // Mock API call to submit order
      await submitOrder({
        ...values,
        items,
        total: totalAmount
      });
      
      // Clear cart and show success message
      clearCart();
      showToast('Order successfully placed!', 'success');
      
      // Redirect to home page
      resetForm();
      navigate('/');
    } catch (error) {
      showToast('Failed to place order. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };
  
  return (
    <Container>
      <CheckoutContainer>
        <PageTitle>Checkout</PageTitle>
        
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            postalCode: '',
            paymentMethod: '',
            saveInfo: false
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form>
              <CheckoutGrid>
                <FormContainer>
                  <FormSection>
                    <h2>Contact Information</h2>
                    
                    <FormRow>
                      <FormGroup>
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
                        <ErrorMessage name="firstName" component={FormError} />
                      </FormGroup>
                      
                      <FormGroup>
                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
                        <ErrorMessage name="lastName" component={FormError} />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" placeholder="Enter your email" />
                        <ErrorMessage name="email" component={FormError} />
                      </FormGroup>
                      
                      <FormGroup>
                        <label htmlFor="phone">Phone</label>
                        <Field type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                        <ErrorMessage name="phone" component={FormError} />
                      </FormGroup>
                    </FormRow>
                  </FormSection>
                  
                  <FormSection>
                    <h2>Shipping Address</h2>
                    
                    <FormGroup>
                      <label htmlFor="address">Address</label>
                      <Field type="text" id="address" name="address" placeholder="Enter your address" />
                      <ErrorMessage name="address" component={FormError} />
                    </FormGroup>
                    
                    <FormRow>
                      <FormGroup>
                        <label htmlFor="city">City</label>
                        <Field type="text" id="city" name="city" placeholder="Enter your city" />
                        <ErrorMessage name="city" component={FormError} />
                      </FormGroup>
                      
                      <FormGroup>
                        <label htmlFor="postalCode">Postal Code</label>
                        <Field type="text" id="postalCode" name="postalCode" placeholder="Enter your postal code" />
                        <ErrorMessage name="postalCode" component={FormError} />
                      </FormGroup>
                    </FormRow>
                  </FormSection>
                  
                  <FormSection>
                    <h2>Payment Method</h2>
                    
                    <FormGroup>
                      <RadioGroup>
                        <RadioOption>
                          <Field
                            type="radio"
                            id="card"
                            name="paymentMethod"
                            value="card"
                          />
                          <label htmlFor="card">Credit Card</label>
                        </RadioOption>
                        
                        <RadioOption>
                          <Field
                            type="radio"
                            id="cash"
                            name="paymentMethod"
                            value="cash"
                          />
                          <label htmlFor="cash">Cash on Delivery</label>
                        </RadioOption>
                      </RadioGroup>
                      <ErrorMessage name="paymentMethod" component={FormError} />
                    </FormGroup>
                    
                    <FormGroup>
                      <CheckboxGroup>
                        <Field
                          type="checkbox"
                          id="saveInfo"
                          name="saveInfo"
                        />
                        <label htmlFor="saveInfo">Save information for future orders</label>
                      </CheckboxGroup>
                    </FormGroup>
                  </FormSection>
                </FormContainer>
                
                <OrderSummary>
                  <h2>Order Summary</h2>
                  
                  {items.map(item => (
                    <OrderItem key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <div className="details">
                        <div className="title">{item.title}</div>
                        <div className="quantity">Qty: {item.quantity}</div>
                      </div>
                      <div className="price">${(item.price * item.quantity).toFixed(2)}</div>
                    </OrderItem>
                  ))}
                  
                  <SummaryRow>
                    <span>Subtotal:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </SummaryRow>
                  
                  <SummaryRow>
                    <span>Shipping:</span>
                    <span>Free</span>
                  </SummaryRow>
                  
                  <SummaryRow className="total">
                    <span>Total:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </SummaryRow>
                  
                  <SubmitButton 
                    type="submit" 
                    disabled={!isValid || !dirty || isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                  </SubmitButton>
                </OrderSummary>
              </CheckoutGrid>
            </Form>
          )}
        </Formik>
      </CheckoutContainer>
    </Container>
  );
};

export default Checkout; 