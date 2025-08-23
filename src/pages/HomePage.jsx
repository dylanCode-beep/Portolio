import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import {Box} from '@chakra-ui/react'


export default function HomePage() {
  return (
    <Box bgColor={'#FAF3C0'}> 
      <NavBar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </Box>
  )
}