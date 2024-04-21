import { Box } from '@chakra-ui/react'
import React from 'react'
import LeftChatComponent from '../components/LeftChatComponent'
import RightChatComp from '../components/RightChatComp'
import Login from './Login'
import { useSelector } from 'react-redux'

const Home = () => {
  const loginStatus = useSelector((state) => state.login)
  console.log("aaaaaaaaaaaaaaa",loginStatus)
  return (
    loginStatus ? (
      <Box display={'flex'} >
        <LeftChatComponent />
        <RightChatComp />
      </Box>
    ) : (
      <Login />
    )
  )
}

export default Home
