import {
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  Text,
  UpdateFormFileInputBox,
  UpdateFormInputBox,
  UpdateFormListInputBox,
} from "@/components";
import { Form, Formik } from "formik";

type UpdateFormValues = {
  name?: string;
  prefferedGender?: string;
  parentCategory?: string;
  productCategoryIcon?: string;
  featuredImage?: string;
};

const handleSubmit = (values: UpdateFormValues) => {
  console.log(values);
};

export const UpdateProductCategories: React.FC<UpdateFormValues> = ({
  name,
  prefferedGender,
  parentCategory,
  productCategoryIcon,
  featuredImage,
}) => {
  return (
    <>
      <CenterBox width={"100%"} height={"100%"}>
        <Formik
          initialValues={{
            name: name,
            prefferedGender: prefferedGender,
            parentCategory: parentCategory,
            productCategoryIcon: productCategoryIcon,
            featuredImage: featuredImage,
          }}
          onSubmit={(values, { setSubmitting }) => handleSubmit(values)}
        >
          {({ isSubmitting }) => (
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
                    <Text variant="heading">Add New Category</Text>
                  </Box>
                  <UpdateFormInputBox
                    name={"name"}
                    placeholder={"Category Name"}
                    label={"Name"}
                    type="text"
                  />
                  <UpdateFormListInputBox
                    name={"prefferedGender"}
                    placeholder={"Preffered Gender"}
                    label={"Preffered Gender"}
                    listOptions={["Male", "Female", "All"]}
                  />
                  <UpdateFormListInputBox
                    name={"parentCategory"}
                    placeholder={"Parent Category"}
                    label={"Parent Category"}
                    listOptions={["Shoes", "Shirts", "Pants"]}
                  />
                  <UpdateFormFileInputBox
                    name={"productCategoryIcon"}
                    label={"Product Category Icon"}
                  />
                  <UpdateFormFileInputBox
                    name={"featuredImage"}
                    label={"Featured Image"}
                  />
                  <CenterBox width={"100%"} paddingY={"s"}>
                    <Button
                      width={"60%"}
                      variant="primary"
                      type="submit"
                      onClick={() => null}
                    >
                      Add New Category
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

// it should have a form

// it should always accept a accept a edit mode as a prop
