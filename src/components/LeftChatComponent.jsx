import React, { useState } from 'react';
import { Box, Button, Image, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { chatHistory } from '../Resources/resouces.Data';
import ChatHistoryComp from './ChatHistoryComp';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../redux/actionTypes';
import { useNavigate } from 'react-router-dom';

const LeftChatComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast(); // Initialize useToast hook
  const [isUpgradePlanModalOpen, setIsUpgradePlanModalOpen] = useState(false);
  const [isVishnurajModalOpen, setIsVishnurajModalOpen] = useState(false);

  const handleOpenUpgradePlanModal = () => {
    setIsUpgradePlanModalOpen(true);
  };

  const handleCloseUpgradePlanModal = () => {
    setIsUpgradePlanModalOpen(false);
  };

  const handleOpenVishnurajModal = () => {
    setIsVishnurajModalOpen(true);
  };

  const handleCloseVishnurajModal = () => {
    setIsVishnurajModalOpen(false);
  };
  
  const handleLogout = () => {
    dispatch({type: LOGOUT});
    localStorage.setItem('loginStatus', "");
    toast({
      title: "Logged out successfully",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    // Add a delay before refreshing the page
    setTimeout(() => {
      window.location.reload();
    }, 1000); // Adjust the delay time as needed
  };
  
  return (
    <Box
      width={'25%'}
      padding={'20px'}
      boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}
      height={'100vh'}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'space-between'}
    >
      {/* Left Component top Box */}
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={'0 0 20px'}>
        <Box display={'flex'} alignItems={'center'} gap={'10px'}>
          <Image
            borderRadius={'50%'}
            border={'1px solid grey'}
            padding={'5px'}
            width={'13%'}
            src={'../src/assets/1700403115chatgpt-logo-transparent.png'}
          />
          <Text fontWeight={'600'}>New Chat</Text>
        </Box>
        <Button onClick={handleOpenUpgradePlanModal}>
          <EditIcon />
        </Button>
      </Box>

      {/* Left component Middle */}
      <Box flex={'1'} overflowY={'auto'} marginTop={'30px'}>
        {chatHistory.map((ele, i) => (
          <ChatHistoryComp key={i} {...ele} />
        ))}
      </Box>

      {/* Left Component Bottom Box */}
      <Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={'10px'}
          padding={'10px 0'}
          _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', cursor: 'pointer' }}
          onClick={handleOpenUpgradePlanModal}
        >
          <Image
            borderRadius={'50%'}
            border={'1px solid grey'}
            padding={'5px'}
            width={'11%'}
            height={'11%'}
            src={'../src/assets/vecteezy_stars-night-solid-line-icon-vector-illustration-logo_7502340-1.jpg'}
          />
          <Box>
            <Text fontWeight={'600'}>Upgrade plan</Text>
            <Text color={'grey'} fontSize={'.9rem'}>
              Get GPT-4,DALL.E and more
            </Text>
          </Box>
        </Box>

        {/* Modal for Upgrade plan */}
        <Modal isOpen={isUpgradePlanModalOpen} onClose={handleCloseUpgradePlanModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upgrade Plan</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Your modal content goes here */}
              <Text>This is the modal content for Upgrade plan.</Text>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Box
          display={'flex'}
          alignItems={'center'}
          padding={'10px 0'}
          gap={'10px'}
          _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', cursor: 'pointer' }}
          onClick={handleOpenVishnurajModal}
        >
          <Image
            borderRadius={'50%'}
            border={'1px solid grey'}
            width={'11%'}
            height={'11%'}
            src={'../src/assets/final_profile.jpg'}
          />
          <Box>
            <Text fontWeight={'600'}>Vishnuraj K R</Text>
          </Box>
        </Box>
        {/* Modal for Vishnuraj K R */}
        <Modal isOpen={isVishnurajModalOpen} onClose={handleCloseVishnurajModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Vishnuraj K R</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Your modal content goes here */}
              <Text>This is the modal content for Vishnuraj K R.</Text>
              <Button onClick={() => handleLogout()}>Logout</Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default LeftChatComponent;
