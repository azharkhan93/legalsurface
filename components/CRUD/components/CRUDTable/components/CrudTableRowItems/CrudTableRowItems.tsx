
import { DataItem } from "../../CRUDTable";
import { CrudTableRowItem } from "../CrudTableRowItem ";
interface CrudTableRowItemsProps {
  data: DataItem[] 
  columnWidth: string;
  openUpdateModal: () => void;
}

export const CrudTableRowItems: React.FC<CrudTableRowItemsProps> = ({ data, columnWidth, openUpdateModal }) => {

  return (
    <>
      {data.map((item, index) => (
        <CrudTableRowItem key={index} item={item} columnWidth = {columnWidth}  openUpdateModal={openUpdateModal}  />
      ))}
    </>
  );
};

// now we will forward that updateModalprop to crudtablrowitem