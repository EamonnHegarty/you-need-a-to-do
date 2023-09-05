import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material/';
import { customTheme } from './theme/cutsomTheme';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Register } from './pages/register/Register';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

const App: FC = (): ReactElement => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Router>
          <AppRouter />
        </Router>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
};

export default App;
