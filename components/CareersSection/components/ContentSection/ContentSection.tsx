import { Box, Column, Row, Text } from "@/components";
import { TaskItems } from "../TasItems";

type  ReusableSectionProps = {
  heading: string;
  description: string;
  subHeading: string;
  tasks: { id: number; description: string }[];
}

export const ContentSection: React.FC<ReusableSectionProps> = ({
  heading,
  description,
  subHeading,
  tasks,
}) => {
  return (
    <Column
      py={"xl"}
      gap={"l"}
      color="white"
      alignItems={"center"}
      width={"800px"}
      style={{
        backgroundImage: "url('/images/pd.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Row
        flexDirection={"row"}
        justifyContent={"start"}
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
          <Text variant={"heading"} color="white">
            1
          </Text>
        </Box>
        <Text variant={"heading"}>{heading}</Text>
      </Row>

      <Column gap={"xl"}>
        <Text variant={"body"}>{description}</Text>

        <Text variant={"subHeading"}>{subHeading}</Text>
        {tasks.map((task) => (
          <TaskItems key={task.id} description={task.description} />
        ))}
      </Column>
    </Column>
  );
};
