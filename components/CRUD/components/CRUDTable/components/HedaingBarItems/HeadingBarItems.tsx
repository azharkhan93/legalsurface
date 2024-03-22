import React from "react";
import { CRUDTableHeadingBar } from "../CRUDTableHeadingBar";
import { Row } from "@/components/styled";
import { RowData } from "@/components/CRUD";

interface CrudHeadingProps {
  data: RowData[];
}

export const HeadingBarItems: React.FC<CrudHeadingProps> = ({ data }) => {
  return (
    <Row bg={"greyLight"}>
      {data.map((item, index) => (
        <CRUDTableHeadingBar key={index} item={[item]} columnWidth={""} />
      ))}
    </Row>
  );
};
