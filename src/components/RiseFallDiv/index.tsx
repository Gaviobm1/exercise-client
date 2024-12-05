import { AnimatePresence, motion } from "motion/react";
import { RiseFallProps } from "../../types";

export default function RiseFallDiv({ children, direction }: RiseFallProps) {
  const riseFallVariants = {
    rise: { y: 30 },
    fall: { y: -30 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        layout
        key={direction}
        initial={riseFallVariants[direction]}
        animate={{ y: 0 }}
        exit={riseFallVariants[direction]}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
