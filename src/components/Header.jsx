import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiMoon, FiSun } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import { Container } from '../styles/StyledComponents';

const HeaderWrapper = styled.header`
  background-color: var(--header-bg);
  box-shadow: var(--box-shadow);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  font-family: var(--font-headings);
  letter-spacing: -0.03em;
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-family: var(--font-primary);
  font-weight: 500;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--text-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &.active {
    color: var(--primary-color);
  }
  
  &:hover {
    color: var(--primary-color);
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--secondary-color);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.25rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--light-gray);
  }
`;

const Header = () => {
  const { totalCount } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/">
          MegaMarket
        </Logo>
        
        {location.pathname === '/' && <SearchBar />}
        
        <Nav>
          <ThemeToggle onClick={toggleTheme} title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
          
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/auth">
            <FiUser size={20} />
          </StyledNavLink>
          <StyledNavLink to="/cart">
            <FiShoppingCart size={20} />
            {totalCount > 0 && <CartCount>{totalCount}</CartCount>}
          </StyledNavLink>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header; 