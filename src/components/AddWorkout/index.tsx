import Form from "../Form";
import Input from "../Input";
import ExerciseTab from "../ExerciseTab";
import Button from "../Button";
import AddExerciseModal from "../AddExerciseModal";
import { formatISO } from "date-fns";
import useExercisesContext from "../../hooks/useExercisesContext";
import Spacer from "../Spacer";
import { handleExercisePost, handleWorkoutPost } from "../../fetchers";
import { useNavigate } from "react-router-dom";

export default function AddWorkout() {
  const { exercises } = useExercisesContext();
  const navigate = useNavigate();

  const defaultDate = formatISO(Date.now(), { representation: "date" });

  return (
    <Form>
      <Spacer />
      <Input label="date" id="date" value={defaultDate} type="date" />
      <AddExerciseModal />
      {exercises &&
        exercises.map(({ name, type, slug }) => (
          <ExerciseTab type={type} key={slug} slug={slug}>
            {name}
          </ExerciseTab>
        ))}
      <Button
        onClick={async () => {
          const { id } = await handleWorkoutPost(
            import.meta.env.VITE_WORKOUT_ENDPOINT
          );
          await Promise.all(
            exercises.map(async (exercise) => {
              exercise.workoutId = id;
              await handleExercisePost(
                import.meta.env.VITE_EXERCISE_ENDPOINT,
                exercise
              );
              return exercise;
            })
          );
          navigate("/");
        }}
      >
        save
      </Button>
    </Form>
  );
}
