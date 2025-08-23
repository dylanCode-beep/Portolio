import { Box, Container, Divider, HStack, IconButton, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer(){
 return (
  <Box bg={'#1A202C'} color={'#F7FAFC'} mt={20}>
   <Container as={Stack} maxW="6xl" py={10}>
    <SimpleGrid columns={{base:1,sm:2,md:4}} spacing={4} textAlign={{base:"center",md:"left"}}>
     <Stack spacing={4}>
      <Text fontSize="xl" fontWeight={'bold'}>
       M.Dylan
      </Text>
      <Text fontSize="sm" fontWeight={'bold'}>
       Contruisons ensembles des experiences digitales modernes.
      </Text>
     </Stack>
     <Stack align={{base:"center",md:"flex-start"}}>
      <Text fontWeight="600" mt={2}>Liens Rapides</Text>
      <Link to="/">Accueil</Link>
      <Link to="/">A propos</Link>
      <Link to="/">Portofolio</Link>
      <Link to="/">Contacts</Link>
      <Link to="/">Services</Link>
     </Stack>
     <Stack align={{base:"center",md:"flex-start"}}>
      <Text fontWeight="600" mb={2}>Ressources</Text>
      <Link to="/">Blog</Link>
      <Link to="/">FAQ</Link>
      <Link to="/">Support</Link>
      <Link to="/">Confidentialite</Link>
     </Stack>

     <Stack align={{base:"center",md:"flex-start"}}>
      <Text fontWeight="600" mb={2}>Suivez-Moi</Text>
      <HStack spacing={4}>
       <IconButton
       as={'a'}
       size={'lg'}
       to="#"
       aria-label="github"
       icon={<FaGithub  color='#F7FAFC'/>}
       variant={'ghost'}
       _hover={{color:"blue.600"}}/>

      <IconButton
       as={'a'}
       size={'lg'}
       to="#"
       aria-label="Linkedin"
       icon={<FaLinkedin color='#F7FAFC'/>}
       variant={'ghost'}
       _hover={{color:"blue.600"}}/>

       <IconButton
       as={'a'}
       size={'lg'}
       to="#"
       aria-label="whatsapp"
       icon={<FaWhatsapp  color='#F7FAFC'/>}
       variant={'ghost'}
       _hover={{color:"blue.600"}}/>
      </HStack>
     </Stack>
    </SimpleGrid>
    <Divider my={6} borderColor={'gray.300'}/>
    <Text fontSize={'sm'} textAlign={'center'}>
     {new Date().getFullYear()} M.Dylan. Tous droits reserves.
    </Text>
   </Container>
  </Box>
 );
}