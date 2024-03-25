import { Box, Button, CenterBox, Column, Text } from "@/components";
import { Form, Formik } from "formik";
import { UpdateFormInputBox } from "@/components";
import * as Yup from "yup";

type UpdateFormValues = {
  name?: string;
  domain?: string;
  city?: string;
  state?: string;
  zip?: string;
  address?: string;
  coordinates?: string;
};

const FormSchema = Yup.object({
  name: Yup.string().required("Name Is Required"),
  domain: Yup.string().required("Domain Is Required"),
  city: Yup.string().required("City Is Required"),
  state: Yup.string().required("State is Required"),
  zip: Yup.string()
    .matches(/^[0-9]+$/, "Zip must contain only numbers")
    .required("Zip Is Required"),
  address: Yup.string().required("Address Is Required"),
});

const handleSubmit = (values: UpdateFormValues) => {
  console.log(values);
};

export const UpdateEduInstitute: React.FC<UpdateFormValues> = ({
  name,
  domain,
  city,
  state,
  zip,
  address,
  coordinates,
}) => {
  return (
    <>
      <CenterBox width={"100%"} height={"100%"}>
        <Formik
          initialValues={{
            name: name,
            domain: domain,
            city: city,
            state: state,
            zip: zip,
            address: address,
            coordinates: coordinates,
          }}
          validationSchema={FormSchema}
          onSubmit={(values, { setSubmitting }) => handleSubmit(values)}
        >
          {({ isSubmitting, errors }) => (
            <Form
              style={{
                width: "100%",
                height: "100%",
                padding: "5px",
              }}
            >
              <CenterBox width={"100%"} height={"100%"} px={"l"} py={"xxxxl"}>
                <Column width={"80%"} gap={"xl"}>
                  <Box paddingY={"s"}>
                    <Text variant="heading">Add New Edu. Institute</Text>
                  </Box>
                  <UpdateFormInputBox
                    name={"name"}
                    placeholder={"Name"}
                    label={"Name"}
                  />

                  <UpdateFormInputBox
                    name={"domain"}
                    placeholder={"Domain"}
                    label={"Domain"}
                  />
                  <UpdateFormInputBox
                    name={"city"}
                    placeholder={"City"}
                    label={"City"}
                  />
                  <UpdateFormInputBox
                    name={"state"}
                    placeholder={"State"}
                    label={"State"}
                  />
                  <UpdateFormInputBox
                    name={"zip"}
                    placeholder={"Zip"}
                    label={"Zip"}
                  />
                  <UpdateFormInputBox
                    name={"address"}
                    placeholder={"Address"}
                    label={"Address"}
                  />
                  <UpdateFormInputBox
                    name={"coordinates"}
                    placeholder={"Coordinates"}
                    label={"Coordinates"}
                  />
                  <CenterBox width={"100%"} paddingY={"s"}>
                    <Button
                      width={"60%"}
                      variant="primary"
                      type="submit"
                      onClick={() => null}
                    >
                      Add New Edu. Institute
                    </Button>
                  </CenterBox>
                </Column>
              </CenterBox>
            </Form>
          )}
        </Formik>
      </CenterBox>
    </>
  );
};

// it should have a form use formik

// it should always accept a accept a edit mode as a prop
