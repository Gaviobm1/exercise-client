import React from "react";
import styles from "./Form.module.css";

export default function Form({ children }: { children: React.ReactNode }) {
  return <form className={styles.wrapper}>{children}</form>;
}
