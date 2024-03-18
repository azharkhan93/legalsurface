import {  CenterBox } from "@/components/styled";
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
        <CenterBox
        bg={"modalBg"}
        height = {"76vh"}
          // width = {tableWidth[0]}
        width={"98%"}
        mt = {"l"}
        overflow ={"hidden"}
        borderRadius = {"xs"}
        boxShadow={BASE_COLORS.shadow}
        
>
<CRUDTableHeadingBar item={data} columnWidth={columnWidth} />

    
<CrudTableRowItems data={data} columnWidth = {columnWidth} />
    
          

        </CenterBox>




    );
};

