import React from 'react';
import styled from 'styled-components';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { 
  Container, 
  PageTitle, 
  FormContainer, 
  Form, 
  FormGroup, 
  Input, 
  Label, 
  TextArea,
  SubmitButton,
  ErrorText 
} from '../styles/StyledComponents';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactContainer = styled.div`
  padding: 2rem 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 2rem;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  svg {
    color: var(--primary-color);
    font-size: 1.25rem;
    margin-right: 1rem;
    margin-top: 0.25rem;
  }
  
  div {
    h3 {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.25rem;
      color: var(--text-color);
    }
    
    p {
      color: var(--dark-gray);
      line-height: 1.5;
    }
  }
`;

const Map = styled.div`
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
  height: 250px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  subject: Yup.string()
    .min(5, 'Too short')
    .max(100, 'Too long')
    .required('Required'),
  message: Yup.string()
    .min(10, 'Too short')
    .required('Required')
});

const Contact = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Here you would typically send the form data to your backend
    console.log('Form values:', values);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };
  
  return (
    <Container>
      <ContactContainer>
        <PageTitle>Contact Us</PageTitle>
        
        <ContactGrid>
          <ContactInfo>
            <h2>Get in Touch</h2>
            
            <InfoItem>
              <FiMapPin />
              <div>
                <h3>Address</h3>
                <p>123 Main Street<br />New York, NY 10001<br />United States</p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <FiPhone />
              <div>
                <h3>Phone</h3>
                <p>+1 (123) 456-7890<br />+1 (987) 654-3210</p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <FiMail />
              <div>
                <h3>Email</h3>
                <p>info@megamarket.com<br />support@megamarket.com</p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <FiClock />
              <div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
              </div>
            </InfoItem>
            
            <Map>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215826249159!2d-73.9962802!3d40.7498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647043487247!5m2!1sen!2sus" 
                allowFullScreen="" 
                loading="lazy"
                title="MegaMarket location"
              />
            </Map>
          </ContactInfo>
          
          <FormContainer>
            <h2>Send Us a Message</h2>
            
            <Formik
              initialValues={{ name: '', email: '', subject: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <FormGroup>
                    <Label htmlFor="name">Your Name</Label>
                    <Field as={Input} type="text" name="name" id="name" placeholder="Enter your name" />
                    <ErrorMessage name="name" component={ErrorText} />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <Field as={Input} type="email" name="email" id="email" placeholder="Enter your email" />
                    <ErrorMessage name="email" component={ErrorText} />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="subject">Subject</Label>
                    <Field as={Input} type="text" name="subject" id="subject" placeholder="Enter message subject" />
                    <ErrorMessage name="subject" component={ErrorText} />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="message">Message</Label>
                    <Field as={TextArea} name="message" id="message" rows="5" placeholder="Enter your message" />
                    <ErrorMessage name="message" component={ErrorText} />
                  </FormGroup>
                  
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </SubmitButton>
                </Form>
              )}
            </Formik>
          </FormContainer>
        </ContactGrid>
      </ContactContainer>
    </Container>
  );
};

export default Contact; 