"use client";

import { useState } from "react";
import { Box, Button, CenterBox, Column, StyledLink, Text, UpdateForm } from "@/components";
import { Formik, Form } from "formik";


type FormValues = {
  username: string;
  password: string;
};

export const Login = () => {
  const handleSubmit = async (values: FormValues) => {
    // Your form submission logic here
    console.log("Form values:", values);
  };

  return (
    <CenterBox width={"80%"} height={"100%"} p={"m"}>
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
              
            }}
          >
            <Box
            // border={"2px solid green"}
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
                <Box width={"80%"}>
                  <UpdateForm
                    name={"username"}
                    placeholder={"Username"}
                    label={"Username"}
                    type="text"
                  />
                </Box>
                <Box width={"80%"}>
                  <UpdateForm
                    name={"password"}
                    placeholder={"Your Password"}
                    label={"Password"}
                    type="password"
                  />
                </Box>
                <Box width={"80%"} justifyContent={"space-between"} flexDirection={"row"} 
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
                  <Box >
                  <StyledLink $UnderlineColor="primary">
                    Sign Up?
                  </StyledLink>
                </Box>
                </Box>
              </Column>
              {/* <Box
                width={"100%"}
                height={"20%"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                
              </Box> */}
            </Box>
          </Form>
        )}
      </Formik>
    </CenterBox>
  );
};
