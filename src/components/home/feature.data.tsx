import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Experience Our Finance, Tech, Customer Service Skills',
    description: 'Benefit from our teams extensive experiance in finance, technology and customer service. ',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Empower Your Financial Future with Confidence and Clarity',
    description: 'Gain confidence and clarity in your financial decisions as we guide you toward a brighter financial future.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Innovate with Us: Stay Ahead in Finance',
    description: 'Benefit from our commitment to continous innovation , ensuring you to stay ahead in an ever-evolving financial landscape.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Your Seamless Journey: Trust, Transparency, Satisfaction',
    description: 'Trust in our commitment to transparency, integrity, and client satisfaction for a seemless experiance.',
    icon: <ContactSupportIcon />,
  },
]
