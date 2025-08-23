import React from 'react'
import {Box,Button,Flex, Heading, HStack, IconButton, Text, VStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion} from 'framer-motion'

const MotionButton = motion(Button)
const MotionIcon = motion(IconButton)
const MotionText = motion(Text)
export default function  NavBar() {
  return (
  <Flex
  direction={{base:"column",md:"row"}}
  as={'nav'}
  align={'center'}
  justify={'space-between'}
  padding="1rem 2rem"
  >
    <Box>
      <MotionText
       fontSize="xl" 
       fontWeight="bold"
       transition={{duration:1,ease:"easeOut"}}
       initial={{opacity:0,x:20}}
      whileInView={{opacity:1,x:0}}
       viewport={{once:true}}
       >M.Dylan</MotionText>
    </Box>

    <HStack  spacing={8}>
     <MotionButton  whileHover={{y:-5, boxShadow:"0px 8px 15px rgba(0,0,0,0.2)"}} whileTap={{y:0,boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}transition={{type:"spring",stiffness:300}} variant={'ghost'} as="a" href='/' _hover={{color:"#1A3F80"}}>Accueil</MotionButton>
     <MotionButton  whileHover={{y:-5, boxShadow:"0px 8px 15px rgba(0,0,0,0.2)"}} whileTap={{y:0,boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}transition={{type:"spring",stiffness:300}} variant={'ghost'} as="a" href='/about' _hover={{color:"#1A3F80"}}>A propos</MotionButton>
     <MotionButton  whileHover={{y:-5, boxShadow:"0px 8px 15px rgba(0,0,0,0.2)"}} whileTap={{y:0,boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}transition={{type:"spring",stiffness:300}} variant={'ghost'} as="a" href='/portfolio' _hover={{color:"#1A3F80"}}>Portfolio</MotionButton>
     <MotionButton  whileHover={{y:-5, boxShadow:"0px 8px 15px rgba(0,0,0,0.2)"}} whileTap={{y:0,boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}transition={{type:"spring",stiffness:300}} variant={'ghost'} as="a" href='#contacts' _hover={{color:"#1A3F80"}}>Contacts Us</MotionButton>
     <MotionButton  whileHover={{y:-5, boxShadow:"0px 8px 15px rgba(0,0,0,0.2)"}} whileTap={{y:0,boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}transition={{type:"spring",stiffness:300}} variant={'ghost'} as="a" href='/services' _hover={{color:"#1A3F80"}}>Mes services</MotionButton>
    </HStack>
    <HStack spacing={4}>
        <MotionIcon
      as={Link}
      href="https://www.facebook.com/profile.php?id=100000000000000"
      aria-label='Github'
      icon={<FaGithub/>}
      variant={'ghost'}
      whileHover={{y:-5, boxShadow:"0px 8px 15px rgba(0,0,0,0.2)"}} 
      whileTap={{y:0,boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}
      transition={{type:"spring",stiffness:300}}
      />
        <MotionIcon
      as={Link}
      href="https://www.facebook.com/profile.php?id=100000000000000"
      aria-label='Linkedin'
      icon={<FaLinkedin/>}
      variant={'ghost'}
      colorScheme={'blue'}
      whileHover={{y:-5, boxShadow:"0px 8px 15px rgba(0,0,0,0.2)"}} 
      whileTap={{y:0,boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}
      transition={{type:"spring",stiffness:300}}
      />
      <MotionButton 
       as={'a'}
        href="/login"
        bgColor={'#1A3F80'} 
       size={'sm'} 
       _hover={'none'}
       color={'white'}
       whileHover={{y:-5, boxShadow:"0px 8px 15px rgba(0,0,0,0.2)"}} 
       whileTap={{y:0,boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}
       transition={{type:"spring",stiffness:300}}
       >Connexion</MotionButton>
    </HStack>
  </Flex>
  )
}