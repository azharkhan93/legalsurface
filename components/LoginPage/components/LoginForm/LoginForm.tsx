"use client";
import { useState } from "react";
import { Box, Button, CenterBox, Column, StyledLink, Text } from "@/components";
import { Formik, Form } from "formik";
import { LoginFormInputBox } from "./components/LoginFormInputBox";
import { useAdminLogin } from "../../hooks/useAdminLogin";
import Swal from "sweetalert2";

type FormValues = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const { adminLogin, loading, error, data, postLogin } = useAdminLogin();

  const handleSubmit = async (values: FormValues) => {
    try {
      Swal.fire({
        title: "Logging you in",
        text: "Please wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const { data } = await adminLogin({
        variables: {
          data: {
            username: values.username,
            password: values.password,
            deviceModel: "null",
            deviceToken: "null",
            platform: "ANDROID",
          },
        },
      });
      Swal.close();

      if (data) postLogin(data.adminLogin.accessToken);
    } catch (e: any) {
      Swal.close();
      if (e.graphQLErrors[0].message === "undefined") {
        Swal.fire({
          title: `Wrong Email or Password`,
          text: "Please check your credentials and try again",
        });
      } else if (e.graphQLErrors[0].message === "User not found") {
        Swal.fire({
          title: `User Not Found`,
          text: "Please get access and try again",
        });
      } else {
        Swal.fire({
          title: `Something went wrong`,
          text: "Please try again later",
        });
      }
    }
  };

  return (
    <CenterBox width={"100%"} height={"100%"} p={"m"}>
      <Formik
        initialValues={{
          username: "",
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
                    name={"username"}
                    placeholder={"Username"}
                    label={"Username"}
                    type="text"
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
