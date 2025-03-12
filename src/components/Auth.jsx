import React, { useState } from 'react';
import { 
  Container, 
  FormContainer, 
  Form, 
  FormTitle, 
  FormGroup, 
  Input, 
  Label, 
  SubmitButton,
  ErrorText,
  OutlineButton,
  FormRow
} from '../styles/StyledComponents';
import styled from 'styled-components';

const AuthContainer = styled.div`
  padding: 3rem 0;
`;

const AuthTabs = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const AuthTab = styled.button`
  flex: 1;
  padding: 0.75rem;
  background-color: ${props => props.active ? 'white' : 'var(--light-gray)'};
  border: none;
  border-bottom: ${props => props.active ? '2px solid var(--primary-color)' : 'none'};
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--dark-gray)'};
  font-weight: ${props => props.active ? '500' : 'normal'};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? 'white' : '#e9e9e9'};
  }
  
  &:first-child {
    border-top-left-radius: 8px;
  }
  
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const ForgotPassword = styled.a`
  color: var(--primary-color);
  text-align: right;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-decoration: none;
  display: block;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (activeTab === 'register') {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here we would normally call an API to log in or register
      console.log('Form submitted:', formData);
      alert(`${activeTab === 'login' ? 'Login' : 'Registration'} successful!`);
    }
  };
  
  return (
    <Container>
      <AuthContainer>
        <FormContainer>
          <AuthTabs>
            <AuthTab 
              active={activeTab === 'login'} 
              onClick={() => setActiveTab('login')}
            >
              Login
            </AuthTab>
            <AuthTab 
              active={activeTab === 'register'} 
              onClick={() => setActiveTab('register')}
            >
              Register
            </AuthTab>
          </AuthTabs>
          
          <Form onSubmit={handleSubmit}>
            <FormTitle>
              {activeTab === 'login' ? 'Sign In to Your Account' : 'Create a New Account'}
            </FormTitle>
            
            {activeTab === 'register' && (
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.name && <ErrorText>{errors.name}</ErrorText>}
              </FormGroup>
            )}
            
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </FormGroup>
            
            {activeTab === 'register' && (
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
              </FormGroup>
            )}
            
            {activeTab === 'login' && (
              <ForgotPassword href="#">Forgot password?</ForgotPassword>
            )}
            
            <SubmitButton type="submit">
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </SubmitButton>
          </Form>
        </FormContainer>
      </AuthContainer>
    </Container>
  );
};

export default Auth; 