import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './feature.data'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    width: '100%', // Adjust width to reach full
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const HomeFeature: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#fff', color: '#000000' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/home-feature.png" width={650} height={678} quality={97} alt="Feature img" />
              <Box
                sx={{
                  position: 'absolute',
                  top: -36,
                  right: { xs: 0, md: -36 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 1.4,
                  zIndex: 1,
                  backgroundColor: '#ffffff',
                  width: 190,
                }}
              >
                <Typography variant="h5" sx={{ mb: 1, color: '#000000' }}>
                  Our Qualities:
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Security
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={100} order={1} /> {/* Value set to 100 */}
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Transparency
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={100} order={2} /> {/* Value set to 100 */}
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Automation
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={100} order={3} /> {/* Value set to 100 */}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
                color: '#000000'
              }}
            >
              About{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: '#d7a022',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Us <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {/* <img src="/images/headline-curve.svg" alt="Headline curve" /> */}
                </Box>
              </Typography>
            
            </Typography>

            <Typography sx={{ color: '#000000', mb: 2, ml: { xs: 0, md: 4 } }}>
            We are KCCM, a trailblazing force in consumers credit management, with a steadfast commmitment to empowering individuals and businesses, we combine cutting-edge technology with a passion for financial literacy to deliver personalized solutions tailored to your needs. At KCCM, we believe in transparency, integrity, and client satisfaction, guiding you towards a brighter financial future with confidence and clarity.
          
            </Typography>

            <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center', backgroundColor: '#ffffff' }}>
                    <Box
                      sx={{
                        mr: 1,
                        backgroundColor: '#d7a022',
                        borderRadius: '50%',
                        height: 36,
                        width: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000000',
                        '& svg': {
                          fontSize: 20,
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: '#d7a022' }}>
                        {title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.4, color: '#000000' }} variant="subtitle1">
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature

