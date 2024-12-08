import React from "react";
import WorkoutCard from "../WorkoutCard";
import styles from "./WorkoutGrid.module.css";
import { motion } from "motion/react";
import { WorkoutContext } from "../WorkoutsProvider";

export default function WorkoutGrid() {
  const workoutData = React.useContext(WorkoutContext);
  const [current, setCurrent] = React.useState<number | null>(null);
  const id = React.useId();
  return (
    <main className={styles.wrapper} onMouseLeave={() => setCurrent(null)}>
      {workoutData.map(({ workout, exercises }) => {
        const slug = workout.id;
        return (
          <div
            className={styles.hoverWrapper}
            key={workout.id}
            onMouseEnter={() => setCurrent(slug)}
          >
            {current === slug && (
              <motion.div className={styles.motionBox} layoutId={id} />
            )}
            <WorkoutCard workout={workout} exercises={exercises} />
          </div>
        );
      })}
    </main>
  );
}
