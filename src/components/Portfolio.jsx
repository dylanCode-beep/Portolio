import React from "react";
import { motion } from "framer-motion";
import { Text,Box, SimpleGrid, Image, HStack,Button, VStack } from "@chakra-ui/react";
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
>Voici quelques uns de mes projets recents que j'ai réalisé en developpement web et mobile</MotionText>   

<HStack overflowX="auto" px={2} py={4} css={{"&::-webkit-scollbar":{display:"none"}}} spacing={3} p={5}>

 {projets.map((projets,index)=>(
  <MotionBox
 key={index}
 borderRadius={'md'}
 overflow={'hidden'}
 shadow={'md'}
 whileHover={{y:-6,boxShadow:"0px 10px 20px rgba(0,0,0,0.2)"}}
  initial={{opacity:0,y:50}}
  transition={{type:"spring",stiffness:300}}
  whileInView={{opacity:1,y:0}}
  viewport={{once:true}}>
    <Image
   src={projets.image}
   alt={projets.titre}
   objectFit={'cover'}
   w="100%"
   h={{base:"180px",md:"200px"}}/>
   <VStack align={'start'} spacing={3} p={5}>
    <Text fontSize={'sm'} fontWeight={'bold'}>
     {projets.titre}
    </Text>
    <Text fontSize={'sm'} fontWeight={'bold'}>
     {projets.description}
    </Text>
    <Button
    variant="link"
    href={projets.link}
    colorScheme="teal"
    size="sm"
    whileHover={{y:-3, boxShadow:"0px 6px 12px rgba('0,0,0,0.15')"}}
    as={motion.button}
    >
    Voir le projet
    </Button>
   </VStack>
  </MotionBox>
 ))}
</HStack>
  </Box>
 )
}