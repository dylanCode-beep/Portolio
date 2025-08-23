import React from "react";
import { Box, IconButton, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";


export default function WhatsappBulle(){
 const whatsappNumber = "+237 696197279";
 return (
  <Box position={'fixed'} bottom="4" right="4" zIndex="overlay">
   <Popover placement="top">
    <PopoverTrigger>
    <IconButton
    icon={<FaWhatsapp/>}
    colorScheme="teal"
    fontSize={'6xl'}
    size={'xl'}
    borderRadius={'full'}
    aria-label="contact whatsapp"
    _hover={{transform:"scale(1.1)"}}
    transition="0.2s"/>

    </PopoverTrigger>
    <PopoverContent w="200px">
     <PopoverArrow/>
     <PopoverBody textAlign={'center'}>
      <Text mt={2}>
       <a href={`htpps://wa.me/$(whatsappNumber.replace(/[^0-9]/g),"")`} target="_blank" rel="noopener noreferrer">
       {whatsappNumber}
       </a>
      </Text>
     </PopoverBody>
    </PopoverContent>
   </Popover>
  </Box>
 )
}