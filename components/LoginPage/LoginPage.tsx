import { BASE_COLORS } from "@/theme";
import { CenterBox, Row, Box, Text } from "../styled";
import { LoginForm } from "./components";

export const LoginPage = () => {
  return (
    <CenterBox height={"100%"} width={"100%"} backgroundColor={"greyLight"}>
      <Row width={"50%"} height={"60%"} borderRadius={"s"} overflow={"hidden"}>
        <CenterBox
          borderTopLeftRadius={"s"}
          borderBottomLeftRadius={"s"}
          width={"40%"}
          height={"100%"}
          style={{
            backgroundImage: `url("/assets/svgs/login-bg.svg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          borderLeft={`2px solid ${BASE_COLORS.primary}`}
          borderTop={`1px solid ${BASE_COLORS.primary}`}
          borderBottom={`1px solid ${BASE_COLORS.primary}`}
          overflow={"hidden"}
          position={"relative"}
        ></CenterBox>
        <Box
          width={"60%"}
          height={"100%"}
          bg={"white"}
          borderRight={`2px solid ${BASE_COLORS.secondary}`}
          borderTop={`1px solid ${BASE_COLORS.secondary}`}
          borderBottom={`1px solid ${BASE_COLORS.secondary}`}
          borderTopRightRadius={"s"}
          borderBottomRightRadius={"s"}
        >
          <LoginForm />
        </Box>
      </Row>
    </CenterBox>
  );
};
