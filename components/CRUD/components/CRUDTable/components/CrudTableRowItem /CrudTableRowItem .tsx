import React, { useState } from "react";
import { Box, CenterBox, Row, Text } from "@/components/styled";
import { CRUDTableModal } from "../CRUDTableModal";
import { DataItem } from "../../CRUDTable";
import Image from "next/image";
import { RowHoverBox } from "../RowHoverBox";


interface CrudTableRowItemProps {
    item: DataItem;
    columnWidth: string;
}

export const CrudTableRowItem: React.FC<CrudTableRowItemProps> = ({ item, columnWidth }) => {

    if (!item) {
        return null;
    }
    const keys = Object.keys(item);
    const [modalVisible, setModalVisible] = useState(false);

    const handleIconClick = () => {
        setModalVisible(true);
    };
    return (
        <>
            <RowHoverBox
                


            >
                <CenterBox  >
                    <Box

                    >
                       <Image src={"/assets/icons/checkbox.png"} alt={""} width= {28} height = {28} />

                    </Box>
                </CenterBox>

                <Row
                width={"100%"}
                justifyContent={"center"}
    
                >




                    {keys.map((key, index) => (

                        <Box
                        key={index} 
                        width = {columnWidth}
                        justifyContent={"center"}

                        >
                        <Text  fontSize={15}   py={"m"} px={"xl"}>
                            {item[key as keyof DataItem] || ""}
                        </Text>
                        </Box>
                    ))}
                </Row>


                <Box
                    borderRadius={"circle"}
                    width={"25px"}
                    height={"25px"}
                    bg={"white"}
                    onClick={handleIconClick}
                >
                    <Image src={"/assets/icons/dots.png"} alt={""} width= {20} height = {20} />
                </Box>
            </RowHoverBox>
            {modalVisible && <CRUDTableModal onClose={() => setModalVisible(false)} />}


        </>
    );
};




