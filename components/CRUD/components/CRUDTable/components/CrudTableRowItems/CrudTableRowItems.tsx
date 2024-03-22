import { RowData } from "@/components/CRUD";
import { CrudTableRowItem } from "../CrudTableRowItem ";
interface CrudTableRowItemsProps {
  data: RowData[];
  columnWidth: string;
}

export const CrudTableRowItems: React.FC<CrudTableRowItemsProps> = ({
  data,
  columnWidth,
}) => {
  return (
    <>
      {data.map((rowData, index) => (
        <CrudTableRowItem
          key={index}
          rowItem={rowData}
          columnWidth={columnWidth}
        />
      ))}
    </>
  );
};
