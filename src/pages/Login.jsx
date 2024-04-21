import { Box, Button, Image, Input, Link, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../redux/actionTypes';
import LoginSupport from '../components/LoginSupport';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast(); // Access the useToast hook
  const users = useSelector((state) => state.users);
  const theme = localStorage.getItem('theme');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the email and password match with any user's credentials
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('name', user.name);
      // Dispatch the LOGIN action
      dispatch({ type: LOGIN });
      console.log("inside user Login", user)
      // Save login status to localStorage
      localStorage.setItem('loginStatus', true);
      // Show toast for successful login
      navigate("/")
      toast({
        title: 'Login Successful',
        description: 'Welcome back!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
    } else {
      // Show toast for invalid credentials
      toast({
        title: 'Invalid Credentials',
        description: 'Please check your email and password.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box backgroundColor={theme === "dark"? '#212121' : ''} display='flex' justifyContent='center' alignItems='center' minHeight='100vh' >
      <Box backgroundColor={theme === "dark"? '#212121' : ''} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' display='flex' flexDir='column' gap='30px' width={{ base:'90%', md:'70%', lg:'30%' }} margin='auto' padding='30px' >
        <Box margin='auto' display='flex' flexDir='column' justifyContent='center' gap='10px'>
          <Image src='..\src\assets\1700403115chatgpt-logo-transparent.png' width='10%' margin='auto' />
          <Text textAlign='center' padding='30px' fontSize='2rem' color={theme === "dark"?'white':''}>Welcome Back</Text>
          <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} color={theme === "dark"?'white':''} />
          <Input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} color={theme === "dark"?'white':''}/>
          <Button backgroundColor='#10a37f' onClick={handleLogin}>Login</Button>
          <Text textAlign='center'color={theme === "dark"?'white':''}>Don't have an account? <Link color='#10a37f' href='/signup'>Sign Up</Link></Text>
        </Box>
        <Box margin='auto' display='flex' alignItems='center' flexDir='column' gap='10px' color={theme === "dark"?'white':''}>
          <Text>-----------------------OR------------------------</Text>
        </Box>
        <LoginSupport />
        <Text color='#10a37f' textAlign='center'>Terms of use | Privacy Policy</Text>
      </Box>
    </Box>
  );
};

export default Login;
