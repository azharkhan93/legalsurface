import { Box, Button, CenterBox, Column, Row, Text } from "@/components";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { UpdateFormInputBox } from "@/components";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Async, { useAsync } from "react-select/async";
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
  businessName: Yup.string().required("Business Name is Required"),
  businessAddress: Yup.string().required("Business Address is Required"),
  businessLogo: Yup.string().required("Business Logo is Required"),
});

export const UpdateDeal: React.FC<UpdateDealProps> = (props) => {
  const editMode = Boolean(props.data?.id);

  const initialValues = {
    name: props.data?.name,
    // active: props.data?.active,
    image: props.data?.image,
    businessName: props.data?.business?.name,
    businessAddress: props.data?.business?.address,
    businessLogo: props.data?.business?.logo,
    dealHeading: props.data?.content?.heading,
    dealParagraph: props.data?.content?.paragraph,
    dealPointers: props.data?.content?.pointers,
    url: props.data?.url,
    type: props.data?.type,
    couponCode: props.data?.couponCode,
    startDate: props.data?.validity?.startDate,
    endDate: props.data?.validity?.endDate,
  };

  const handleSubmit = async (
    values: InitialValues,
    { setSubmitting }: FormikHelpers<InitialValues>
  ) => {
    console.log(values);
  };

  const loadOptions = (inputValue: string, callback) => {
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
                      name={"businessName"}
                      placeholder={"Business Name"}
                      label={"Business Name"}
                    />
                    <UpdateFormInputBox
                      name={"businessAddress"}
                      placeholder={"Address"}
                      label={"Address"}
                    />
                  </Row>
                  <Row gap={"xxxxl"}>
                    <UpdateFormInputBox
                      name={"businessLogo"}
                      placeholder={"Logo Url"}
                      label={"Logo"}
                    />
                    <UpdateFormInputBox
                      name={"dealHeading"}
                      placeholder={"Heading"}
                      label={"Heading"}
                    />
                  </Row>
                  <Row gap={"xxxxl"}>
                    <UpdateFormInputBox
                      name={"dealParagraph"}
                      placeholder={"Description"}
                      label={"Description"}
                    />
                    <UpdateFormInputBox
                      name={"dealPointers"}
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
