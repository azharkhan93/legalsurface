import { Box } from "@/components/styled";
import { BASE_COLORS } from "@/theme";
import { PaginationBar } from "../PaginationBar";
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
  openUpdateModal: () => void; 
}

export const CRUDTable: React.FC<CRUDTableProps> = ({ data, columnWidth, openUpdateModal }) => {
 

  return (
    <Box
      bg={"modalBg"}
      width={"100%"}
      mt={"l"}
      overflow={"hidden"}
      borderRadius={"xs"}
      boxShadow={BASE_COLORS.shadow}
    >
      <PaginationBar />
      <CRUDTableHeadingBar item={data} columnWidth={columnWidth} />

      <CrudTableRowItems openUpdateModal={openUpdateModal} data={data} columnWidth={columnWidth}   />
    </Box>
  );
};

