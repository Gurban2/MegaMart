import React from 'react';
import styled from 'styled-components';
import { Container, PageTitle } from '../styles/StyledComponents';
import { FiMapPin, FiClock, FiBriefcase, FiDollarSign } from 'react-icons/fi';

const CareersContainer = styled.div`
  padding: 2rem 0;
`;

const Intro = styled.div`
  margin-bottom: 3rem;
  
  p {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`;

const JobList = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const JobCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  
  h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--dark-gray);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const JobDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const JobDetail = styled.div`
  display: flex;
  align-items: center;
  color: var(--dark-gray);
  
  svg {
    margin-right: 0.5rem;
    color: var(--primary-color);
  }
`;

const ApplyButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #303f9f;
    color: white;
  }
`;

const Benefits = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 2rem;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
  
  ul {
    color: var(--text-color);
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
    }
  }
`;

const Careers = () => {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$70,000 - $90,000',
      description: 'We are seeking a skilled Frontend Developer to join our team. The ideal candidate will have strong experience with React, JavaScript, HTML, and CSS. You will be responsible for building engaging user interfaces for our e-commerce platform.'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      description: 'MegaMarket is looking for a talented UX/UI Designer to create beautiful, intuitive interfaces for our websites and applications. The ideal candidate will have a strong portfolio demonstrating user-centered design principles and experience with design tools like Figma or Sketch.'
    },
    {
      id: 3,
      title: 'Customer Service Representative',
      location: 'Chicago, IL',
      type: 'Part-time',
      salary: '$18 - $22 per hour',
      description: 'Join our customer service team and help provide exceptional support to our customers. You will be handling inquiries via phone, email, and chat, helping customers with orders, returns, and product information.'
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Miami, FL',
      type: 'Full-time',
      salary: '$55,000 - $70,000',
      description: 'We\'re seeking a Digital Marketing Specialist to develop and implement marketing strategies across various digital channels. The ideal candidate will have experience with SEO, SEM, social media marketing, and email campaigns.'
    }
  ];
  
  return (
    <Container>
      <CareersContainer>
        <PageTitle>Careers at MegaMarket</PageTitle>
        
        <Intro>
          <p>
            Join our team of passionate professionals committed to creating the best online shopping experience. At MegaMarket, we're constantly growing and looking for talented individuals to help us shape the future of e-commerce.
          </p>
          <p>
            We offer a dynamic work environment, competitive benefits, and plenty of opportunities for professional growth and development.
          </p>
        </Intro>
        
        <h2>Current Openings</h2>
        
        <JobList>
          {jobs.map(job => (
            <JobCard key={job.id}>
              <h2>{job.title}</h2>
              <JobDetails>
                <JobDetail>
                  <FiMapPin />
                  <span>{job.location}</span>
                </JobDetail>
                <JobDetail>
                  <FiClock />
                  <span>{job.type}</span>
                </JobDetail>
                <JobDetail>
                  <FiDollarSign />
                  <span>{job.salary}</span>
                </JobDetail>
              </JobDetails>
              <p>{job.description}</p>
              <ApplyButton href="#">Apply Now</ApplyButton>
            </JobCard>
          ))}
        </JobList>
        
        <Benefits>
          <h2>Why Work With Us</h2>
          <ul>
            <li>Competitive salary and comprehensive benefits package</li>
            <li>Flexible work hours and remote work options</li>
            <li>Professional development opportunities</li>
            <li>Employee discount on all products</li>
            <li>Collaborative and innovative work environment</li>
            <li>Regular team building activities and events</li>
            <li>Opportunities for career advancement</li>
          </ul>
        </Benefits>
      </CareersContainer>
    </Container>
  );
};

export default Careers; 