import React from "react";
import { motion } from "framer-motion";
import { Box, FormControl, FormLabel, Input, Text, Textarea, VStack,Button } from "@chakra-ui/react";

const MotionBox = motion(Box)
const MotionButton = motion(Button)

export default function Contacts(){
 return (
  <Box id="contacts" py={16} px={{base:6,md:20}} scrollMarginTop={'80px'}>
   <MotionBox
   initial={{opacity:0,y:20}}
   whileInView={{opacity:1,y:0}}
   viewport={{once:true}}
   transition={{duration:0.8}}
   textAlign={'center'}
   mb={6}>
    <Text fontSize={{base:"3xl", md:"4xl"}} fontWeight={'bold'}>
     Contacts
    </Text>
    <Text fontSize={{base:"md",md:"lg"

    }} color={'gray.600'} mt={2}>
     N'hesite pas a me laisser un message, je te repondrait rapidement
    </Text>
   </MotionBox>
   <MotionBox 
   initial={{opacity:0,y:50}}
   whileInView={{opacity:1,y:0}}
   viewport={{once:true}}
   transition={{duration:0.8, delay:0.2}}
   maxW="600px"
   mx={'auto'}>
    <VStack spacing={4}>
     <FormControl>
      <FormLabel>Nom</FormLabel>
      <Input placeholder="jean stephane"/>
     </FormControl>

     <FormControl>
      <FormLabel>Email</FormLabel>
      <Input placeholder="jean@exemple.com" type="email"/>
     </FormControl>

     <FormControl>
      <FormLabel>Message</FormLabel>
      <Textarea placeholder="Ton message" rows={6}/>
     </FormControl>

     <MotionButton
     bgColor='#1A3F80'
     color={'white'}
     _hover={'none'}
     size="lg"
     w="full"
     whileHover={{y:-3,boxShadow:"0px 6px 12px rgba('0,0,0,0.15')"}}
     whileTap={{y:0}}
     transition={{type:"spring", stiffness:300}}
     >
      Envoyer
     </MotionButton>
    </VStack>
   </MotionBox>
  </Box>
 )
}