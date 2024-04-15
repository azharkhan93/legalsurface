import { Box, Button, CenterBox, Column, Row, Text } from "@/components";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { UpdateFormInputBox } from "@/components";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Async, { useAsync } from "react-select/async";
import { useCreateOneDeal } from "../../hooks/useCreateOneDeal";
import { useUpdateOneDeal } from "../../hooks/useUpdateOneDeal";
import AsyncSelect from "react-select/async";

type DealValues = {
  id?: string;
  name: string;
  //   active: Boolean;
  image: string;
  business: { name: string; address: string; logo: string };
  content: { heading: string; paragraph: string; pointers: string };
  type: "WITH_COUPON" | "WITHOUT_COUPON";
  url: string;
  couponCode: string;
  validity: { startDate: string; endDate: string };
};

type Coupon = {
  [key: string]: string;
};

const Coupon: Coupon[] = [
  { label: "With Coupon", value: "WITH_COUPON" },
  { label: "Without Coupon", value: "WITHOUT_COUPON" },
];

type InitialValues = {
  [key: string]: string | undefined;
};

type UpdateDealProps = {
  data?: DealValues;
  onActionComplete: () => void;
};

const FormSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  image: Yup.string().required("Image is Required"),
  // businessName: Yup.string().required("Business Name is Required"),
  // businessAddress: Yup.string().required("Business Address is Required"),
  // businessLogo: Yup.string().required("Business Logo is Required"),
});

export const UpdateDeal: React.FC<UpdateDealProps> = (props) => {
  const editMode = Boolean(props.data?.id);

  const initialValues: DealValues = {
    id: props.data?.id,
    name: props.data?.name || "", 
    image: props.data?.image || "", 
    business: {
      name: props.data?.business?.name || "",
      address: props.data?.business?.address || "", 
      logo: props.data?.business?.logo || "", 
    },
    content: {
      heading: props.data?.content?.heading || "", 
      paragraph: props.data?.content?.paragraph || "", 
      pointers: props.data?.content?.pointers || "", 
    },
    type: props.data?.type || "WITH_COUPON", 
    url: props.data?.url || "", 
    couponCode: props.data?.couponCode || "", 
    validity: {
      startDate: props.data?.validity?.startDate || "", 
      endDate: props.data?.validity?.endDate || "", 
    },
  };
  

  const { createOneDeal, data: creationData } = useCreateOneDeal();
  const { updateOneDeal, data: updationData } = useUpdateOneDeal();

  const handleSubmit = async (
    values: DealValues,
    { setSubmitting }: FormikHelpers<DealValues>
  ) => {
    console.log(values);
    try {
      setSubmitting(true);
      if (!editMode) {
      } else {
        const { data } = await updateOneDeal({
          variables: {
            data: {
              name: { set: values.name },
              image: { set: values.image },
              business: {
                set: {
                  name: values.business ? values.business.name : "",
                  address: values.business ? values.business.address : "",
                  logo: values.business ? values.business.logo : "",
                },
              },
              content: {
                set: {
                  heading: values.content.heading,
                  paragraph: values.content.paragraph,
                  pointers: values.content.pointers,
                },
              },
              url: { set: values.url },
              couponCode: { set: values.couponCode },
              validity: {
                set: {
                  startDate: values.validity.startDate,
                  endDate: values.validity.endDate,
                },
              },
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

  // const handleSubmit = async (
  //   values: InitialValues,
  //   { setSubmitting }: FormikHelpers<InitialValues>
  // ) => {
  //   console.log(values);
  // };

  const loadOptions = (inputValue: string, callback: (options: Coupon[]) => void) => {
    setTimeout(() => {
      const filteredOptions = Coupon.filter((option) =>
        option.value.includes(inputValue)
      );
      callback(filteredOptions);
    }, 1000);
  };
  

  return (
    <>
      <CenterBox width={"100%"} height={"100%"}>
        <Formik<DealValues>
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, setFieldValue }) => (
            <Form
              style={{
                width: "100%",
                height: "100%",
                padding: "5px",
              }}
            >
              <CenterBox width={"100%"} height={"100%"} px={"l"} py={"xxxxl"}>
                <Column width={"90%"} gap={"xl"}>
                  <Box paddingY={"s"}>
                    <Text variant="heading">
                      {`${editMode ? "Update" : "Add"} Deal`}
                    </Text>
                  </Box>
                  <Row gap={"xxxxl"}>
                    <UpdateFormInputBox
                      name={"name"}
                      placeholder={"Name"}
                      label={"Name"}
                    />
                    <UpdateFormInputBox
                      name={"image"}
                      placeholder={"Image"}
                      label={"Image"}
                    />
                  </Row>
                  <Row gap={"xxxxl"}>
                    <UpdateFormInputBox
                      name={"business.name"}
                      placeholder={"Business Name"}
                      label={"Business Name"}
                    />
                    <UpdateFormInputBox
                      name={"business.address"}
                      placeholder={"Address"}
                      label={"Address"}
                    />
                  </Row>
                  <Row gap={"xxxxl"}>
                    <UpdateFormInputBox
                      name={"business.logo"}
                      placeholder={"Logo Url"}
                      label={"Logo"}
                    />
                    <UpdateFormInputBox
                      name={"content.heading"}
                      placeholder={"Heading"}
                      label={"Heading"}
                    />
                  </Row>
                  <Row gap={"xxxxl"}>
                    <UpdateFormInputBox
                      name={"content.paragraph"}
                      placeholder={"Description"}
                      label={"Description"}
                    />
                    <UpdateFormInputBox
                      name={"content.dealPointers"}
                      placeholder={"Pointers"}
                      label={"Pointers"}
                    />
                  </Row>
                  <Row gap={"xxxxl"}>
                    <UpdateFormInputBox
                      name={"url"}
                      placeholder={"Url"}
                      label={"Url"}
                    />
                    <UpdateFormInputBox
                      name={"couponCode"}
                      placeholder={"Coupon Code"}
                      label={"Coupon Code"}
                    />
                  </Row>
                  <Row gap={"xxxxl"} alignItems={"end"}>
                    <UpdateFormInputBox
                      name={"startDate"}
                      placeholder={"Start Date"}
                      label={"Start Date"}
                    />
                    {/* <UpdateFormInputBox
                      name={"endDate"}
                      placeholder={"End Date"}
                      label={"End Date"}
                    /> */}
                    <Box width={"100%"}>
                      <AsyncSelect
                        name="type"
                        cacheOptions
                        defaultOptions
                        loadOptions={loadOptions}
                        onChange={(option) =>
                          setFieldValue("type", option?.value || "")
                        }
                      />
                    </Box>
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
                      {`${editMode ? "Update" : "Add"} Deal`}
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
