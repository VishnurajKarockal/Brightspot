import { Box, Button, Image, Select, Switch, Text } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_THEME } from '../redux/actionTypes';

const ViewChats = () => {
    const chats = useSelector((state) => state.chats);
    const chatsEndRef = useRef(null);
    const theme = localStorage.getItem('theme') ;
    const dispatch = useDispatch()
    useEffect(() => {
        scrollToBottom();
    }, [chats]);

    const scrollToBottom = () => {
        if (chatsEndRef.current) {
            chatsEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleToggle = () => {
        console.log("Toggle switch clicked");
        dispatch({ type: TOGGLE_THEME });
        window.location.reload()
    };

    return (
        <Box width={'100%'} height={'80vh'} overflowY="auto">
            <Box 
                width={'100%'} 
                display={'flex'} 
                justifyContent={'space-between'} 
                position="sticky" 
                top="0" 
                backgroundColor={theme === 'dark' ? '#1a1a1a' : 'white'} // Adjust background color based on theme
                zIndex="1" // Ensure it's above other content
                padding="10px 20px" // Add padding for better appearance
            >
                <Button margin={0} padding={0} background={'none'} border={'none'}>
                    <Select margin={0} padding={0} border={'none'} color={theme === 'dark'? 'white':''}>
                        <option value="">ChatGPT_3.5</option>
                        <option value="">B</option>
                        <option value="">C</option>
                    </Select>
                </Button>
                <Switch isChecked={theme == 'dark'} onChange={() => handleToggle()} padding={'20px'} colorScheme='gray' size='lg' />
            </Box>

            {chats.map((ele, i) => (
                <Box key={i} width={'70%'} margin={'auto'} marginBottom="20px">
                    <Box id='User' padding={'20px'}>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <Image src='..\src\assets\final_profile.jpg' width={'3%'} borderRadius={'50%'} />
                            <Text fontSize={'1.1rem'} fontWeight={'600'} color={theme === 'dark'? '#c1c1c1':''} >You</Text>
                        </Box>
                        <Text marginLeft={'30px'} color={theme === 'dark'? 'white':''} >{ele.text}</Text>
                    </Box>
                    <Box id='gpt' padding={'20px'}>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <Image src='..\src\assets\1700403115chatgpt-logo-transparent.png' width={'3%'} borderRadius={'50%'} />
                            <Text fontSize={'1.1rem'} fontWeight={'600'} color={theme === 'dark'? '#c1c1c1':''} >ChatGPT</Text>
                        </Box>
                        <Text marginLeft={'30px'} color={theme === 'dark'? 'white':''} >Hello! How can I help you today?</Text>
                    </Box>
                </Box>
            ))}
            <div ref={chatsEndRef} />
        </Box>
    );
};

export default ViewChats;
