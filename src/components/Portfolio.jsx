import React from "react";
import { motion } from "framer-motion";
import { Text,Box, SimpleGrid, Image, Heading } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import { BsDisplay } from "react-icons/bs";

const MotionText = motion(Text)
const MotionBox = motion(Box)
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
  description:"Blog dynamique avec Laravel et React",
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
export default function Portfolio(){
 return (
  <Box
  py={12}
  px={{base:6,md:20}}
  >
   <MotionText 
   fontSize={{base:"3xl", md:"4xl"}}
   fontWeight={'bold'}
   mb={4}
   textAlign={'center'}
   initial={{opacity:0,y:20}}
   as={motion.div}
   whileInView={{opacity:1,y:0}}
   viewport={{once:true}}
   transition={{duration:1}}
>Projets</MotionText>   

<MotionText 
   fontSize={{base:"md", md:"lg"}}
   mb={4}
   color={'gray.600'}
   textAlign={'center'}
   initial={{opacity:0,y:20}}
   as={motion.div}
   whileInView={{opacity:1,y:0}}
   viewport={{once:true}}
   transition={{duration:1}}
>Voici quelques uns de mes projets reçents que j'ai réalisé en developpement web et mobile</MotionText>   

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
  </Box>
 )
}