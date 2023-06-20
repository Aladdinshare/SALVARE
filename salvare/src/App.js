import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Footer from './components/Footer';
import NFTPage from './NFTPage';
import HomePage from './HomePage';
import MyPage from './MyPage';

const App = () => {
  return (
    <Router>
      <Container
        component="main"
        maxWidth="sm"
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', height:"100vh" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nft" element={<NFTPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
