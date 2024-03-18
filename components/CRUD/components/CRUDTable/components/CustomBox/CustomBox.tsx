
import styled from 'styled-components';
import { BASE_COLORS } from '@/theme';
import { CenterBox } from '@/components/styled';

interface CustomBoxProps {
    fontSize?: number;
    children: React.ReactNode;
  }
 

const StyledCustomBox = styled(CenterBox)`
  &:hover {
    background-color: ${BASE_COLORS.greyish};
    cursor: pointer;
  }
`;

export const CustomBox: React.FC<CustomBoxProps> = ({children }) => {
  return (
    <StyledCustomBox
      justifyContent={"start"}
      flexDirection={"row"}
      gap={"xl"}
      width={"100%"}
      bg={"white"}
      py={"m"}
      px={"xl"}
    >
        {children}
    
    </StyledCustomBox>
  );
};

