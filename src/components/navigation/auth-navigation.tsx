import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { StyledButton } from '@/components/styled-button';

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button': { borderColor: '#d7a022', '&:hover': { borderColor: '#000000' }, '&:first-of-type': { marginRight: 2 }, '& button:nth-of-type(2)': { color: '#000000', borderColor: '#d7a022' } } }}>
      <StyledButton disableHoverEffect={true} variant="outlined">
        Sign In
      </StyledButton>
      <StyledButton disableHoverEffect={true} sx={{ color: 'white', backgroundColor: '#d7a022', '&:hover': { backgroundColor: '#000000' } }}>
        Sign Up
      </StyledButton>
    </Box>
  );
};

export default AuthNavigation;


