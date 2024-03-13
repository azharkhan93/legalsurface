"use client"
import React, { useState } from 'react';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, StyledInputBox, Button } from "@/components";

export default function Home() {
    const [isSearchIconVisible, setSearchIconVisibility] = useState(true);

    const handleInputFocus = () => {

        setSearchIconVisibility(false);
    };

    const handleInputChange = (event) => {
        setSearchIconVisibility(event.target.value === '');
    }
    return (

        <Box height={"8%"} width={"98%"} bg="secondary"
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            borderRadius={"xs"}
            mx={"m"}
            px={"l"}

        >

            <Box alignItems="center" justifyContent={"center"} position={"relative"}>
                {isSearchIconVisible && (
                    <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '0' }} />
                )}
                <StyledInputBox
                    borderRadius={"circle"}
                    border={"none"}
                    placeholder={"Type something"}
                    py={"m"}
                    px={"m"}
                    onFocus={() => handleInputFocus()}
                    onBlur={() => setSearchIconVisibility(true)}
                    onChange={handleInputChange}
                >


                </StyledInputBox>
            </Box>


            {/* <Box alignItems={"center"} justifyContent={"center"} gap={"xs"}> */}

                <Button variant={"primary"}
                    color={"white"}
                    height={"5vh"}
                    width={"11vw"}
                
                >
                    Add New
                    <FontAwesomeIcon icon={faPlus} style={{ marginLeft: '6px' }} />
                </Button>



            </Box>
        // </Box>

    )
}