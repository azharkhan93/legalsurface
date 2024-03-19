import React from "react";
import { CRUDTableHeadingBar } from "../CRUDTableHeadingBar";
import { Row } from "@/components/styled";
import { DataItem } from "../../CRUDTable";

interface CrudHeadingProps {
    data: DataItem[];
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
