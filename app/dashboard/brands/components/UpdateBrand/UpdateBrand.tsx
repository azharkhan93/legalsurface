import { Box, Button, CenterBox, Column, Text, Row } from "@/components";
import { Form, Formik, FormikHelpers } from "formik";
import { UpdateFormInputBox, UpdateFormFileInputBox } from "@/components";
import * as Yup from "yup";
import { useCreateOneBrand } from "../../hooks/useCreateOneBrand";
import { useUpdateOneBrand } from "../../hooks/useUpdateOneBrand";
import { ToggleButton } from "@/components/ToggleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ToggleButtonForm } from "@/components/ToggleButtonForm";

type UpdateFormValues = {
  id?: string;
  name?: string;
  active?: boolean;
  image?: string;
  featured?: boolean;
};

type UpdateComponentProps = {
  data?: UpdateFormValues;
  onActionComplete: () => void;
};

const FormSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  image: Yup.string().required("Image URL is Required"),
});

export const UpdateBrand: React.FC<UpdateComponentProps> = (props) => {
  const [showOnApp, setShowOnApp] = useState(false);
  const [featured, setFeatured] = useState(false);

  const handleShowOnAppToggle = () => {
    setShowOnApp((prevShowOnApp) => {
      const newState = !prevShowOnApp;
      console.log("Show On App Toggle State:", newState);
      return newState;
    });
  };
  
  const handleFeaturedToggle = () => {
    setFeatured((prevFeatured) => {
      const newState = !prevFeatured;
      console.log("Featured Toggle State:", newState);
      return newState;
    });
  };

  const editMode = Boolean(props.data?.id);

  const initialValues = {
    id: props.data?.id,
    name: props.data?.name,
    image: props.data?.image,
    featured: props.data?.featured || false,
  };

  const { createOneBrand, data: creationData } = useCreateOneBrand();
  const { updateOneBrand, data: updationData } = useUpdateOneBrand();

  const handleSubmit = async (
    values: UpdateFormValues,
    { setSubmitting }: FormikHelpers<UpdateFormValues>
  ) => {
    try {
      setSubmitting(true);
      if (!editMode) {
        const { data } = await createOneBrand({
          variables: {
            data: {
              name: values.name,
              image: values.image,
              
              //  featured: featured,
              //  active: showOnApp,
                featured: values.featured,
            },
          },
        });
      } else {
        const { data } = await updateOneBrand({
          variables: {
            data: {
              name: { set: values.name },
              image: { set: values.image },
              // featured: { set: featured },
              // active: { set: showOnApp },
              
                featured: { set: values.featured },
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
          {({ isSubmitting, errors, values }) => (
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
                      {`${editMode ? "Update" : "Insert"} Record`}
                    </Text>
                  </Box>
                  {editMode ? (
                    <UpdateFormInputBox
                      name={"ID"}
                      placeholder={"ID"}
                      value={initialValues.id}
                    />
                  ) : null}

                  {/* <UpdateFormInputBox name={"ID"} placeholder={"ID"}
                  value={initialValues.id} 
                  /> */}
                  <UpdateFormInputBox
                    name={"name"}
                    placeholder={"Name"}
                    label={"Brand Name"}
                  />

                  <UpdateFormInputBox
                    name={"image"}
                    placeholder={"image url"}
                  />

                  <UpdateFormFileInputBox
                    name={"Brand Logo"}
                    label={"Brand Logo:"}
                  />
                  <Row border={"1px solid red"} width={"100%"} gap={"xxl"}>
                    <ToggleButtonForm
                      label="Show on App"
                      name="active"
                    />
                    <ToggleButtonForm
                      label="Set as Featured"
                      name="featured"
                    />
                    {/* <ToggleButton buttonText="Show On App" />
                 <ToggleButton buttonText="Featured" /> */}
                  </Row>

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
                      {`${editMode ? "Update" : "Save"} Details`}
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
