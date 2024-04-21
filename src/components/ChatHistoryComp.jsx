import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ChatHistoryComp = (ele) => {
    console.log("aaaaaaaaaaaaaa",ele)
    const {id,created_at,searches} = ele ;
  return (
    <Box key={id} display={'flex'} flexDir={'column'} gap={'13px'} marginBottom={'30px'}>
        <Text fontSize={'.8rem'} fontWeight={'600'} color={'#aeb0af'}>{created_at}</Text>
        <Box>
            {searches.map((item,i) => (
                <Box key={i} padding={'8px'} _hover={{ backgroundColor: '#e8e6e6', cursor: 'pointer' }} borderRadius={'10px'}>
                    <Text>{item.title}</Text>
                </Box>
            ))}
        </Box>
    </Box>
  )
}

export default ChatHistoryComp