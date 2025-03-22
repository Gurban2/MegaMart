import React, { useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { 
  InputBase, 
  IconButton, 
  Paper, 
  Box,
  alpha,
  useTheme
} from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };
  
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400 }}>
      <Paper
        elevation={0}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          border: `1px solid ${alpha(theme.palette.text.primary, 0.23)}`,
          borderRadius: theme.shape.borderRadius,
          transition: 'all 0.3s',
          '&:hover': {
            borderColor: theme.palette.primary.main,
          },
          '&:focus-within': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`
          }
        }}
      >
        <InputBase
          sx={{ 
            ml: 1,
            flex: 1,
            '& .MuiInputBase-input': {
              py: 1
            }
          }}
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          inputProps={{ 'aria-label': 'search products' }}
        />
        <IconButton 
          type="submit" 
          sx={{ 
            p: '10px',
            color: theme.palette.primary.main,
            '&:hover': {
              color: theme.palette.secondary.main,
              backgroundColor: 'transparent'
            } 
          }} 
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar; 