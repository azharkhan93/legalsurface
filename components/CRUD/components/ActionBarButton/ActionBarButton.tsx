import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/styled';
import { BASE_COLORS } from '@/theme';

interface ActionBarButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
  }

const StyledCustomButton = styled(Button)`
  &:hover {
    background-color: ${BASE_COLORS.primary};
  }
`;

export const ActionBarButton: React.FC<ActionBarButtonProps> = ({ onClick, children }) => {
  return (
    <StyledCustomButton
      bg={"buttonBg"}
      color={"white"}
      height={"6vh"}
      width={"9vw"}
      border={"none"}
      borderRadius={"xs"}
      onClick={onClick}
    >
      {children}
      <FontAwesomeIcon icon={faPlus} style={{ marginLeft: '7px' }} />
    </StyledCustomButton>
  );
};

