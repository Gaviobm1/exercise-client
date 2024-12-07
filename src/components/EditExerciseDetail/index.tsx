import { ExerciseDetailType } from "../../types";
import { formatISO } from "date-fns";
import { exerciseTypeOptions } from "../../data";
import Form from "../Form";
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select";
import Button from "../Button";

export default function EditExerciseDetail({
  exerciseData,
}: {
  exerciseData: ExerciseDetailType;
}) {
  const { date, exercise } = exerciseData;
  const { name, type, notes, reps, sets, time, distance, kcal, easy, weight } =
    exercise;
  const dateString = formatISO(date, { representation: "date" });

  return (
    <Form formAction={() => console.log("logged")}>
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
          <Input label="sets" id="sets" defaultValue={sets} type="number" />
          <Input label="reps" id="reps" defaultValue={reps} type="number" />
          <Input
            label="weight (kg)"
            id="weight"
            defaultValue={weight}
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
            defaultValue={time}
            type="number"
            step="any"
          />
          <Input
            label="distance"
            id="distance"
            value={distance}
            type="number"
            step="any"
          />
          <Input
            label="kcal"
            id="kcal"
            defaultValue={kcal}
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

      <Button handleClick={() => console.log("clicked")}>save</Button>
    </Form>
  );
}
