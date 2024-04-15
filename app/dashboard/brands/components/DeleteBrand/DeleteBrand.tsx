import { Box, Row, Button, CenterBox, Column, Text } from "@/components";
import { useDeleteBrand } from "../../hooks/useDeleteOneBrand";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DeleteBrandData = {
  id?: string;
  name: string;
  active: boolean;
  createdAt: string; 
  updatedAt: string;
  image: string;
  featured: boolean;
    
  };
  

type DeleteBrandProps = {
  data?: DeleteBrandData;
  onActionComplete: () => void;
};

export const DeleteBrand: React.FC<DeleteBrandProps> = (
  props
) => {
  const { deleteOneBrand, data, loading } = useDeleteBrand();

  const handleConfirm = async () => {
    try {
      const { data } = await deleteOneBrand({
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