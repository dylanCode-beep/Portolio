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
       🖐 Je suis un dévellopeur fullstack junior passionné par la création d'application web et
      mobiles modernes. Curieux et polyvalent, j'aime concevoir des solutions qui allient
      performances, design et expérience utilisateur.
      Mon parcours m'a permis d'acquerir des solides compétences en developpement backend avec Laravel
      et en frontend avec React.js. J'explore également le monde des systèmes 
      embarqués et de l'IoT, ce qui nourrit ma vision d'un numerique connecté et innovant.
     </Text>
     <Text fontSize={'lg'} maxW={'2xl'}>
     Motivé par l'envie d'apprendre et de reléver de nouveaux defis, je
     m'investis dans des projets variés, allant d'application e-commerce a des solutions
     Saas, et en passant par le developpement mobile et la gestion des bases de donnees
     </Text>
     <Text fontSize={'lg'} maxW={'2xl'}>
      Mon objectif est simple: Transformer les idées en solutions technologiques concrètes qui apportent de la valeur aux utilisateurs
      et aux entreprises
     </Text>
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