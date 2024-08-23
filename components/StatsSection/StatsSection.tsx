import { stats } from "@/constants"
import { Box, CenterBox, Column, Row, Text} from "../styled"
import { StatsCards } from "./components/StatsCards"


export const StatsSection = () =>{

    return(
        <>
        <Column
        py={"xl"}
     
        width={"100%"}
        gap={"xxxl"}
        bg={"grey"}
        >
        <Text variant={"heading"} color="white" textAlign={"start"} p={"m"}> Since 20007</Text>
        <Row
        // bg={"grey"}
            py={"xl"}
            px={"xl"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            {stats.map((stat, index) => (
                <StatsCards key={index} heading={stat.heading} subHeading={stat.subHeading} />
            ))}




        </Row>
        </Column>
        </>
   

    )
}