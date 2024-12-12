import React from "react";
import Form from "../Form";
import Input from "../Input";
import Select from "../Select";
import Spacer from "../Spacer";
import Button from "../Button";
import * as Dialog from "@radix-ui/react-dialog";
import { v4 as uuidv4 } from "uuid";
import { exerciseTypeOptions } from "../../data";
import useExercisesContext from "../../hooks/useExercisesContext";
import TextArea from "../TextArea";
import { ExerciseFormData } from "../../types";

export default function AddExercise() {
  const { exercises, setExercises } = useExercisesContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const type =
      String(formData.get("type")) === "strength" ? "strength" : "cardio";
    const exercise: ExerciseFormData = {
      name: String(formData.get("name")),
      type: type,
      easy: formData.get("easy") ? true : false,
      notes: String(formData.get("notes")),
      slug: uuidv4(),
    };

    if (type === "strength") {
      exercise.exerciseData = {
        sets: Number(formData.get("sets")),
        reps: Number(formData.get("reps")),
        weight: Number(formData.get("weight")),
        multiple_weights:
          formData.get("multiple_weights") === "on" ? true : false,
      };
    } else if (type === "cardio") {
      exercise.exerciseData = {
        time: Number(formData.get("time")),
        distance: Number(formData.get("distance")),
        kcal: Number(formData.get("kcal")),
      };
    }

    const nextExercises = [...exercises, exercise];
    setExercises(nextExercises);
  };

  const [type, setType] = React.useState("cardio");
  return (
    <Form onSubmit={handleSubmit}>
      <Spacer />
      <Input label="name" id="name" required />
      <Select
        label="type"
        id="type"
        options={exerciseTypeOptions}
        currentSelected={type}
        handleChange={(e) => setType(e.target.value)}
      />

      {type === "strength" && (
        <>
          <Input label="sets" id="sets" type="number" />
          <Input label="reps" id="reps" type="number" />
          <Input label="weight (kg)" id="weight" type="number" step="0.5" />
          <Input
            label="multiple weights"
            id="multiple_weights"
            type="checkbox"
          />
        </>
      )}

      {type === "cardio" && (
        <>
          <Input label="time" id="time" type="number" step="any" />
          <Input label="distance (km)" id="distance" type="number" step="any" />
          <Input label="kcal" id="kcal" type="number" step="10" />
        </>
      )}
      <Input label="easy" id="easy" type="checkbox" value="easy" />
      <TextArea label="notes" id="notes" />

      <Spacer />

      <Button type="submit">save</Button>
    </Form>
  );
}
