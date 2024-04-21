import { Box, Image, Text } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ViewChats = () => {
    const chats = useSelector((state) => state.chats);
    const chatsEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [chats]);

    const scrollToBottom = () => {
        if (chatsEndRef.current) {
            chatsEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box width={'100%'} height={'80vh'} padding={'50px 0'} overflowY="auto">
            {chats.map((ele, i) => (
                <Box key={i} width={'70%'} margin={'auto'} marginBottom="20px">
                    <Box id='User' padding={'20px'}>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <Image src='..\src\assets\final_profile.jpg' width={'3%'} borderRadius={'50%'} />
                            <Text fontSize={'1.1rem'} fontWeight={'600'}>You</Text>
                        </Box>
                        <Text marginLeft={'30px'}>{ele.text}</Text>
                    </Box>
                    <Box id='gpt' padding={'20px'}>
                        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                            <Image src='..\src\assets\1700403115chatgpt-logo-transparent.png' width={'3%'} borderRadius={'50%'} />
                            <Text fontSize={'1.1rem'} fontWeight={'600'}>ChatGPT</Text>
                        </Box>
                        <Text marginLeft={'30px'}>Hello! How can I help you today?</Text>
                    </Box>
                </Box>
            ))}
            <div ref={chatsEndRef} />
        </Box>
    );
};

export default ViewChats;
