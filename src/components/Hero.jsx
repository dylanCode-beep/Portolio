import React from 'react'
import {Avatar, Box,Flex,Heading,Image,Text} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionText = motion(Text)
const MotionHeading = motion(Heading)
const MotionAvatar = motion(Avatar)

export default function Hero() {
  return (
    <Flex 
    id='a propos'
    direction={{base:"column",md:"row"}}
    align={'center'}
    justify={'space-between'}
    px={{base:6,md:20}}
    py={{base:12,md:20}}
    gap={10}
    ><Box>
       <MotionText 
        color={'#1A3F80'}
        transition={{duration:1,ease:"easeOut"}}
        initial={{opacity:0,x:20}}
       whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        >Bonjour, je m'appelle Moukoko Nlom Dylan
        </MotionText>

        <MotionHeading  
        transition={{duration:1.3,ease:"easeOut"}}
        initial={{opacity:0,x:20}}
       whileInView={{opacity:1,x:0}}
        viewport={{once:true}}>
         Developpeur
         </MotionHeading>

        <MotionHeading 
        color={"#1A3F80"}
        transition={{duration:1.4,ease:"easeOut"}}
        initial={{opacity:0,x:20}}
       whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        >Full Stack junior
        </MotionHeading> 

        <MotionText
         transition={{duration:1.5,ease:"easeOut"}}
         initial={{opacity:0,x:20}}
        whileInView={{opacity:1,x:0}}
         viewport={{once:true}}
        >Jeune étudiant camerounais,
        titulaire d’un BTS en gestion des systèmes d’information. Passionné du numérique, je 
        developpe et je conçois de solutions applicatives robustes, fiables et sécurisée qui 
        repondent aux exigeneces exacte du client.
        </MotionText>
      </Box>
      <Box>
       <MotionAvatar
        whileHover={{y:-5, boxShadow:"0px 8px 15px rgba(0,0,0,0.2)"}} 
        whileTap={{y:0,boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}
        transition={{type:"spring",stiffness:300}}
       src='IMG_1847.JPG'
       borderRadius={'full'}
       boxSize={{base:"200px",md:"300px"}}
       objectFit={'cover'}
       />
      </Box>
    </Flex>
  )
}