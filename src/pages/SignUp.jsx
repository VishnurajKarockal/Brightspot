import { Box, Button, Image, Input, Link, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_USER } from '../redux/actionTypes';
import { useNavigate } from 'react-router-dom';
import LoginSupport from '../components/LoginSupport';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast(); // Access the useToast hook
  const theme = localStorage.getItem('theme');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    const id = new Date().getTime(); 
    dispatch({type: ADD_USER, payload: { id, name, email, password }});
    setName('');
    setEmail('');
    setPassword('');
    navigate("/login");
    toast({
      title: 'Registration Successful',
      description: "Your account has been created successfully. Please log in.",
      status: 'success',
      duration: 5000, // Set the duration for how long the toast should appear
      isClosable: true,
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" backgroundColor={theme === "dark"? '#212121' : ''}>
      <Box
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        display="flex"
        flexDir="column"
        gap="30px"
        width={{ base: '90%', md: '70%', lg: '30%' }}
        margin="auto"
        padding="30px"
        backgroundColor={theme === "dark"? '#212121' : ''}

      >
        <Box margin="auto" display="flex" flexDir="column" justifyContent="center" gap="10px">
          <Image src="..\src\assets\1700403115chatgpt-logo-transparent.png" width="10%" margin="auto" />
          <Text textAlign="center" padding="30px" fontSize="2rem" color={theme === "dark"?'white':''}>
            Create an Account
          </Text>
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} color={theme === "dark"?'white':''}/>
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} color={theme === "dark"?'white':''}/>
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} color={theme === "dark"?'white':''}/>
          <Button backgroundColor="#10a37f" onClick={handleContinue}>
            Continue
          </Button>
          <Text textAlign="center" color={theme === "dark"?'white':''}>
            Already have an account? <Link color="#10a37f" href='/login'>Login</Link>
          </Text>
        </Box>
        <Box margin="auto" display="flex" alignItems="center" flexDir="column" gap="10px">
          <Text color={theme === "dark"?'white':''}>-----------------------OR------------------------</Text>
        </Box>
        <LoginSupport />
        <Text color="#10a37f" textAlign="center">
          Terms of use | Privacy Policy
        </Text>
      </Box>
      
    </Box>
  );
};

export default SignUp;
