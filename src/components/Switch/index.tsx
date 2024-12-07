import React from "react";
import styles from "./Switch.module.css";
import { motion } from "motion/react";

export default function Switch({
  children,
  toggle,
  setToggle,
}: {
  children: React.ReactNode;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button className={styles.btn} onClick={() => setToggle(!toggle)}>
      <motion.div
        className={styles.thumb}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 650,
          damping: 40,
        }}
        animate={{ x: toggle ? "0%" : "100%" }}
      >
        {children}
      </motion.div>
    </button>
  );
}
