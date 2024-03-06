import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/purposeblack.png',
    name: 'Purpose Black Ethiopia',
    category: '',
    description:
      'PurposeBlack is a brand new initiative launched in May 2020 by a group of more than 130 black experts. PurposeBlack, as the name suggests, aims to economically address some of the most pressing issues confronting Black people worldwide. The first model of this global initiative is being prepared for launch in Ethiopia. We are convinced that the new approach represents an excellent opportunity for Ethiopia and Africa to be at the center of a massive international enterprise that will benefit millions of Africans. ',
   
  },
  {
    id: 2,
    photo: '/images/mentors/kegebrew.jpg',
    name: 'Kegebrew.com',
    category: '',
    description:
      'Kegeberew is the largest E-commerce platform in Africa headquartered in Addis Ababa, Ethiopia.Kegebrew E-commerce revolutionizes the way we shop, offering convenience, choice, and accessibility at our fingertips. With a vast array of products and services available online, customers can browse, compare, and purchase from the comfort of their homes. E-commerce not only enhances the shopping experience but also opens up new avenues for businesses to reach global markets and thrive in the digital age',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/kapsgold.jpg',
    name: 'Kegebrew Agriculture Product Sourcing',
    category: '',
    description:
      'KAPS enables direct connection between farmers and consumers without any third party intervention. the system ensures flexible and real time authentic product information captured from farmers and displayed on marketplace. Farmers can use this platform to post their products directly to wide range of consumers with their preferred price and quantity. The system has a capablity to detect the location and capture videos and images to make sure the products are legit before being available on the marketplace..',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/kegebrewuniv.png',
    name: 'Kegebrew University',
    category: '',
    description:
      'E-learning has become a cornerstone of modern education, offering flexible and accessible learning opportunities for students worldwide. At Kegebrew University, we embrace the power of e-learning to provide innovative and engaging educational experiences. Through our online platform, students can access high-quality courses, collaborate with peers, and interact with experienced instructors from anywhere in the world. With e-learning at Kegebrew University, we are empowering individuals to pursue their academic goals on their own terms, making education more accessible and inclusive than ever before.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
]
