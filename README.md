# MegaMarket - E-commerce Store

Modern e-commerce project built with React and Vite, featuring a clean design, responsive interface, and comprehensive shopping functionality.

## Technologies

- React 18
- Vite
- React Router v6
- Styled Components
- React Icons
- Framer Motion for animations
- Formik + Yup for form validation
- Context API for state management
- FakeStoreAPI for product data

## Features

- Product catalog with filtering by category, price, and rating
- Product search by name
- Shopping cart with add/remove functionality
- Detailed product pages
- Checkout process with form validation
- Dark/Light theme toggle
- Responsive design with mobile support
- Smooth page transitions and micro-interactions
- Custom typography with Google Fonts
- Custom styled scrollbars
- Multiple information pages (About, Contact, Blog, etc.)

## Installation and Setup

1. Clone the repository
```
git clone <repository-url>
cd megamarket
```

2. Install dependencies
```
npm install
```

3. Run in development mode
```
npm run dev
```

4. Build for production
```
npm run build
```

## Project Structure

```
/src
  ├── api          # API services for external data
  ├── components   # React components
  ├── context      # Context API for state management
  ├── hooks        # Custom React hooks
  ├── pages        # Page components
  ├── styles       # Styles, animations, and styled-components
  ├── utils        # Utility functions
  └── App.jsx      # Main application component
```

## Key Features Implemented

### UI/UX Enhancements
- **Theme Toggle**: Switch between light and dark themes
- **Animations**: Page transitions, hover effects, and micro-interactions
- **Typography**: Custom fonts and improved readability
- **Responsive Design**: Optimized for all screen sizes

### Functionality
- **Product Catalog**: Browse and filter products
- **Shopping Cart**: Add, remove, and manage products
- **User Authentication**: Sign in/sign up functionality
- **Checkout Process**: Multi-step checkout flow
- **Information Pages**: About, Contact, Blog, Careers, How to Order, etc.

### Technical Improvements
- **Context API**: For state management across components
- **Styled Components**: For component-specific styling
- **CSS Variables**: For theme consistency
- **Performance Optimization**: Lazy loading and code splitting

## Future Development

- User profile management
- Product reviews and ratings
- Payment integration
- Order history
- Wishlist functionality
- Product comparisons 