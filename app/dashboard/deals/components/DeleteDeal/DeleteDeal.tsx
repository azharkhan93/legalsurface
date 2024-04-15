import { Box, Row, Button, CenterBox, Column, Text } from "@/components";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDeleteDeal } from "../../hooks/useDeleteDeal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DeleteDealData = {
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

type DeleteDealProps = {
  data?: DeleteDealData;
  onActionComplete: () => void;
};

export const DeleteDeal: React.FC<DeleteDealProps> = (
  props
) => {
  const { deleteOneEDeal, data, loading } = useDeleteDeal()

  const handleConfirm = async () => {
    try {
      const { data } = await deleteOneEDeal({
        variables: {
          where: {
            id: props.data?.id,
          },
        },
      });
      props.onActionComplete();
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <CenterBox width={"80%"} py={"xlg"} gap={"xl"}>
      <CenterBox>
        <Text variant="subHeading">Are you sure?</Text>
      </CenterBox>
      <Row gap={"l"}>
        <Button
          variant={loading ? "disabled" : "primary"}
          onClick={handleConfirm}
          disabled={loading}
        >
          Confirm
        </Button>
        <Button
          onClick={props.onActionComplete}
          variant={loading ? "disabled" : "primary"}
          disabled={loading}
        >
          Cancel
        </Button>
      </Row>
      <CenterBox>
        {loading ? (
          <FontAwesomeIcon icon={faSpinner} className="fa-spin" size="xl" />
        ) : null}
      </CenterBox>
    </CenterBox>
  );
};