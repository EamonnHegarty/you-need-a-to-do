import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material/';
import { customTheme } from './theme/cutsomTheme';
import { Dashboard } from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      {/* EVENTUALLY SHOULD LAND ON LOGIN PAGE OR POSSIBLY CREATE A LANDING PAGE */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
};

export default App;
