import { formatToDateTitle } from "../../helpers";
import ExerciseNamePill from "../ExerciseNamePill";
import { WorkoutCardType } from "../../types";
import { CircleChevronRight } from "lucide-react";
import IconButton from "../IconButton";
import styles from "./WorkoutCard.module.css";
import { Link } from "react-router-dom";

export default function WorkoutCard({ workout, exercises }: WorkoutCardType) {
  const { date, id } = workout;
  const dateStr = formatToDateTitle(date);

  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>{dateStr}</h1>
        <Link to={`workouts/${id}`}>
          {" "}
          <IconButton Icon={CircleChevronRight} iconProps={{ size: 32 }} />
        </Link>
      </header>
      <main className={styles.grid}>
        {exercises.map(({ name, id, type }) => {
          return (
            <ExerciseNamePill
              name={name}
              exerciseId={id}
              type={type}
              key={id}
            />
          );
        })}
      </main>
    </article>
  );
}
