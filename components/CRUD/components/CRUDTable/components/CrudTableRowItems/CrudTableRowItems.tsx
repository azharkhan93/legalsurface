import { RowData } from "@/components/CRUD";
import { CrudTableRowItem } from "../CrudTableRowItem ";
interface CrudTableRowItemsProps {
  data: RowData[];
  openUpdateModal: () => void;
  openDeleteModal: () => void;
  handleUpdateFormValues: (data: {}) => void;
  headings: string[];
  widths: number[];
}

export const CrudTableRowItems: React.FC<CrudTableRowItemsProps> = ({
  data,
  openUpdateModal,
  openDeleteModal,
  handleUpdateFormValues,
  headings,
  widths,
}) => {
  return (
    <>
      {data.map((rowData, index) => (
        <CrudTableRowItem
          widths={widths}
          headings={headings}
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
