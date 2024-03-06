import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { MentorCardItem } from '@/components/mentor'
import { data } from './mentors.data'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  const iconColor = type === 'next' ? '#d7a022' : '#000000'
  const arrowColor = type === 'next' ? '#000000' : '#d7a022'
  const iconHoverColor = type === 'next' ? '#000000' : '#ffffff'
  const arrowHoverColor = type === 'next' ? '#ffffff' : '#000000'

  return (
    <IconButton
    sx={{
      backgroundColor: '#d7a022',
      color: '#000000',
      '&:hover': { backgroundColor: '#000000', color: '#ffffff' },
      bottom: { xs: '-28px !important', md: '64px !important' },
      left: 'unset !important',
      right: type === 'prev' ? '90px !important' : '30px !important',
      zIndex: 10,
      boxShadow: 1,
    }}
    disableRipple
    color="inherit"
    onClick={onClick}
    className={className}
  >
    {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
  </IconButton>
  )
}

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: '#d7a022',
      },
    },
  },
}))

const HomeOurMentors: FC = () => {
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  const sliderConfig: Settings = {
    infinite: true,
    // autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: '#000000', display: 'inline-block', borderRadius: 4 }} />
    ),
  }

  return (
    <Box
      id="mentors"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: {
          xs: 8,
          md: 12,
        },
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ fontSize: 40, color: '#000000' }}>
          our projects
        </Typography>

        <Slider {...sliderConfig}>
          {data.map((item) => (
            <MentorCardItem key={String(item.id)} item={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  )
}

export default HomeOurMentors

