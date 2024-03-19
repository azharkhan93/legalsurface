"use client";
import { CenterBox,CRUD} from "@/components";
import { Test } from "@/components/TestComponent/Test";


export default function Page() {
  return (
    <CenterBox 
        height={"100%"} bg={"greyLight"} overflow = {"auto"} px= {"xxxl"}  >

        <CRUD updateComponent={Test} modalWidth="" columnWidth={""} />

        </CenterBox>
  );
}
