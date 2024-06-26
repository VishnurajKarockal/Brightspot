import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const LoginSupport = () => {
  return (
    <Box display='flex' flexDir='column' gap='20px' margin='auto'>
        <Button display='flex' textAlign='start' justifyContent='flex-start'>
            <Image width='5%' marginRight='20px' src='https://github.com/VishnurajKarockal/Brightspot/blob/main/src/assets/transparent-google-logo-google-logo-with-multicolored-g-and-1710875781697.png?raw=true'/>
            <Text>Continue with Google</Text>
        </Button>
        <Button textAlign='start' justifyContent='flex-start'>
            <Image width='7%' marginRight='20px' src='https://github.com/VishnurajKarockal/Brightspot/blob/main/src/assets/microsoft-logo-png-2395.png?raw=true'/>
            <Text>Continue with Microsoft Account</Text>
        </Button>
        <Button justifyContent='flex-start'>
            <Image width='7%' marginRight='20px' src='https://github.com/VishnurajKarockal/Brightspot/blob/main/src/assets/apple_logo.png?raw=true'/>
            <Text>Continue with Apple</Text>
        </Button>
    </Box>
  )
}

export default LoginSupport
