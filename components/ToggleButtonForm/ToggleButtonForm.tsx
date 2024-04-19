
import { useField } from "formik";
import { ToggleButton } from "../ToggleButton/ToggleButton";
type ToggleButtonFormProps = {
  label: string;
  name: string;
};

export const ToggleButtonForm: React.FC<ToggleButtonFormProps> = ({
  label,
  name,
  ...rest
}) => {
  const [field, meta, helpers] = useField(name);
  const onChange = () => {
    helpers.setValue(!field.value);
  };

  return (
    <ToggleButton buttonText={label} active={field.value} onToggle={onChange}  />
  
  );
};
