"use client";

import { useState } from "react";
import { Box, Button, CenterBox, Column, StyledLink, UpdateForm } from "@/components";
import { Formik, Form } from "formik";
import { SignUp } from "../SignUp";
import axios from "axios";


type FormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post('/api/login', values);
      console.log("Server response:", response.data);
      // Handle success (e.g., redirect to login page or show success message)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      {!showSignUp ? (
        <CenterBox width={["100%","80%"]} height={"100%"} p={"m"}>
          <Formik
            initialValues={{
              email: "",
              password: "",
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
                  py={"xl"}
                  gap={"xxxl"}
                >
                  <Box
                    width={"100%"}
                    height={"30%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <CenterBox width={"90%"} gap={"m"} justifyContent={"center"}>
                      <Box
                        width={"200px"}
                        height={"200px"}
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
                    height={"90%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"xxxl"}
                  >
                     <Box width={["100%", "80%"]}>
                      <UpdateForm
                        name={"email"}
                        placeholder={"Enter Email"}
                        label={"Email"}
                        type="email"
                      />
                    </Box>
                    <Box width={["100%","80%"]}
                    >
                      <UpdateForm
                        name={"password"}
                        placeholder={"Your Password"}
                        label={"Password"}
                        type="password"
                      />
                    </Box>
                    <Box
                      width={["100%","80%"]}
                      justifyContent={"space-between"}
                      flexDirection={"row"}
                      pt={"xl"}
                    >
                      <Button
                        width={"50%"}
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Login
                      </Button>
                      <Box>
                        <StyledLink
                          $UnderlineColor="primary"
                          onClick={() => setShowSignUp(true)}
                          style={{ cursor: "pointer" }}
                        >
                          Sign Up?
                        </StyledLink>
                      </Box>
                    </Box>
                  </Column>
                </Box>
              </Form>
            )}
          </Formik>
        </CenterBox>
      ) : (
        <SignUp />
      )}
    </>
  );
};

