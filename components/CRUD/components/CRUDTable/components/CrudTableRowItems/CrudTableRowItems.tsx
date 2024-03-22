import { RowData } from "@/components/CRUD";
import { CrudTableRowItem } from "../CrudTableRowItem ";
interface CrudTableRowItemsProps {
  data: RowData[];
  columnWidth: string;
  openUpdateModal: () => void;
}

export const CrudTableRowItems: React.FC<CrudTableRowItemsProps> = ({
  data,
  columnWidth,
  openUpdateModal,
}) => {
  return (
    <>
      {data.map((rowData, index) => (
        <CrudTableRowItem
          key={index}
          rowItem={rowData}
          columnWidth={columnWidth}
          openUpdateModal={openUpdateModal}
        />
      ))}
    </>
  );
};
