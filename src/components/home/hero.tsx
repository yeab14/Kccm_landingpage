import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as ScrollLink } from 'react-scroll';
import Button, { ButtonProps } from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';

interface Exp {
  label: string;
  value: string;
}

interface ExpItemProps {
  item: Exp;
}

const exps: Array<Exp> = [
  {
    label: '',
    value: '',
  },
  {
    label: '',
    value: '',
  },
  {
    label: '',
    value: '',
  },
];

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: '#000000', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="#000000" variant="h5">
        {label}
      </Typography>
    </Box>
  );
};

const HomeHero: FC = () => {
  return (
    <Box id="hero" sx={{ position: 'relative', pt: 4, pb: { xs: 8, md: 10 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 24, md: 56 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: '#d7a022',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: '#fff',
                    }}
                  >
                    Introducing{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      
                    </Box>
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      color: '#d7a022',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    Kegebrew{' '}
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#60a018"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#60a018"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                          />
                          <path
                          fill="#60a018"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br />
                  Consumers Credit Management System
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: '#000000', lineHeight: 1.6 }}>
                  {
                    "Unleash Your Financial Potential, Your Premier Companion for Seamlessly Navigating the Intricacies of Finance with Unwavering Confidence and Ease."
                  }
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={350}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: '#d7a022',
                      color: '#ffffff', // Changed text color to white
                      '&:hover': {
                        backgroundColor: '#000000', // Changed background color on hover to black
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </ScrollLink>
                <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<LockIcon />}
                    sx={{
                      color: '#000000',
                      borderColor: '#d7a022',
                      '&:hover': {
                        borderColor: '#000000', // Changed border color on hover to black
                      },
                    }}
                  >
                    Login
                  </Button>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                bottom: 30,
                left: { xs: 0, md: -150 },
                boxShadow: 1,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: '#fff', 
                display: 'flex',
                alignItems: 'flex-start',
                width: 280,
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}
              >
                <Image src="/images/certificate.png" alt="Certificate icon" width={50} height={50} quality={97} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ color: '#d7a022', fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }} // Changed text color here
                >
                  Note 
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#000000', lineHeight: 1.3 }}> {/* Changed text color here */}
                Streamline Your Finances with Our Consumer Credit Management System
                </Typography>
              </Box>
            </Box>
            <Box sx={{ lineHeight: 0 }}>
              <Image src="/images/home-hero.jpg" width={775} height={787} alt="Hero img" />
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );   
};

export default HomeHero;






