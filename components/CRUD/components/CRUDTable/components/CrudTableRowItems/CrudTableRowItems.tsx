
import { DataItem } from "../../CRUDTable";
import { CrudTableRowItem } from "../CrudTableRowItem ";
interface CrudTableRowItemsProps {
  data: DataItem[] 
  columnWidth: string
}

export const CrudTableRowItems: React.FC<CrudTableRowItemsProps> = ({ data, columnWidth }) => {

  return (
    <>
      {data.map((item, index) => (
        <CrudTableRowItem key={index} item={item} columnWidth = {columnWidth}  />
      ))}
    </>
  );
};