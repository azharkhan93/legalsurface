"use client";

import { CenterBox, CRUD } from "@/components";
import { Test } from "@/components/TestComponent/Test";


export default function Home() {

   
    return (
        <CenterBox 
        height={"100%"} bg={"greyLight"} overflow = {"auto"} px= {"xxxl"}  >

        <CRUD updateComponent={Test} modalWidth={"400px"} columnWidth={"20%"} />
        </CenterBox>

    )
}



