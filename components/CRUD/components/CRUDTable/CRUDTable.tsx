import { Box } from "@/components/styled";
import { BASE_COLORS } from "@/theme";
import { CRUDTableHeadingBar } from "./components/CRUDTableHeadingBar";
import { CrudTableRowItems } from "./components/CrudTableRowItems";

export interface DataItem {
  name: string;
  website: string;
  address: string;
  status: string;
  dateTime: string;
}

interface CRUDTableProps {
  data: DataItem[];
  columnWidth: string;
}

export const CRUDTable: React.FC<CRUDTableProps> = ({ data, columnWidth }) => {
  return (
    <Box
      bg={"modalBg"}
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
