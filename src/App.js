import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';
import BlogEditor from './components/BlogEditor';
import BlogList from './components/BlogList';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider, CssBaseline, Container, Typography, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

const AppContent = () => {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Typography variant="h4" component="h1" align="center">
            Vecros Blog App
          </Typography>
        </Box>
        <ThemeSwitcher />
        <BlogEditor />
        <BlogList />
      </Container>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
