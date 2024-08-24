import { stats } from "@/constants"
import { Box, CenterBox, Column, Row, Text} from "../styled"
import { StatsCards } from "./components/StatsCards"


export const StatsSection = () =>{

    return(
        <>
        <Column
        // flexDirection={["column", "row"]}
        py={"xl"}
     
        width={"100%"}
        gap={"xxxl"}
        px={"s"}
        // bg={"grey"}
        >
             <Column alignItems={"flex-start"} gap={"m"} px={"m"} >
        <Text variant={"heading"} fontWeight={"bold"} color={"secondary"}>
          Our Stats
        </Text>
        <Box
          height={"3px"}
          bg={"secondary"}
          width={["40%","20%"]}
          borderRadius={"circle"}
          ml={"header"}
        />
        <Text variant={"subHeading"} fontWeight={"bold"} color={"secondary"}>
          Explore Now
        </Text>
      </Column>
      <Text color={"secondary"} variant={"body"} width={["100%","800px"]} px={["none","xl"]}>
        Here is an overview of the various departments at our university. Each
        department offers unique programs and services designed to help you
        achieve your academic and career goals. Explore our departments to learn
        more about the opportunities available.
      </Text>
        <Row
        gap={"l"}
          flexDirection={["column", "row"]}
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