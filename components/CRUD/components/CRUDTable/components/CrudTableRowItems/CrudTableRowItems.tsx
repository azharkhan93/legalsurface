import { RowData } from "@/components/CRUD";
import { CrudTableRowItem } from "../CrudTableRowItem ";
interface CrudTableRowItemsProps {
  data: RowData[];
  openUpdateModal: () => void;
  openDeleteModal: () => void;
  handleUpdateFormValues: (data: {}) => void;
  widths: number[];
  keys: string[];
}

export const CrudTableRowItems: React.FC<CrudTableRowItemsProps> = ({
  data,
  openUpdateModal,
  openDeleteModal,
  handleUpdateFormValues,
  widths,
  keys,
}) => {
  return (
    <>
      {data.map((rowData, index) => (
        <CrudTableRowItem
          keys={keys}
          widths={widths}
          key={index}
          rowItem={rowData}
          openUpdateModal={openUpdateModal}
          openDeleteModal={openDeleteModal}
          handleUpdateFormValues={handleUpdateFormValues}
        />
      ))}
    </>
  );
};
