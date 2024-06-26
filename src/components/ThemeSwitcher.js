import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { Box, Switch, Typography } from '@mui/material';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Typography variant="body1">Dark Mode</Typography>
      <Switch
        checked={darkMode}
        onChange={handleChange}
        color="default"
        sx={{ ml: 1 }}
      />
    </Box>
  );
};

export default ThemeSwitcher;
