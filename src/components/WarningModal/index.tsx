import { WarningModalProps } from "../../types";
import Button from "../Button";
import styles from "./WarningModal.module.css";
import useExercisesContext from "../../hooks/useExercisesContext";

export default function WarningModal({
  children,
  btnContent,
  slug,
}: WarningModalProps) {
  const { exercises, setExercises } = useExercisesContext();

  const handleClick = (slug: string) => {
    const nextExercises = exercises.filter((exercise) => exercise.slug != slug);
    setExercises(nextExercises);
  };

  return (
    <div className={styles.wrapper}>
      <p>{children}</p>
      <Button onClick={() => handleClick(slug)}>{btnContent}</Button>
    </div>
  );
}
