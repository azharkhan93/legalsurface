"use client";
import { useState } from "react";
import axios from "axios";
import { Box, Button, CenterBox, Column, StyledLink, UpdateForm } from "@/components";
import { Formik, Form, Field } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
};

export const SignUp = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (values: FormValues, resetForm: () => void) => {
    try {
      const response = await axios.post('/api/signup', values);
      console.log("Server response:", response.data);
      resetForm();
      // Handle success (e.g., redirect to login page or show success message)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <>
      {showSignUp && (
        <CenterBox width={["100%", "90%"]} height={"100%"} p={"m"}>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmpassword: "",
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleSubmit(values, resetForm);
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
                    <Box width={["100%", "80%"]}>
                      <UpdateForm
                        name={"username"}
                        placeholder={"Username"}
                        label={"Username"}
                        type="text"
                      />
                    </Box>
                    <Box width={["100%", "80%"]}>
                      <UpdateForm
                        name={"email"}
                        placeholder={"Enter Email"}
                        label={"Email"}
                        type="email"
                      />
                    </Box>
                    <Box width={["100%", "80%"]} position="relative">
                      <UpdateForm
                        name={"password"}
                        placeholder={"Your Password"}
                        label={"Password"}
                        type={showPassword ? "text" : "password"}
                      />
                      <Box
                        position="absolute"
                        top="53%"
                        right="10px"
                        // transform="translateY(-50%)"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer", }}
                      >
                        {showPassword ? <FaEyeSlash size={23} fill="gray" /> : <FaEye size={23} fill="gray" />}
                      </Box>
                    </Box>
                    <Box width={["100%", "80%"]} position="relative">
                      <UpdateForm
                        name={"confirmpassword"}
                        placeholder={"Confirm Password"}
                        label={"Confirm Password"}
                        type={showConfirmPassword ? "text" : "password"}
                      />
                      <Box
                      // border={"2px solid red"}
                        position="absolute"
                        top="53%"
                        right="10px"
                        // transform="translateY(-50%)"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{ cursor: "pointer",}}
                      >
                        {showConfirmPassword ? <FaEyeSlash size={23} fill="gray" /> : <FaEye size={23} fill="gray"  />}
                      </Box>
                    </Box>
                    <Box
                      width={["100%", "80%"]}
                      justifyContent={"space-between"}
                      flexDirection={"row"}
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



