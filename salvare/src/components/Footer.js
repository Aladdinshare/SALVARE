import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, ArtTrack, Person } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
      >
      <Button component={Link} to="/nft" startIcon={<ArtTrack />}>
        NFT
      </Button>
      <Button component={Link} to="/" startIcon={<Home />}>
        HOME
      </Button>
      <Button component={Link} to="/mypage" startIcon={<Person />}>
        MyPage
      </Button>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} SALVARE
      </Typography>
    </Box>
  );
};

export default Footer;
