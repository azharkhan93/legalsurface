import { Box, Row, Button, CenterBox, Column, Text } from "@/components";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDeleteEduInstitute } from "../../hooks/useDeleteEduInstitute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type DeleteEduInstituteData = {
  name?: string;
  domain?: string;
  city?: string;
  state?: string;
  zip?: string;
  address?: string;
  coordinates?: string;
  id?: string;
};

type DeleteEduInstituteProps = {
  data?: DeleteEduInstituteData;
  onActionComplete: () => void;
};

export const DeleteEduInstitute: React.FC<DeleteEduInstituteProps> = (
  props
) => {
  const { deleteOneEduInstitute, data, loading } = useDeleteEduInstitute();

  const handleConfirm = async () => {
    try {
      const { data } = await deleteOneEduInstitute({
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
