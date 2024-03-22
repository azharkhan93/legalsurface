import { Box } from "@/components/styled";
import { BASE_COLORS } from "@/theme";
import { CRUDTableHeadingBar } from "./components/CRUDTableHeadingBar";
import { CrudTableRowItems } from "./components/CrudTableRowItems";
import { RowData } from "../../CRUD";

interface CRUDTableProps {
  data: RowData[];
  columnWidth: string;
}

export const CRUDTable: React.FC<CRUDTableProps> = ({ data, columnWidth }) => {
  return (
    <Box
      bg={"white"}
      width={"100%"}
      mt={"l"}
      overflow={"hidden"}
      borderRadius={"xs"}
      boxShadow={BASE_COLORS.shadow}
    >
      <CRUDTableHeadingBar item={data} columnWidth={columnWidth} />
      <CrudTableRowItems data={data} columnWidth={columnWidth} />
    </Box>
  );
};
