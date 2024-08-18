"use client";
import { useRouter } from "next/navigation";
import { useAuth } from '@/contexts/AuthContext/AuthContext';
import axios from "axios";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, CenterBox, Column, StyledLink, UpdateForm } from "@/components";
import { SignUp } from "../SignUp";

type FormValues = {
  email: string;
  password: string;
};

type LoginProps = {
  onClose: () => void;  
}

const FormSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required")
});

export const Login: React.FC<LoginProps> = ({ onClose }) => {
  const router = useRouter();
  const { setUser } = useAuth();
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpSuccess = () => {
    setShowSignUp(false); 
  };

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post("/api/login", values);
      const { token, userId, email } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userInfo", JSON.stringify({ id: userId, email }));
      
      setUser({ id: userId, email });
      
      router.push('/');
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {!showSignUp ? (
        <CenterBox width={["100%", "80%"]} height={"100%"} p={"m"}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={FormSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await handleSubmit(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: "100%", height: "100%" }}>
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
                    <CenterBox
                      width={"90%"}
                      gap={"m"}
                      justifyContent={"center"}
                    >
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
                    <Box width={["97%", "80%"]}>
                      <UpdateForm
                        name={"email"}
                        placeholder={"Enter Email"}
                        label={"Email"}
                        type="email"
                      />
                    </Box>
                    <Box width={["97%", "80%"]}>
                      <UpdateForm
                        name={"password"}
                        placeholder={"Your Password"}
                        label={"Password"}
                        type="password"
                      />
                    </Box>
                    <Box
                      width={["97%", "80%"]}
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
                         New User Sign Up?
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
        <SignUp onClose={onClose} onSignUpSuccess={handleSignUpSuccess} />
      )}
    </>
  );
};






