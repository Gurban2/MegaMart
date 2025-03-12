import React from 'react';
import styled from 'styled-components';
import { Container, PageTitle } from '../styles/StyledComponents';

const BlogContainer = styled.div`
  padding: 2rem 0;
`;

const BlogPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BlogPost = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .content {
    padding: 1.5rem;
    
    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--text-color);
    }
    
    p {
      color: var(--dark-gray);
      margin-bottom: 1rem;
      line-height: 1.6;
    }
    
    .date {
      color: var(--dark-gray);
      font-size: 0.875rem;
      display: block;
      margin-bottom: 0.5rem;
    }
    
    .read-more {
      display: inline-block;
      margin-top: 0.5rem;
      color: var(--primary-color);
      font-weight: 500;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Latest Tech Trends in 2023',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: 'May 15, 2023',
      excerpt: 'Discover the latest technology trends that are shaping our future. From AI developments to sustainable tech, we cover it all.',
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Smartphone',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: 'April 28, 2023',
      excerpt: 'With so many options on the market, finding the right smartphone can be overwhelming. Here\'s our guide to making the best choice.',
    },
    {
      id: 3,
      title: 'The Benefits of Online Shopping',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: 'March 12, 2023',
      excerpt: 'Online shopping continues to grow in popularity. We explore the convenience, variety, and benefits of shopping from home.',
    },
    {
      id: 4,
      title: 'Smart Home Devices Worth Investing In',
      image: 'https://images.unsplash.com/photo-1558002038-bb0ac597d258?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: 'February 5, 2023',
      excerpt: 'Transform your living space with these smart home devices that offer convenience, energy savings, and enhanced security.',
    }
  ];
  
  return (
    <Container>
      <BlogContainer>
        <PageTitle>Our Blog</PageTitle>
        
        <p>
          Welcome to the MegaMarket blog, where we share the latest news, tips, and insights about products, technology, and online shopping.
        </p>
        
        <BlogPosts>
          {blogPosts.map(post => (
            <BlogPost key={post.id}>
              <img src={post.image} alt={post.title} />
              <div className="content">
                <span className="date">{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">Read More</a>
              </div>
            </BlogPost>
          ))}
        </BlogPosts>
      </BlogContainer>
    </Container>
  );
};

export default Blog; 