import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Form from "../Form";
import styles from "./EditWorkoutModal.module.css";
import Button from "../Button";
import { editWorkout } from "../../fetchers";
import Input from "../Input";
import useWorkoutContext from "../../hooks/useWorkoutContext";
import { formatToDateTitle } from "../../helpers";

export default function EditWorkoutModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { id, date } = useWorkoutContext();
  const dateVal = new Date(date);
  const dateStr = formatToDateTitle(dateVal);
  const inputVal = `${dateVal.getFullYear()}-${String(
    dateVal.getMonth() + 1
  ).padStart(2, "0")}-${String(dateVal.getDate()).padStart(2, "0")}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const endpoint = `${import.meta.env.VITE_WORKOUT_ENDPOINT}/${id}`;
    const formData = new FormData(e.target as HTMLFormElement);
    await editWorkout(endpoint, formData);
    setIsOpen(false);
  }
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className={styles.trigger}>
        <h2>{dateStr}</h2>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content className={styles.content}>
            <VisuallyHidden.Root>
              <Dialog.Title>delete exercise</Dialog.Title>
              <Dialog.Description>
                click delete to remove this exercise from the workout
              </Dialog.Description>
            </VisuallyHidden.Root>
            <Form onSubmit={handleSubmit}>
              <Input
                label="date"
                id="date"
                type="date"
                defaultValue={inputVal}
              />
              <div className={styles.buttonWrapper}>
                <Button type="submit">update</Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                  }}
                >
                  cancel
                </Button>
              </div>
            </Form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
