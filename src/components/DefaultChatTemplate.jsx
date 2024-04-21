import React from 'react';
import { Box, Button, Grid, Image, Select, Text } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_THEME } from '../redux/actionTypes';
const DefaultChatTemplate = ({ sendMessage }) => {
    const theme = localStorage.getItem('theme') ;
    const dispatch = useDispatch();
    const handleToggle = () => {
        console.log("Toggle switch clicked");
        dispatch({ type: TOGGLE_THEME });
        window.location.reload()
    };
    console.log("inside default",theme)
    return (
        <Box height={'80%'} width={'100%'}>
            <Box height={'33.3%'} width={'100%'} display={'flex'} justifyContent={'space-between'}>
                <Button margin={0} padding={0} background={'none'} border={'none'}>
                    <Select margin={0} padding={0} border={'none'} color={theme === 'dark'? 'white':''}>
                        <option value="">ChatGPT_3.5</option>
                        <option value="">B</option>
                        <option value="">C</option>
                    </Select>
                </Button>
                <Switch isChecked={theme == 'dark'} onChange={() => handleToggle()} padding={'20px'} colorScheme='gray' size='lg' />
            </Box>
            <Box  height={'33.3%'} width={'100%'} textAlign={'center'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Image width={'5%'} src='https://github.com/VishnurajKarockal/Brightspot/blob/main/src/assets/1700403115chatgpt-logo-transparent.png?raw=true' />
                <Text fontSize={'1.5rem'} fontWeight={'600'} color={theme === 'dark'? 'white':''} >How can I Help You Today?</Text>
            </Box>
            <Grid height={'33.3%'} margin={'auto'} width={'80%'} gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(2,1fr)' }} justifyItems={'center'} padding={'10px'} gap={'10px'}>
                <Box border={theme === 'dark'? '1px solid white':''} color={theme === 'dark'? 'white':''}  onClick={() => sendMessage('Improve my essay writing')} _hover={{ backgroundColor: theme ==='light'?'#e8e6e6':'grey', cursor: 'pointer' }} width={'80%'} backgroundColor={'rgba(0, 0, 0, 0.05)'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text>Improve my essay writing</Text>
                </Box>
                <Box border={theme === 'dark'? '1px solid white':''} color={theme === 'dark'? 'white':''}  onClick={() => sendMessage('Suggest some names')} _hover={{ backgroundColor: theme ==='light'?'#e8e6e6':'grey', cursor: 'pointer' }} width={'80%'} backgroundColor={'rgba(0, 0, 0, 0.05)'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text>Suggest some names</Text>
                </Box>
                <Box border={theme === 'dark'? '1px solid white':''} color={theme === 'dark'? 'white':''}  onClick={() => sendMessage('Compare Storytelling techniques')} _hover={{ backgroundColor: theme ==='light'?'#e8e6e6':'grey', cursor: 'pointer' }} width={'80%'} backgroundColor={'rgba(0, 0, 0, 0.05)'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text>Compare Storytelling techniques</Text>
                </Box>
                <Box border={theme === 'dark'? '1px solid white':''} color={theme === 'dark'? 'white':''} onClick={() => sendMessage('Automate social media')} _hover={{ backgroundColor: theme ==='light'?'#e8e6e6':'grey', cursor: 'pointer' }} width={'80%'} backgroundColor={'rgba(0, 0, 0, 0.05)'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text>Automate social media</Text>
                </Box>
            </Grid>
        </Box>
    );
};

export default DefaultChatTemplate;
