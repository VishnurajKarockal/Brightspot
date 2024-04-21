import React from 'react';
import { Box, Button, Grid, Image, Select, Text } from '@chakra-ui/react';

const DefaultChatTemplate = ({ sendMessage }) => {
    return (
        <Box height={'80%'} width={'100%'}>
            <Box height={'33.3%'} width={'100%'}>
                <Button margin={0} padding={0} background={'none'} border={'none'}>
                    <Select margin={0} padding={0} border={'none'}>
                        <option value="">ChatGPT_3.5</option>
                        <option value="">B</option>
                        <option value="">C</option>
                    </Select>
                </Button>
            </Box>
            <Box height={'33.3%'} width={'100%'} textAlign={'center'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Image width={'5%'} src='..\src\assets\1700403115chatgpt-logo-transparent.png' />
                <Text fontSize={'1.5rem'} fontWeight={'600'}>How can I Help You Today?</Text>
            </Box>
            <Grid height={'33.3%'} margin={'auto'} width={'80%'} gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(2,1fr)' }} justifyItems={'center'} padding={'10px'} gap={'10px'}>
                <Box onClick={() => sendMessage('Improve my essay writing')} _hover={{ backgroundColor: '#e8e6e6', cursor: 'pointer' }} width={'80%'} backgroundColor={'rgba(0, 0, 0, 0.05)'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text>Improve my essay writing</Text>
                </Box>
                <Box onClick={() => sendMessage('Suggest some names')} _hover={{ backgroundColor: '#e8e6e6', cursor: 'pointer' }} width={'80%'} backgroundColor={'rgba(0, 0, 0, 0.05)'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text>Suggest some names</Text>
                </Box>
                <Box onClick={() => sendMessage('Compare Storytelling techniques')} _hover={{ backgroundColor: '#e8e6e6', cursor: 'pointer' }} width={'80%'} backgroundColor={'rgba(0, 0, 0, 0.05)'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text>Compare Storytelling techniques</Text>
                </Box>
                <Box onClick={() => sendMessage('Automate social media')} _hover={{ backgroundColor: '#e8e6e6', cursor: 'pointer' }} width={'80%'} backgroundColor={'rgba(0, 0, 0, 0.05)'} borderRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text>Automate social media</Text>
                </Box>
            </Grid>
        </Box>
    );
};

export default DefaultChatTemplate;
