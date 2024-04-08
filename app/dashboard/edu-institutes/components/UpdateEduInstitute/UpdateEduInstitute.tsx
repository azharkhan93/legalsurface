import { Box, Button, CenterBox, Column, Text } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import { UpdateFormInputBox } from "@/components";
import * as Yup from "yup";
import { useCreateOneEduInstitute } from "../../hooks/useCreateOneEduInstitute";
import { useUpdateOneEduInsitute } from "../../hooks/useUpdateOneEduInstitute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type UpdateFormValues = {
  name?: string;
  domain?: string;
  city?: string;
  state?: string;
  zip?: string;
  address?: string;
  coordinates?: string;
  id?: string;
};

type UpdateComponentProps = {
  data?: UpdateFormValues;
  onActionComplete: () => void;
};

const FormSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  domain: Yup.string().required("Domain is Required"),
  // city: Yup.string().required("City Is Required"),
  // state: Yup.string().required("State is Required"),
  // zip: Yup.string()
  //   .matches(/^[0-9]+$/, "Zip must contain only numbers")
  //   .required("Zip Is Required"),
  // address: Yup.string().required("Address Is Required"),
});

export const UpdateEduInstitute: React.FC<UpdateComponentProps> = (props) => {
  const editMode = Boolean(props.data?.id);

  const initialValues = {
    name: props.data?.name,
    domain: props.data?.domain,
    city: props.data?.city,
    state: props.data?.state,
    zip: props.data?.zip,
    address: props.data?.address,
    coordinates: props.data?.coordinates,
  };

  const { createOneEduInstitute, data: creationData } =
    useCreateOneEduInstitute();
  const { updateOneEduInstitute, data: updationData } =
    useUpdateOneEduInsitute();

  const handleSubmit = async (
    values: UpdateFormValues,
    { setSubmitting }: FormikHelpers<UpdateFormValues>
  ) => {
    try {
      setSubmitting(true);
      if (!editMode) {
        const { data } = await createOneEduInstitute({
          variables: {
            data: {
              name: values.name,
              domain: values.domain,
              city: values.city,
              state: values.state,
              zip: values.zip,
              address: values.address,
            },
          },
        });
      } else {
        const { data } = await updateOneEduInstitute({
          variables: {
            data: {
              name: { set: values.name },
              domain: { set: values.domain },
              city: { set: values.city },
              state: { set: values.state },
              zip: { set: values.zip },
              address: { set: values.address },
            },
            where: {
              id: props.data?.id,
            },
          },
        });
      }
      props.onActionComplete();
    } catch (error) {
      alert(`Error: ${error}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <CenterBox width={"100%"} height={"100%"}>
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
                padding: "5px",
              }}
            >
              <CenterBox width={"100%"} height={"100%"} px={"l"} py={"xxxxl"}>
                <Column width={"80%"} gap={"xl"}>
                  <Box paddingY={"s"}>
                    <Text variant="heading">
                      {`${editMode ? "Update" : "Add"} Edu. Institute`}
                    </Text>
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
                      variant={isSubmitting ? `disabled` : "primary"}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                      ) : null}
                      {`${editMode ? "Update" : "Add"} Edu. Institute`}
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
