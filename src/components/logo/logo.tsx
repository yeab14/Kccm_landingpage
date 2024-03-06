import React, { FC } from 'react';
import { Box } from '@mui/material';
import logo from './kccm.png';

interface Props {
  onClick?: () => void;
}

const Logo: FC<Props> = ({ onClick }) => {
  return (
    <Box onClick={onClick}>
            <img src={logo.src} alt="Logo" style={{ width: '180px', height: '120px' }} />
    </Box>
  );
};

export default Logo;
