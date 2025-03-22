import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Star, StarBorder, ShoppingCart } from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Box, 
  IconButton, 
  Rating as MuiRating,
  CardActionArea,
  useTheme
} from '@mui/material';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 20,
      duration: 0.4 
    }
  },
  hover: { 
    y: -5,
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 15 
    }
  }
};

const MotionCard = motion(Card);

const ProductCard = ({ product, index }) => {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const theme = useTheme();
  
  const { id, title, price, image, rating } = product;
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product);
    showToast(`Product "${title}" added to cart`, 'success');
  };
  
  return (
    <MotionCard
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.3 }}
      custom={index}
      elevation={2}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: theme.transitions.create(['box-shadow'], {
          duration: theme.transitions.duration.standard,
        }),
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <CardActionArea 
        component={RouterLink} 
        to={`/product/${id}`}
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          '& .MuiCardActionArea-focusHighlight': {
            opacity: 0
          }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ 
            objectFit: 'contain',
            p: 2,
            backgroundColor: theme.palette.background.paper
          }}
        />
        
        <CardContent sx={{ 
          width: '100%',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Typography 
            variant="h6" 
            component="h3"
            sx={{
              fontWeight: 500,
              fontSize: '1rem',
              mb: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              height: '2.4em',
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant="h5" 
            component="div"
            sx={{ 
              fontWeight: 700, 
              color: 'primary.main',
              my: 1
            }}
          >
            ${price.toFixed(2)}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center', 
            mt: 'auto',
            width: '100%'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <MuiRating 
                value={rating?.rate || 0} 
                precision={0.1} 
                readOnly 
                size="small"
              />
              <Typography variant="body2" color="text.secondary">
                {rating?.rate}
              </Typography>
            </Box>
            
            <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
              <IconButton 
                onClick={handleAddToCart} 
                aria-label="Add to cart"
                color="primary"
                size="small"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  width: 32,
                  height: 32,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <ShoppingCart fontSize="small" />
              </IconButton>
            </motion.div>
          </Box>
        </CardContent>
      </CardActionArea>
    </MotionCard>
  );
};

export default ProductCard; 