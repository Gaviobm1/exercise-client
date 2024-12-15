import { forwardRef } from "react";
import styles from "./Form.module.css";
import { FormProps } from "react-router-dom";

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, ...delegated }, ref) => {
    return (
      <form className={styles.wrapper} ref={ref} {...delegated}>
        {children}
      </form>
    );
  }
);

export default Form;
