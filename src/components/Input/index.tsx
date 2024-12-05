import React, { ForwardedRef } from "react";
import * as Label from "@radix-ui/react-label";
import styles from "./Input.module.css";
import { InputProps } from "../../types";

const Input = React.forwardRef(function Input(
  { label, id, defaultValue = "", ...delegated }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <Label.Root
      htmlFor={id}
      className={
        delegated.type === "checkbox" || delegated.type === "radio"
          ? styles.radiocheck
          : styles.wrapper
      }
    >
      {label}
      <input
        id={id}
        className={styles.input}
        ref={ref}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...delegated}
      />
    </Label.Root>
  );
});

export default Input;
