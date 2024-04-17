import { Box, CenterBox, Text } from "@/components/styled";
import { BASE_COLORS } from "@/theme";
import { PaginationBar } from "../PaginationBar";
import { CRUDTableHeadingBar } from "./components/CRUDTableHeadingBar";
import { CrudTableRowItems } from "./components/CrudTableRowItems";
import { RowData } from "../../CRUD";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface CRUDTableProps {
  data: RowData[];
  openUpdateModal: () => void;
  openDeleteModal: () => void;
  loading: boolean;
  handleUpdateFormValues: (data: {}) => void;
  headings: (string | undefined)[];
  widths: number[];
  keys: string[];
}

export const CRUDTable: React.FC<CRUDTableProps> = ({
  data,
  loading,
  openUpdateModal,
  openDeleteModal,
  handleUpdateFormValues,
  headings,
  widths,
  keys,
}) => {
  return (
    <Box
      bg={"white"}
      width={"100%"}
      mt={"l"}
      overflow={"hidden"}
      borderRadius={"xs"}
    >
      <PaginationBar />
      {loading ? (
        <CenterBox width={"100%"} bg={"greyLight"} py={"xxxxl"}>
          <CenterBox bg={"transparent"} width={"50%"}>
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin"
              size="3x"
              color={`${BASE_COLORS.primary}`}
            />
          </CenterBox>
        </CenterBox>
      ) : (
        <>
          <CRUDTableHeadingBar headings={headings} widths={widths} />
          <CrudTableRowItems
            keys={keys}
            widths={widths}
            openDeleteModal={openDeleteModal}
            openUpdateModal={openUpdateModal}
            data={data}
            handleUpdateFormValues={handleUpdateFormValues}
          />
        </>
      )}
    </Box>
  );
};
