import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: '#d7a022',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 }, color: '#000000' }}>
            Contact us
          </Typography>
          <Typography sx={{ mb: 6, color: '#000000' }}>Please fill out the form below to send us an email.</Typography>

          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission behavior
              // Handle form submission here
            }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', mb: 2 }}>
              <InputBase
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  mb: 2,
                  color: '#000000',
                }}
                placeholder="Your Name"
                required
              />
              <InputBase
                type="email"
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: 3,
                  width: '100%',
                  height: 48,
                  px: 2,
                  color: '#000000',
                }}
                placeholder="Your Email Address"
                required
              />
            </Box>
            <InputBase
              multiline
              rows={4}
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 3,
                width: '100%',
                px: 2,
                mb: 2,
                color: '#000000',
              }}
              placeholder="Your Message"
              required
            />
            <Box>
              <StyledButton disableHoverEffect size="large" type="submit" sx={{ backgroundColor: '#000000', color: '#ffffff' }}>
                Send Message
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter



