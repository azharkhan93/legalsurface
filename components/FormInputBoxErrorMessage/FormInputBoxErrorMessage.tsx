import { Text } from "@/components/styled";

type ErrorMessagrprops = {
  error: string;
};
export const FormInputBoxErrorMessage: React.FC<ErrorMessagrprops> = ({
  error,
}) => {
  return (
    <Text variant={"body"} fontSize={16} color={"red"}>
      {error}
    </Text>
  );
};
