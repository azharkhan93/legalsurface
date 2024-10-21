
import { Box, Column, Row, Text } from "@/components";
import { TaskItems } from "../TasItems";

type ReusableSectionProps = {
  heading: string;
  description: string;
  subHeading: string;
  tasks: { id: number; description: string }[];
  qualifications: { id: number; description: string }[];
};

export const ContentSection: React.FC<ReusableSectionProps> = ({
  heading,
  description,
  subHeading,
  tasks,
  qualifications,
}) => {
  return (
    <Column
    width={"100%"}
      border={"3px solid red"}
      py={"xl"}
      gap={"l"}
      px={"s"}
      color="white"
      alignItems={"center"}
      style={{
        backgroundImage: "url('/images/pd.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Row
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        gap={"xl"}
      >
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          bg={"grey"}
          borderRadius={"circle"}
          py={"s"}
          px={"xl"}
        >
          <Text variant={"heading"} color="white" textAlign={"center"}>
            1
          </Text>
        </Box>
        <Text variant={"heading"} textAlign={"center"}>
          {heading}
        </Text>
      </Row>
      <Text variant={"body"} textAlign={"center"} width={["100%", "700px"]}>
        {description}
      </Text>

      <Row
        py={"xl"}
        gap={["xxxxl", "xl"]}
        flexDirection={["column", "row"]}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Column gap={"xxl"} bg={"modalOverlayBg"} py={"l"}  px={["none","l"]} alignItems={"center"}
        style={{
          boxShadow: "0px 0px 2px 2px black", 
        }}
        >
          <Text variant={"subHeading"} textAlign={"start"}>
            {subHeading}
          </Text>
          {tasks.map((task) => (
            <TaskItems key={task.id} description={task.description} />
          ))}
        </Column>
        <Column gap={"xl"} bg={"modalOverlayBg"} borderBottom={"2px solid white"} borderRadius={"m"} py={"l"} px={["none","l"]} alignItems={"center"} >
          <Text variant={"heading"}>Qualifications:</Text>
          {qualifications.map((qualification) => (
            <Text key={qualification.id} variant={"body"} width={["100%", "600px"]}>
              {qualification.description}
            </Text>
          ))}
        </Column>
      </Row>
    </Column>
  );
};
