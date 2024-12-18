import React from "react";
import { formatISO } from "date-fns";
import { exerciseTypeOptions } from "../../data";
import Form from "../Form";
import Input from "../Input";
import TextArea from "../TextArea";
import Select from "../Select";
import Button from "../Button";
import useExerciseContext from "../../hooks/useExerciseContext";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import styles from "./EditExerciseDetail.module.css";
import { editExercise } from "../../fetchers";
import { ExerciseType } from "../../types";

export default function EditExerciseDetail() {
  const [open, setOpen] = React.useState(false);
  const workout = useWorkoutContext();
  const exercise = useExerciseContext();
  const { id, name, notes, easy, type, exercise_data } = exercise;
  const { date } = workout;
  const dateString = formatISO(date, { representation: "date" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const exercise: Partial<ExerciseType> = {
      name: String(formData.get("name")),
      type: type,
      easy: formData.get("easy") ? true : false,
      notes: String(formData.get("notes")),
    };

    if (type === "strength") {
      exercise.exercise_data = {
        type: type,
        sets: Number(formData.get("sets")),
        reps: Number(formData.get("reps")),
        weight: Number(formData.get("weight")),
        multiple_weights:
          formData.get("multiple_weights") === "on" ? true : false,
      };
    } else if (type === "cardio") {
      exercise.exercise_data = {
        type: type,
        time: Number(formData.get("time")),
        distance: Number(formData.get("distance")),
        kcal: Number(formData.get("kcal")),
      };
    }
    const endpoint = `${import.meta.env.VITE_EXERCISE_ENDPOINT}/${id}`;

    await editExercise(endpoint, exercise as ExerciseType);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={styles.trigger}>edit</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content className={styles.content}>
            <VisuallyHidden.Root>
              <Dialog.Title>edit exercise details</Dialog.Title>
              <Dialog.Description>
                for editing the details of an exercise
              </Dialog.Description>
            </VisuallyHidden.Root>

            <Form
              onSubmit={(e) => {
                handleSubmit(e);
                setOpen(false);
              }}
            >
              <Input label="exercise name" id="name" defaultValue={name} />

              <Input
                label="date"
                id="date"
                defaultValue={dateString}
                type="date"
              />

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
                    defaultValue={
                      (exercise_data.type === "strength" &&
                        exercise_data.sets) ||
                      ""
                    }
                    type="number"
                  />
                  <Input
                    label="reps"
                    id="reps"
                    defaultValue={
                      (exercise_data.type === "strength" &&
                        exercise_data.reps) ||
                      ""
                    }
                    type="number"
                  />
                  <Input
                    label="weight (kg)"
                    id="weight"
                    defaultValue={
                      (exercise_data.type === "strength" &&
                        exercise_data.weight) ||
                      ""
                    }
                    type="number"
                    step="0.5"
                  />
                  <Input
                    label="multiple weights"
                    id="multiple_weights"
                    type="checkbox"
                    checked={
                      exercise_data.type === "strength" &&
                      exercise_data.multiple_weights
                    }
                  />
                </>
              )}

              {type === "cardio" && (
                <>
                  <Input
                    label="time"
                    id="time"
                    defaultValue={
                      (exercise_data.type === "cardio" && exercise_data.time) ||
                      ""
                    }
                    type="number"
                    step="any"
                  />
                  <Input
                    label="distance"
                    id="distance"
                    defaultValue={
                      (exercise_data.type === "cardio" &&
                        exercise_data.distance) ||
                      ""
                    }
                    type="number"
                    step="any"
                  />
                  <Input
                    label="kcal"
                    id="kcal"
                    defaultValue={
                      (exercise_data.type === "cardio" && exercise_data.kcal) ||
                      ""
                    }
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

              <Button type="submit">save</Button>
            </Form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
