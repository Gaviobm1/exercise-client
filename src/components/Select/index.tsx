import * as Label from "@radix-ui/react-label";
import styles from "./Select.module.css";
import { SelectProps } from "../../types";

export default function Select({
  label,
  id,
  options,
  currentSelected = "",
  handleChange,
  ...delegated
}: SelectProps) {
  return (
    <Label.Root htmlFor={id} className={styles.wrapper}>
      {label}
      <select
        name={id}
        id={id}
        className={styles.option}
        onChange={handleChange}
        {...delegated}
      >
        {options.map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
    </Label.Root>
  );
}
