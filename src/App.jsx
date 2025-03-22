import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { Box, Container, CircularProgress } from '@mui/material';
import './styles/App.scss';

// Lazy loading components
const ProductList = lazy(() => import('./components/ProductList'));
const ProductPage = lazy(() => import('./components/ProductPage'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const Auth = lazy(() => import('./components/Auth'));
const Profile = lazy(() => import('./components/Profile'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const HowToOrder = lazy(() => import('./pages/HowToOrder'));
const Payment = lazy(() => import('./pages/Payment'));
const Delivery = lazy(() => import('./pages/Delivery'));

// Loading Fallback
const LoadingFallback = () => (
  <Box 
    sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '60vh'
    }}
  >
    <CircularProgress />
  </Box>
);

// Компонент для обертывания маршрутов с AnimatePresence
const AnimatedRoutes = () => {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingFallback />}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/how-to-order" element={<HowToOrder />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/delivery" element={<Delivery />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
};

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    minHeight: '100vh'
                }}>
                    <Toast />
                    <Header />
                    <Box 
                        component="main" 
                        sx={{ 
                            flexGrow: 1, 
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Container 
                            maxWidth="lg" 
                            sx={{ 
                                py: 3, 
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <AnimatedRoutes />
                        </Container>
                    </Box>
                    <Footer />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App; 