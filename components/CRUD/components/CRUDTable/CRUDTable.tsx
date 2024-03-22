import { Box } from "@/components/styled";
import { BASE_COLORS } from "@/theme";
import { PaginationBar } from "../PaginationBar";
import { CRUDTableHeadingBar } from "./components/CRUDTableHeadingBar";
import { CrudTableRowItems } from "./components/CrudTableRowItems";
import { RowData } from "../../CRUD";

interface CRUDTableProps {
  data: RowData[];
  columnWidth: string;
  openUpdateModal: () => void;
}

export const CRUDTable: React.FC<CRUDTableProps> = ({
  data,
  columnWidth,
  openUpdateModal,
}) => {
  return (
    <Box
      bg={"white"}
      width={"100%"}
      mt={"l"}
      overflow={"hidden"}
      borderRadius={"xs"}
      boxShadow={BASE_COLORS.shadow}
    >
      <PaginationBar />
      <CRUDTableHeadingBar item={data} columnWidth={columnWidth} />
      <CrudTableRowItems
        openUpdateModal={openUpdateModal}
        data={data}
        columnWidth={columnWidth}
      />
    </Box>
  );
};
