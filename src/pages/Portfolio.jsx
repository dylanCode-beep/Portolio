import React from "react";
import { Box, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

export default function Portfolio(){
 const projets = [
  {
   titre:"Portfolio",
   image:"/10150008.jpg",
   description:"Mon site portfolio personnel avec React et Chakra UI",
   link:"#"
  },
  {
   titre:"Blog",
   image:"/technologie-communication-icones-symboles-concept.jpg",
   description:"Blog dynamique ave Laravel et React",
   link:"#"
  },
  {
   titre:"E-commerce",
   image:"/2085.jpg",
   description:"Application de vente en ligne React + Laravel",
   link:"#"
  },
  {
   titre:"App Mobile",
   image:"/2034107.jpg",
   description:"Application mobile developper ave React Native",
   link:"#"
  }
 ]
 return (
  <Box  bgColor={'#FAF3C0'}>
   <NavBar/>
   <VStack spacing={4} textAlign={'center'} mt={12}>
    <Heading fontSize={'4xl'} color={'gray.800'}>Mon Portfolio</Heading>
    <Text fontSize={'4xl'} color={'gray.600'} maxW="600px">
     Decouvez mes projets recents en developpement web, mobile et design.
    </Text>
   </VStack>
   <SimpleGrid mt={5} columns={{base:1,md:2,lg:3}} spacing={10}>
    {projets.map((projet,index)=>(
      <Box key={index} bg={'#FAF3C0'} shadow={'md'} overflow={'hidden'}  _hover={{shadow:"xl", transform:"scale(1.05)",transition:"0.5s"}}>
       <Image src={projet.image} alt={projet.titre} w="100%" h="200px" objectFit={'cover'}/>
       <Box p={6}>
        <Heading fontSize={'xl'} mb={2}>{projet.titre}</Heading>
        <Text color={'gray.600'} mb={4}>{projet.description}</Text>
        <Link to={projet.link} color="teal" isExternal>Voir le projets</Link>
       </Box>
      </Box>
    ))}
   </SimpleGrid>
   <Footer/>
  </Box>
 )
}