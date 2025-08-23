import React from "react";
import { motion } from "framer-motion";
import { HStack,Box, Text, Icon } from "@chakra-ui/react";
import { FaCss3, FaDatabase, FaFigma, FaJava, FaLaravel, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaC, FaHtml5, FaPhp } from "react-icons/fa6";
import { SiJavascript, SiTypescript } from "react-icons/si";

const MotionHStatck = motion(HStack)
const MotionText  = motion(Text)
const comp = [FaReact,FaLaravel,FaJava,FaHtml5,FaNodeJs,FaFigma,FaPython,FaPhp,FaC,FaDatabase,FaCss3,SiJavascript,SiTypescript]

export default function Skills(){
 return (
  <Box
  textAlign="center"
  overflow={'hidden'}
  >
   <MotionText
    fontSize={'4xl'} 
    fontWeight={'bold'} 
    mb={8}
    initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:1.6,ease:"easeOut"}}
    >
    Compétences
   </MotionText>
   <MotionHStatck
   spacing={12}
   width={'max-content'}
   animate={{x:["0%","-50%"]}}
   transition={{repeat:Infinity,duration:20,ease:"linear"}}>
    {comp.concat(comp).map((SkillIcon, index)=>(
     <Icon fontSize={'3xl'} as={SkillIcon} key={index} w={16} color={'black'}/>
    ))}
   </MotionHStatck>
  </Box>
 )
}