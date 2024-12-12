import { formatISO } from "date-fns";
import { exerciseTypeOptions } from "../../data";
import { getExerciseFields } from "../../helpers";
import Form from "../Form";
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select";
import Button from "../Button";
import useExerciseContext from "../../hooks/useExerciseContext";
import useWorkoutContext from "../../hooks/useWorkoutContext";

export default function EditExerciseDetail() {
  const workout = useWorkoutContext();
  const exercise = useExerciseContext();
  const { name, notes, easy, type } = exercise;
  const { date } = workout;
  const exerciseFields = getExerciseFields(exercise);
  const dateString = formatISO(date, { representation: "date" });

  return (
    <Form>
      <Input label="exercise name" id="exercise_name" defaultValue={name} />

      <Input label="date" id="date" defaultValue={dateString} type="date" />

      <Select
        label="type"
        id="type"
        options={exerciseTypeOptions}
        currentSelected={type}
      />

      {type === "strength" && (
        <>
          <Input
            label="sets"
            id="sets"
            defaultValue={exerciseFields.sets}
            type="number"
          />
          <Input
            label="reps"
            id="reps"
            defaultValue={exerciseFields.reps}
            type="number"
          />
          <Input
            label="weight (kg)"
            id="weight"
            defaultValue={exerciseFields.weight}
            type="number"
            step="0.5"
          />
        </>
      )}

      {type === "cardio" && (
        <>
          <Input
            label="time"
            id="time"
            defaultValue={exerciseFields.time}
            type="number"
            step="any"
          />
          <Input
            label="distance"
            id="distance"
            value={exerciseFields.distance}
            type="number"
            step="any"
          />
          <Input
            label="kcal"
            id="kcal"
            defaultValue={exerciseFields.kcal}
            type="number"
            step="10"
          />
        </>
      )}

      <Input
        label="easy"
        id="easy"
        checked={easy}
        type="checkbox"
        value="true"
      />
      <TextArea label="notes" id="notes" defaultValue={notes} />

      <Button>save</Button>
    </Form>
  );
}
