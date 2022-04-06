import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/LoginPage/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RegisterPage from './pages/RegisterPage/RegisterPage';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root'),
);
