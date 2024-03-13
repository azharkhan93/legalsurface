// "use client"
import React from 'react';
import { Box, Button, CenterBox, Text } from "@/components/styled";
import {  faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps {
    onClose: () => void;
    content: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, content }) => {
    return (
        <CenterBox
            width={"100%"}
            height={"100vh"}
            position={"fixed"}
            top={"0"}
            left={"0"}
            bg={"modalOverlayBg"}

            // rgba(0, 0, 0, 0.3)
        >
            <Box
                bg={"white"}
                height={"80vh"}
                width={"30vw"}
                borderRadius={"s"}
                alignItems={"center"}
                justifyContent={"space-between"}
                position={"relative"} 
            >
                <Box
        padding={"m"}
        position={"absolute"} 
        right={0}  
    >
        <FontAwesomeIcon
            icon={faTimes}
            style={{ cursor: 'pointer', fontSize: '24px' }}
            onClick={onClose}
        />
    </Box>
                
                {content}
                <Button
                    py={"s"}
                    px={"xl"}
                    bg={"secondary"}
                    color={"white"}
                    borderRadius={"xl"}
                    border={"none"}
                    onClick={onClose}
                >
                    Close Modal
                </Button>
            </Box>
        </CenterBox>
    );
};

