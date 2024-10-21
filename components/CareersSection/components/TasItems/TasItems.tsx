import { Box, Row, Text } from '@/components/styled';
import React from 'react';
import { FaCheck } from 'react-icons/fa';


interface TaskItemProps {
  description: string;
}



export const TaskItems: React.FC<TaskItemProps> = ({ description }) => (
  <Row flexDirection={'row'} gap={'l'} alignItems={'center'} width={["100%","700px"]}>
    <Box bg={'grey'} py={'m'} borderRadius={'circle'} px={'m'}>
      <FaCheck size={24} />
    </Box>
    <Text variant={'body'}>{description}</Text>
  </Row>
);