import React, { useState } from 'react';
import DefaultChatTemplate from './DefaultChatTemplate';
import { Box, Button, Input } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_DATA } from '../redux/actionTypes';
import ViewChats from './ViewChats';

const RightChatComp = () => {
    const dispatch = useDispatch();
    const chats = useSelector((state) => state.chats);
    const [inputText, setInputText] = useState('');

    const handleAddChat = () => {
        if (inputText.trim() === '') return;
        const id = new Date().getTime(); 
        dispatch({ type: ADD_DATA, payload: { id, text: inputText } });
        setInputText('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddChat();
        }
    };

    const sendMessage = (message) => {
        setInputText(message);
        handleAddChat();
    };

    return (
        <div style={{ width: '75%' }}>
            {chats.length ? <ViewChats /> : <DefaultChatTemplate sendMessage={sendMessage} />}
            
            <Box height={'20vh'} display={'flex'} alignItems={'center'} padding={'20px'} gap={'10px'}>
                <Input
                    placeholder='Message ChatGPT....'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <Button
                    onClick={handleAddChat}
                    disabled={!inputText.trim()}
                    backgroundColor={inputText.length ? '#10a37f' : ''}
                >
                    <ArrowUpIcon />
                </Button>
            </Box>
        </div>
    );
};

export default RightChatComp;
