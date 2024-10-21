import { Box, Row, Text } from '@/components/styled';
import React from 'react';
import { FaCheck } from 'react-icons/fa';


interface TaskItemProps {
  description: string;
}



export const TaskItems: React.FC<TaskItemProps> = ({ description }) => (
  <Row flexDirection={'row'} gap={'l'} alignItems={'center'}>
    <Box bg={'grey'} py={'m'} borderRadius={'circle'} px={'m'}>
      <FaCheck size={24} />
    </Box>
    <Text variant={'body'}>{description}</Text>
  </Row>
);