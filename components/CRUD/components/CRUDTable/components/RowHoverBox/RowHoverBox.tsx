import { Row } from "@/components/styled";
import { BASE_COLORS } from "@/theme";
import React from "react";
import { styled } from "styled-components";

const RowBox = styled(Row)`
    cursor: pointer;
    &:hover {
        background-color: ${BASE_COLORS.greyLight};
    }
`;

interface RowHoverBoxProps {
    children: React.ReactNode; 
}

export const RowHoverBox: React.FC<RowHoverBoxProps> = ({ children }) => {
    return (
        <RowBox
            py={"l"}
            px={"xl"}
            bg={"white"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
            borderTop={"1px solid rgb(222, 226, 230)"}
            borderBottom={"1px solid rgb(222, 226, 230)"}
        >
            {children} {/* Render children */}
        </RowBox>
    );
};