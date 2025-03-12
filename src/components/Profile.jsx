import React from 'react';
import { Container, PageTitle } from '../styles/StyledComponents';
import styled from 'styled-components';
import { FiUser, FiPackage, FiHeart, FiSettings } from 'react-icons/fi';

const ProfileContainer = styled.div`
  padding: 2rem 0;
`;

const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 0.5rem;
  
  a {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    border-radius: 4px;
    color: var(--text-color);
    text-decoration: none;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: var(--light-gray);
    }
    
    &.active {
      background-color: var(--primary-color);
      color: white;
    }
    
    svg {
      margin-right: 0.5rem;
    }
  }
`;

const ContentSection = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  
  p {
    color: var(--text-color);
    margin-bottom: 1rem;
  }
`;

const Profile = () => {
  return (
    <Container>
      <ProfileContainer>
        <PageTitle>Profile</PageTitle>
        
        <ProfileContent>
          <Sidebar>
            <SidebarMenu>
              <MenuItem>
                <a href="#" className="active">
                  <FiUser />
                  Personal Info
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#">
                  <FiPackage />
                  My Orders
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#">
                  <FiHeart />
                  Wishlist
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#">
                  <FiSettings />
                  Settings
                </a>
              </MenuItem>
            </SidebarMenu>
          </Sidebar>
          
          <ContentSection>
            <h2>Welcome to your profile</h2>
            <p>
              Profile functionality will be available after implementing authentication.
              Here you will be able to manage your orders, wishlist, and personal information.
            </p>
            <p>
              Please sign in or create an account to access all features.
            </p>
          </ContentSection>
        </ProfileContent>
      </ProfileContainer>
    </Container>
  );
};

export default Profile; 