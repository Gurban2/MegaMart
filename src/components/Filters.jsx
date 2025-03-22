import React, { useState, useEffect } from 'react';
import { 
  FilterAlt, 
  ExpandMore, 
  ExpandLess 
} from '@mui/icons-material';
import {
  Paper,
  Typography,
  Box,
  IconButton,
  Collapse,
  Divider,
  MenuItem,
  Select as MuiSelect,
  FormControl,
  InputLabel,
  TextField,
  Slider,
  Button,
  useTheme
} from '@mui/material';

const Filters = ({ categories, onFilterChange, onSearch }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [rating, setRating] = useState(0);
  const theme = useTheme();
  
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory,
        price: priceRange,
        rating
      });
    }
  }, [selectedCategory, priceRange, rating, onFilterChange]);
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
  const handlePriceChange = (e) => {
    setPriceRange({
      ...priceRange,
      [e.target.name]: Number(e.target.value)
    });
  };
  
  const handleRatingChange = (e, newValue) => {
    setRating(newValue);
  };
  
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };
  
  const resetFilters = () => {
    setSelectedCategory('');
    setPriceRange({ min: 0, max: 1000 });
    setRating(0);
  };
  
  return (
    <Paper 
      elevation={1} 
      sx={{ 
        borderRadius: 2, 
        overflow: 'hidden',
        mb: 3
      }}
    >
      <Box 
        sx={{ 
          p: 2, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          cursor: 'pointer',
          borderBottom: isOpen ? 1 : 0,
          borderColor: 'divider'
        }}
        onClick={toggleFilters}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterAlt color="primary" />
          <Typography variant="subtitle1" fontWeight={500}>
            Filters
          </Typography>
        </Box>
        {isOpen ? <ExpandLess color="action" /> : <ExpandMore color="action" />}
      </Box>
      
      <Collapse in={isOpen}>
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
              Category
            </Typography>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel id="category-select-label">Category</InputLabel>
              <MuiSelect
                labelId="category-select-label"
                value={selectedCategory}
                onChange={handleCategoryChange}
                label="Category"
              >
                <MenuItem value="">All categories</MenuItem>
                {categories && categories.map(category => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </MuiSelect>
            </FormControl>
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
              Price
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TextField
                type="number"
                name="min"
                label="From"
                value={priceRange.min}
                onChange={handlePriceChange}
                inputProps={{ min: 0 }}
                size="small"
                variant="outlined"
                fullWidth
              />
              <Box sx={{ color: 'text.secondary' }}>—</Box>
              <TextField
                type="number"
                name="max"
                label="To"
                value={priceRange.max}
                onChange={handlePriceChange}
                inputProps={{ min: priceRange.min }}
                size="small"
                variant="outlined"
                fullWidth
              />
            </Box>
          </Box>
          
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
              Rating
            </Typography>
            <Box sx={{ px: 1 }}>
              <Slider
                min={0}
                max={5}
                step={0.5}
                value={rating}
                onChange={handleRatingChange}
                valueLabelDisplay="auto"
                aria-labelledby="rating-slider"
              />
              <Typography variant="body2" color="text.secondary">
                {rating > 0 ? `${rating} and above` : 'Any'}
              </Typography>
            </Box>
          </Box>
          
          <Button 
            variant="outlined" 
            onClick={resetFilters}
            fullWidth
            sx={{ mt: 1 }}
          >
            Reset filters
          </Button>
        </Box>
      </Collapse>
    </Paper>
  );
};

export default Filters; 