"use client";
import { useState } from "react";
import { Box, Button, CenterBox, Column, StyledLink, UpdateForm } from "@/components";
import { Formik, Form } from "formik";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
};

export const SignUp = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleSubmit = async (values: FormValues) => {
    console.log("Form values:", values);
  };

  return (
    <>
      {showSignUp && (
        <CenterBox width={"100%"} height={"100%"} p={"m"}>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmpassword: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  width={"100%"}
                  height={"100%"}
                  alignItems={"center"}
                //   py={"xl"}
                //   gap={"xxxl"}
                >
                  <Box
                    width={"100%"}
                    height={"19%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <CenterBox width={"90%"} justifyContent={"center"}>
                      <Box
                        width={"150px"}
                        height={"150px"}
                        style={{
                          backgroundImage: `url("/images/logo.png")`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      ></Box>
                    </CenterBox>
                  </Box>
                  <Column
                    width={"100%"}
                    height={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"xxl"}
                  >
                    <Box width={["100%","80%"]}>
                      <UpdateForm
                        name={"username"}
                        placeholder={"Username"}
                        label={"Username"}
                        type="text"
                      />
                    </Box>
                    <Box width={["100%","80%"]}>
                      <UpdateForm
                        name={"email"}
                        placeholder={"Enter Email"}
                        label={"Email"}
                        type="email"
                      />
                    </Box>
                    <Box width={["100%","80%"]}>
                      <UpdateForm
                        name={"password"}
                        placeholder={"Your Password"}
                        label={"Password"}
                        type="password"
                      />
                    </Box>
                    <Box width={["100%","80%"]}>
                      <UpdateForm
                        name={"confirmpassword"}
                        placeholder={"Enter Password"}
                        label={"Confirm Password"}
                        type="password"
                      />
                    </Box>
                    <Box
                      width={["100%","80%"]}
                      justifyContent={"space-between"}
                      flexDirection={"row"}
                    //   pt={"xl"}
                    >
                      <Button
                        width={"40%"}
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        SignUp
                      </Button>
                      <Box>
                        <StyledLink
                          $UnderlineColor="primary"
                          onClick={() => setShowSignUp(true)}
                          style={{ cursor: "pointer" }}
                        >
                          Already Have Account SignIn
                        </StyledLink>
                      </Box>
                    </Box>
                  </Column>
                </Box>
              </Form>
            )}
          </Formik>
        </CenterBox>
      )}
    </>
  );
};

