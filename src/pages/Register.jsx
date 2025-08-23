import React from 'react'
import {Box,Text, Heading, FormControl, VStack, Button, Flex, HStack, Divider, FormLabel,Input} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';

export default function  register () {
 return (
  <Flex  bgColor={'#FAF3C0'}  minH="100vh" align="center" justify={'center'} px={2}>
     <Box _hover={{shadow:"xl", transform:"scale(1.05)",transition:"0.5s"}} bgColor={'#FAF3C0'} w={'full'} maxW="420px" Shadow={'md'} borderColor={'#FAF3C0'}  boerderWidth="1px" p={8}>
    <VStack spacing={6} align={'stretch'}>
      <Heading size={'lg'} textAlign={'center'}>Inscription</Heading>
      <Text fontSize={'sm'} textAlign={'center'} opacity={0.8}>
        Choisis un reseau social pour creer votre compte
      </Text>
      <VStack spacing={3}>
      <Button bg={'black'} color={'white'} _hover={'none'} width="300px" rightIcon={<FaGoogle color='red'/>}>Continuer avec Google</Button>
      <Button  bg={'blue'} color={'white'} _hover={'none'} width="300px" rightIcon={<FaFacebook/>}>Continuer avec Facebook</Button>
      <Button  bg={'white'} color={'black'} _hover={'none'} width="300px" rightIcon={<FaGithub/>}>Continuer avec Github</Button>
      </VStack>
      <HStack>
        <Divider/>
        <Text fontSize={'sx'} whiteSpace={'nowrap'} opacity={0.7}>
          ou
        </Text>
        <Divider/>
      </HStack>
      <VStack spacing={4}>
        <form>
        <FormControl>
          <FormLabel>Nom d'utilisateur</FormLabel>
          <Input type="type" placeholder="jean stephane"/>
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="jean@exemple.com "/>
        </FormControl>
        <FormControl>
          <FormLabel>Mot de passe</FormLabel>
          <Input type="password"/>
        </FormControl>
        <Button mt={2} width="300px" type='submit' colorScheme='teal'>S'inscrire</Button>
        </form>
      </VStack>
      <Text textAlign={'center'}>Deja un compte? <Link to={'/login'}>Connexion.</Link></Text>
      <Text fontSize={'sm'} textAlign={'center'} opacity={0.7}>
        En continuant, tu acceptes nos {""}
        <Text as="span" textDecoration={'underline'} cursor={'pointer'}>
          Conditions
        </Text> {""}
        et notre {""}
        <Text as="span" textDecoration={'underline'} cursor={'pointer'}>
          Politique de confidentialite
        </Text>
      </Text>
    </VStack>
      </Box>
  </Flex>
 
 );
}