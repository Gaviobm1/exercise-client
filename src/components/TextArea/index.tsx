import React from "react";
import * as Label from "@radix-ui/react-label";
import { TextAreaProps } from "../../types";
import styles from "./TextArea.module.css";

export default function TextArea({
  label,
  id,
  defaultValue,
  ...delegated
}: TextAreaProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <Label.Root htmlFor={id} className={styles.wrapper}>
      {label}
      <textarea
        id={id}
        name={id}
        value={value}
        rows={6}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={styles.textarea}
        {...delegated}
      ></textarea>
    </Label.Root>
  );
}
