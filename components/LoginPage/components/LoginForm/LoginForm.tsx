"use client";
import { useState } from "react";
import { Box, Button, CenterBox, Column, StyledLink, Text } from "@/components";
import { Formik, Form } from "formik";
import { LoginFormInputBox } from "./components/LoginFormInputBox";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    localStorage.setItem('userEmail', values.email);
    localStorage.setItem('userPassword', values.password);

    const storedPassword = localStorage.getItem('userPassword');

    try {
      if (storedPassword === values.password) {
        setIsVerified(true);
        router.push('/dashboard/edu-institutes');
      } else {
        setIsVerified(false);
        router.push('/dashboard/product-categories');
      }
    } catch (error) {
      console.error('Error occurred during user verification:', error);
    }
  }

  return (
    <CenterBox width={"100%"} height={"100%"} p={"m"}>
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
              padding: "5px",
            }}
          >
            <Box
              width={"100%"}
              height={"100%"}
              alignItems={"center"}
              py={"xl"}
              gap={"xl"}
            >
              <Box
                width={"100%"}
                height={"20%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CenterBox width={"90%"} gap={"m"} justifyContent={"center"}>
                  <Box
                    width={"300px"}
                    height={"300px"}
                    style={{
                      backgroundImage: `url("/assets/svgs/logo-transparent.svg")`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></Box>
                </CenterBox>
              </Box>
              <Column
                width={"100%"}
                height={"60%"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"xxl"}
              >
                <Box width={"90%"}>
                  <LoginFormInputBox
                    name={"email"}
                    placeholder={"Your Email"}
                    label={"Email"}
                  />
                </Box>
                <Box width={"90%"}>
                  <LoginFormInputBox
                    name={"password"}
                    placeholder={"Your Password"}
                    label={"Password"}
                    type="password"
                  />
                </Box>
                <Box width={"90%"}>
                  <Button
                    width={"50%"}
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Box>
              </Column>
              <Box
                width={"100%"}
                height={"20%"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box width={"90%"}>
                  <StyledLink $UnderlineColor="primary">
                    Forgot Password?
                  </StyledLink>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </CenterBox>
  );
};


// login