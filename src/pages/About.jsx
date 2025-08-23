import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function About(){
 return (
  <Box bgColor={'#FAF3C0'}>
   <NavBar/>
   <Container mt={10} maxW={'4xl'}>
    <VStack spacing={8}textAlign={'center'}>
     <Heading _hover={{textDecoration:"underline"}} as={'h2'} size={'2xl'}>
      Qui suis-je ?
     </Heading>
     <Text fontSize={'lg'} maxW={'2xl'}>
      Salut 🖐, je suis <strong>Moukoko Nlom Dylan</strong>,developpeur fullstack junior
      specialise en <strong>Laravel et React</strong>.
      Titulaire d'un BTS en <strong> gestion des systemes d'information</strong> et actuellement
      etudiant en Licence professionnel Genie Logiciel. Je concois des projets allant des sites e-commerce
      aux applications desktop. Passionne par les technologies modernes, le design et les systemes embarques, 
      je cherche a evoluer dans des envirronnements innovants.
     </Text>
     <VStack spacing={4}>
      <Text fontSize={'md'}>
        Competences: Laravel, ReactJS, React-Ntive, Ionic, Electon, figma, Chakra UI
      </Text>
      <Text fontSize={'md'}>
        Obectifs: Trouver un stage ou une collaboration pour progresser
        et contribuer a des proets ambitieux.
      </Text>
     </VStack>
     <Button 
     colorScheme="teal"
     size={'lg'}
     as={'a'}
     href="/#contacts">Me contacter</Button>
    </VStack>
   </Container>
   <Footer/>
  </Box>
 
 )
}