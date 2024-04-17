import {
  Box,
  Button,
  CenterBox,
  Column,
  Text,
  UpdateFormFileInputBox,
  UpdateFormInputBox,
  UpdateFormListInputBox,
} from "@/components";
import { Form, Formik } from "formik";
import AsyncSelect from "react-select/async";
import * as Yup from "yup";
import { useGetProductCategories } from "../../hooks/useGetProductCategories";
import { useMemo } from "react";

type UpdateFormValues = {
  id?: string;
  name?: string;
  preferredGender?: string;
  parentCategory?: string;
  productCategoryIcon?: string;
  featuredImage?: string;
};

type UpdateComponentProps = {
  data?: UpdateFormValues;
  onActionComplete: () => void;
};

const FormSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  image: Yup.string().required("Image is Required"),
});

type categoryType = {
  [key: string]: string;
};

export const UpdateProductCategories: React.FC<UpdateComponentProps> = (
  props
) => {
  const { data: allCats } = useGetProductCategories();

  const allCategories: categoryType[] = useMemo(() => {
    if (!allCats) return [];
    return allCats.productCategories.map((obj: any) => ({
      label: obj.name,
      value: obj.parentId,
    }));
  }, [allCats]);

  const editMode = Boolean(props.data?.id);

  const initialValues = {
    name: props.data?.name,
    preferredGender: props.data?.preferredGender,
    productCategoryIcon: props.data?.productCategoryIcon,
    featuredImage: props.data?.featuredImage,
  };

  const handleSubmit = (values: UpdateFormValues) => {
    console.log(values);
  };

  return (
    <>
      <CenterBox width={"100%"} height={"100%"}>
        <Formik
          validationSchema={FormSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => handleSubmit(values)}
        >
          {({ isSubmitting, setFieldValue }) => (
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
                    name={"preferredGender"}
                    placeholder={"Preferred Gender"}
                    label={"Preferred Gender"}
                    listOptions={["Male", "Female", "All"]}
                  />
                  <UpdateFormListInputBox
                    name={"parentCategory"}
                    placeholder={"Parent Category"}
                    label={"Parent Category"}
                    listOptions={[]}
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
