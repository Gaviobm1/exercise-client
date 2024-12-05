import React, { FormEventHandler } from "react";
import styles from "./Form.module.css";

export default function Form({
  children,
  formAction,
}: {
  children: React.ReactNode;
  formAction: FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form className={styles.wrapper} onSubmit={formAction}>
      {children}
    </form>
  );
}
