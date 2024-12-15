import { Plus, X } from "lucide-react";
import styles from "./AddExerciseModal.module.css";
import React from "react";
import Form from "../Form";
import Input from "../Input";
import Select from "../Select";
import Spacer from "../Spacer";
import * as Dialog from "@radix-ui/react-dialog";
import { v4 as uuidv4 } from "uuid";
import { exerciseTypeOptions } from "../../data";
import useExercisesContext from "../../hooks/useExercisesContext";
import TextArea from "../TextArea";
import { ExerciseType } from "../../types";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Button from "../Button";

export default function AddExerciseModal() {
  const { exercises, setExercises } = useExercisesContext();
  const [type, setType] = React.useState("cardio");
  const formRef = React.useRef<HTMLFormElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const type =
      String(formData.get("type")) === "strength" ? "strength" : "cardio";
    const exercise: Partial<ExerciseType> = {
      name: String(formData.get("name")),
      workoutId: 0,
      type: type,
      easy: formData.get("easy") ? true : false,
      notes: String(formData.get("notes")),
      slug: uuidv4(),
    };

    if (type === "strength") {
      exercise.exerciseData = {
        type: type,
        sets: Number(formData.get("sets")),
        reps: Number(formData.get("reps")),
        weight: Number(formData.get("weight")),
        multiple_weights:
          formData.get("multiple_weights") === "on" ? true : false,
      };
    } else if (type === "cardio") {
      exercise.exerciseData = {
        type: type,
        time: Number(formData.get("time")),
        distance: Number(formData.get("distance")),
        kcal: Number(formData.get("kcal")),
      };
    }

    const nextExercises = [...exercises, exercise as ExerciseType];
    setExercises(nextExercises);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={styles.trigger}>
        <p>exercise</p>
        <Plus />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content className={styles.content}>
            <VisuallyHidden.Root>
              <Dialog.Title>add exercise</Dialog.Title>
              <Dialog.Description>
                add exercises to your workout here. click save when you're done
              </Dialog.Description>
            </VisuallyHidden.Root>
            <Dialog.Close className={styles.close}>
              <X />
            </Dialog.Close>
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
                setOpen(false);
              }}
              ref={formRef}
            >
              <Spacer />
              <Input label="name" id="name" required />
              <Select
                label="type"
                id="type"
                options={exerciseTypeOptions}
                defaultValue={type}
                handleChange={(e) => setType(e.target.value)}
              />

              {type === "strength" && (
                <>
                  <Input label="sets" id="sets" type="number" />
                  <Input label="reps" id="reps" type="number" />
                  <Input
                    label="weight (kg)"
                    id="weight"
                    type="number"
                    step="0.5"
                  />
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
                  <Input
                    label="distance (km)"
                    id="distance"
                    type="number"
                    step="any"
                  />
                  <Input label="kcal" id="kcal" type="number" step="10" />
                </>
              )}
              <Input label="easy" id="easy" type="checkbox" value="easy" />
              <TextArea label="notes" id="notes" />

              <Spacer />
              <Button type="submit">save</Button>
            </Form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}