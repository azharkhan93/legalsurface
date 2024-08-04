import { Box, Button, CenterBox, Column, Text, UpdateForm } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type UpdateFormValues = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

type UpdateComponentProps = {
  data?: UpdateFormValues;
  onActionComplete: () => void;
};

const FormSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only numbers")
    .required("Phone number is Required"),
  message: Yup.string().required("Message is Required"),
});

export const Test: React.FC<UpdateComponentProps> = ({
  data,
  onActionComplete,
}) => {
  const initialValues: UpdateFormValues = {
    name: data?.name || "",
    email: data?.email || "",
    phone: data?.phone || "",
    message: data?.message || "",
  };

  const handleSubmit = async (
    values: UpdateFormValues,
    { setSubmitting }: FormikHelpers<UpdateFormValues>
  ) => {
    // Implement the form submission logic here
    setSubmitting(false);
    onActionComplete();
  };

  return (
    <>
      {/* <CenterBox width={"100%"} height={"100%"} border={"2px solid green"}> */}
        <Formik<UpdateFormValues>
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form
              style={{
                width: "100%",
                height: "100%",
                
                border: "2px solid red",
              }}
            >
              <CenterBox width={"100%"} height={"100%"}  >
                <Column width={"70%"} gap={"xl"} border={"2px solid white"} py={"l"} px={"xl"} borderBottomLeftRadius={"m"} bg={"secondary"}>
                  <Box paddingY={"s"}>
                    <Text variant={"subHeading"} color={"primary"}>
                     Enter Your Details
                    </Text>
                  </Box>
                  <UpdateForm
                    name={"name"}
                    placeholder={"Name"}
                    label={"Name"}
                  />
                  <UpdateForm
                    name={"email"}
                    placeholder={"Email"}
                    label={"Email"}
                  />
                  <UpdateForm
                    name={"phone"}
                    placeholder={"Phone Number"}
                    label={"Phone Number"}
                  />
                  <UpdateForm
                    name={"message"}
                    placeholder={"Message"}
                    label={"Message"}
                  />
                  <CenterBox width={"100%"} paddingY={"s"}>
                    <Button
                      width={"100%"}
                      variant={isSubmitting ? `disabled` : "primary"}
                      type="submit"
                      disabled={isSubmitting}
                      
                    >
                      {isSubmitting ? (
                        <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                      ) : null}
                      Submit
                    </Button>
                  </CenterBox>
                </Column>
              </CenterBox>
            </Form>
          )}
        </Formik>
      {/* </CenterBox> */}
    </>
  );
};
