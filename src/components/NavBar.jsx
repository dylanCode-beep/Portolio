import React from 'react'
import {Box,Button,Flex, Heading, HStack, IconButton, useDisclosure, Text, Stack, Spacer, Icon} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {FaGithub, FaHamburger, FaLinkedin } from 'react-icons/fa'
import { motion} from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const MotionButton = motion(Button)
const MotionIcon = motion(IconButton)
const MotionText = motion(Text)
export default function  NavBar() {
  const {isOpen, onOpen , onClose} = useDisclosure();
  return (
    <Box px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box fontWeight={'bold'} fontSize={'xl'}>
          Moukoko Nlom E.
        </Box>
        <HStack spacing={8} display={{base:"none", md:"flex"}}>
          <MotionButton whileHover={{scale:1.1,color:"#1A3F80"}} transition={{type:"spring",stiffness:100}}  variant={'ghost'}  _hover={"none"} as="a" href='/'>Accueil</MotionButton>
          <MotionButton whileHover={{scale:1.1,color:"#1A3F80"}} transition={{type:"spring",stiffness:100}}  variant={'ghost'} _hover={"none"} as="a" href='/about'>A propos</MotionButton>
          <MotionButton whileHover={{scale:1.1,color:"#1A3F80"}} transition={{type:"spring",stiffness:100}}  variant={'ghost'} _hover={"none"} as="a" href='/portfolio'>Portfolio</MotionButton>
          <MotionButton whileHover={{scale:1.1,color:"#1A3F80"}} transition={{type:"spring",stiffness:100}}  variant={'ghost'} _hover={"none"} as="a" href='/services'>Mes services</MotionButton>
          <MotionButton whileHover={{scale:1.1,color:"#1A3F80"}} transition={{type:"spring",stiffness:100}}  variant={'ghost'} _hover={"none"} as="a" href='/#contacts'>Contacts Us</MotionButton>
        </HStack>
        <HStack spacing={4} ml={8} display={{base:"none",md:"flex"}}>
        <a href='https://github.com/dylanCode-beep'><FaGithub/></a>
        <a href=''><FaLinkedin/></a>
          <Button ml={6} as={'a'} href='/login' size={'sm'} bg={"#1A3F80"} color={'white'} _hover={'none'} display={{base:"none",md:"flex"}}>Connexion</Button>
        </HStack>
        <IconButton 
        size={'md'} 
        icon={isOpen ? <FiX/> : <FiMenu/>}
        variant={'ghost'}
        aria-label='ouvrir menu' 
        display={{md:"none"}}
        onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ?(
        <Box pb={4} display={{md:"none"}}>
          <Stack as="nav" spacing={4}>
          <Button variant={'ghost'} as="a" href='/'>Accueil</Button>
          <Button variant={'ghos'} as="a" href='/about'>A propos</Button>
          <Button variant={'ghost'} as="a" href='/portfolio'>Portfolio</Button>
          <Button variant={'ghost'} as="a" href='/services'>Mes services</Button>
          <Button variant={'ghost'} as="a" href='/#contacts'>Contacts Us</Button>
          <HStack mt={3} spacing={4} justifyContent={'center'}>
          <a href='https://github.com/dylanCode-beep'><FaGithub/></a>
          <a href=''><FaLinkedin/></a>
        </HStack>
        <Button w={'full'}>Connexion</Button>
        <Button ml={6} as={'a'}  w={'full'} href='/login' size={'sm'} bg={"#1A3F80"} color={'white'} _hover={'none'} display={{base:"none",md:"flex"}}>Connexion</Button>
          </Stack>
        </Box>
      ):null}
    </Box>
  )
}