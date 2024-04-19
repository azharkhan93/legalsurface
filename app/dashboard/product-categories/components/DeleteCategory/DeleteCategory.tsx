import { Box, Row, Button, CenterBox, Column, Text } from "@/components";
import { useDeleteCategory } from "../../hooks/useDeleteOneCategory";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DeleteCategoryData = {
  id?: string;
  name?: string;
  preferredGender?: string;
  parentCategory?: string;
  productCategoryIcon?: string;
  featuredImage?: string;
};

type DeleteCategoryProps = {
  data?: DeleteCategoryData;
  onActionComplete: () => void;
};

export const DeleteCategory: React.FC<DeleteCategoryProps> = (props) => {
  const { deleteOneProductCategory, data, loading } = useDeleteCategory();

  const handleConfirm = async () => {
    try {
      const { data } = await deleteOneProductCategory({
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
