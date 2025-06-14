import { Column, Text } from "@/components/styled";

type StatsCardsProps = {
  heading: string;
  subHeading: string;
};

export const StatsCards: React.FC<StatsCardsProps> = ({
  heading,
  subHeading,
}) => (
  <Column
    alignItems={"center"}
    borderTop={["none", "3px solid black"]}
    borderBottom={"2px solid black"}
       p={"l"}
    gap={["xl", "l"]}
    color="secondary"
  >
    <Text variant={"heading"}>{heading}</Text>
    <Text variant={"subHeading"}>{subHeading}</Text>
  </Column>
);
