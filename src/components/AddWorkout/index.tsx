import React from "react";
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
  const [date, setDate] = React.useState(
    formatISO(Date.now(), { representation: "date" })
  );

  return (
    <Form>
      <Spacer />
      <Input
        label="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
      />
      <AddExerciseModal isNew={true} />
      {exercises &&
        exercises.map(({ name, type, slug }) => (
          <ExerciseTab type={type} key={slug} slug={slug}>
            {name}
          </ExerciseTab>
        ))}
      <Button
        onClick={async (e) => {
          e.preventDefault();
          const { id } = await handleWorkoutPost(
            import.meta.env.VITE_WORKOUT_ENDPOINT,
            new Date(date)
          );
          await Promise.all(
            exercises.map(async (exercise) => {
              console.log(exercise);
              exercise.workoutId = id;
              return await handleExercisePost(
                import.meta.env.VITE_EXERCISE_ENDPOINT,
                exercise
              );
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
