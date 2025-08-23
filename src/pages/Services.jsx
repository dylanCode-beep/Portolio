import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import {Box, Heading, SimpleGrid, Text, VStack,Icon, Button, IconButton} from '@chakra-ui/react'
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaPhone, FaTools } from "react-icons/fa"
import { MdEditNote, MdSchool } from "react-icons/md"


export default function Services(){
 return (
  <Box  bgColor={'#FAF3C0'}>
   <NavBar/>
   <VStack spacing={4} textAlign={'center'} mt={12}>
    <Heading fontSize={'4xl'} color={'gray.800'}>Mes services</Heading>
    <Text fontSize={'lg'} color={'gray.800'} maxW="600px">
     Voici ce que je propose pour aider mes clients a atteindre leurs objectifs.
    </Text>
   </VStack>
   <SimpleGrid mt={4} columns={{base:1, md:3}} spacing={10}>
    <Box bg={'#FAF3C0'} shadow={'md'} rounded={'lg'} p={8} textAlign={'center'} _hover={{shadow:"xl", transform:"scale(1.05)",transition:"0.5s"}}>
     <Icon as={FaLaptopCode} w={12} h={12} color="teal.500" mb={4}/>
     <Heading fontSize={'xl'} mb={2}>Developpement web</Heading>
     <Text color={'gray.800'}>Sites ou Applications web, rapides et responsives adaptes a vos besoins</Text>
     <Button mt={2} colorScheme="teal">Demander un devis</Button>
    </Box>
    <Box bg={'#FAF3C0'} shadow={'md'} rounded={'lg'} p={8} textAlign={'center'} _hover={{shadow:"xl", transform:"scale(1.05)",transition:"0.5s"}}>
     <Icon as={FaMobileAlt} w={12} h={12} color="teal.500" mb={4}/>
     <Heading fontSize={'xl'} mb={2}>Developpement Mobile</Heading>
     <Text color={'gray.800'}>Apps performantes hybrite avec une belle experience utilisateur.</Text>
     <Button mt={2} colorScheme="teal">Demander un devis</Button>
    </Box>
    <Box bg={'#FAF3C0'} shadow={'md'} rounded={'lg'} p={8} textAlign={'center'} _hover={{shadow:"xl", transform:"scale(1.05)",transition:"0.5s"}}>
     <Icon as={FaPaintBrush} w={12} h={12} color="teal.500" mb={4}/>
     <Heading fontSize={'xl'} mb={2}>UX/UI</Heading>
     <Text color={'gray.800'}>Interfaces modernes, simples et esthetiques pour vos projets</Text>
     <Button mt={2} colorScheme="teal">Demander un devis</Button>
    </Box>
    <Box bg={'#FAF3C0'} shadow={'md'} rounded={'lg'} p={8} textAlign={'center'} _hover={{shadow:"xl", transform:"scale(1.05)",transition:"0.5s"}}>
     <Icon as={MdEditNote} w={12} h={12} color="teal.500" mb={4}/>
     <Heading fontSize={'xl'} mb={2}>Digital Writing</Heading>
     <Text color={'gray.800'}>Creation de contenue optimises et captivants pour le web et les reseaux</Text>
     <Button mt={2} colorScheme="teal">Demander un devis</Button>
    </Box>

    <Box bg={'#FAF3C0'} shadow={'md'} rounded={'lg'} p={8} textAlign={'center'} _hover={{shadow:"xl", transform:"scale(1.05)",transition:"0.5s"}}>
     <Icon as={FaTools} w={12} h={12} color="teal.500" mb={4}/>
     <Heading fontSize={'xl'} mb={2}>Maintenace & support technique</Heading>
     <Text color={'gray.800'}>Mises a jour, correction de bugs et support technique pour vos projets</Text>
     <IconButton mt={2} icon={<FaPhone/>} colorScheme="teal"/>
    </Box>

    <Box bg={'#FAF3C0'} shadow={'md'} rounded={'lg'} p={8} textAlign={'center'} _hover={{shadow:"xl", transform:"scale(1.05)",transition:"0.5s"}}>
     <Icon as={MdSchool} w={12} h={12} color="teal.500" mb={4}/>
     <Heading fontSize={'xl'} mb={2}>Formations</Heading>
     <Text color={'gray.800'}>Session de formation et coaching pour developper vos compentances numeriues</Text>
     <Button mt={2} colorScheme="teal">S'inscrire</Button>
    </Box>
   </SimpleGrid>
   <Box textAlign={'center'} mt={16}>
    <Heading fontSize={'2xl'} mb={4}>Pret a collaborer ?</Heading>
    <Button colorScheme="teal" size={'lg'}>Me contacter</Button>
   </Box>
   <Footer/>
  </Box>
 )
}