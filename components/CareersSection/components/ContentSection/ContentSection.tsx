import { Box, Column, Row, Text } from "@/components";
import { TaskItems } from "../TasItems";

type ReusableSectionProps = {
  heading: string;
  description: string;
  subHeading: string;
  tasks: { id: number; description: string }[];
};

export const ContentSection: React.FC<ReusableSectionProps> = ({
  heading,
  description,
  subHeading,
  tasks,
}) => {
  return (
    <Column
      border={"3px solid red"}
      py={"xl"}
      gap={"l"}
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
      <Text variant={"body"} textAlign={"center"} width={["100%","700px"]}>
        {description}
      </Text>

     
      <Row

      gap={["xxxxl","xl"]}
        flexDirection={["column","row"]}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Column gap={"xl"}>
        <Text variant={"subHeading"}  textAlign={"start"}>{subHeading}</Text>
          {tasks.map((task) => (
            <TaskItems key={task.id} description={task.description} />
          ))}
        </Column>
        <Column gap={"xl"}>
          <Text variant={"heading"}>Qualifications:</Text>

          <Text variant={"body"} width={["100%","600px"]}>
            Enrolled in a Law Degree Program: Candidates must be currently
            enrolled in a law degree program to be eligible for this internship.
          </Text>
          <Text variant={"body"} >
            Strong Research and Writing Skills: A solid foundation in research
            and writing is crucial for performing the tasks required during the
            internship.
          </Text>
          <Text variant={"body"}>
            Eagerness to Learn and Contribute: We seek motivated individuals who
            are eager to learn, contribute, and make the most of this invaluable
            learning experience.
          </Text>
        </Column>
      </Row>
    </Column>
  );
};
