"use client"
import { useField } from "formik";
import { useState } from "react";
import { DropDown } from "../DropDown";

import { Text } from "../styled/Text";

export type DataType = {
  name: string | undefined;
  id: string | undefined | boolean;
};

type FormSearchableSelectProps = {
  placeholder: string;
  data: DataType[] | undefined;
  label: string;
  name: string;
};

export const FormSearchableSelect: React.FC<FormSearchableSelectProps> = ({
    placeholder,
    data,
    label,
    name,
  }) => {
    const [field, meta, helpers] = useField(name);

    const handleOnChange = (val: string) => {
      helpers.setValue(val);
    };
  
    return data ? (
      <>
        <DropDown
          placeholder={placeholder}
          data={data}
          label={label}
          name={name}
          handleChange={handleOnChange}
        />
        {meta.touched && meta.error && (
          <Text style={{ color: "red" }}>{meta.error}</Text>
        )}
      </>
    ) : (
      null 
    );
  };
  