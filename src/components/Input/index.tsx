import React, { ForwardedRef } from "react";
import * as Label from "@radix-ui/react-label";
import styles from "./Input.module.css";

const Input = React.forwardRef(function Input(
  {
    label,
    id,
    placeholder,
    type = "text",
  }: {
    label: string;
    id: string;
    placeholder?: string;
    type?: string;
  },
  ref: ForwardedRef<HTMLInputElement>
) {
  const [val, setVal] = React.useState("");
  return (
    <Label.Root htmlFor={id} className={styles.wrapper}>
      {label}
      <input
        id={id}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        ref={ref}
      />
    </Label.Root>
  );
});

export default Input;
