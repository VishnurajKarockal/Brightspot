import React, { useState } from 'react'
import DefaultChatTemplate from './DefaultChatTemplate'
import { Box, Button, Input } from '@chakra-ui/react'
import {ArrowUpIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_DATA } from '../redux/actionTypes'
import ViewChats from './ViewChats'
const RightChatComp = () => {
    const dispatch = useDispatch();
    const chats = useSelector((state) => state.chats) ;
    const [inputText, setInputText] = useState('');
    //const a = useSelector((state) => state.chats)
    const handleAddChat = () => {
        if (inputText.trim() === '') return; // Prevent adding empty messages
        const id = new Date().getTime(); 
        dispatch({ type: ADD_DATA, payload: { id, text: inputText } });
        setInputText('');
    };
    
  return (
    <div style={{ width: '75%' }}>
        {/* <DefaultChatTemplate /> */}
        {chats.length? <ViewChats /> : <DefaultChatTemplate /> }
        
        <Box height={'20vh'} display={'flex'} alignItems={'center'} padding={'20px'} gap={'10px'}>
            <Input placeholder='Message ChatGPT....' value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <Button onClick={handleAddChat} disabled={!inputText.trim()} backgroundColor={inputText.length?'#10a37f':''}>
                <ArrowUpIcon />
            </Button>
        </Box>
    </div>
  )
}

export default RightChatComp