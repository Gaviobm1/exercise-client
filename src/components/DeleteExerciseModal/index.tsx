import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Form from "../Form";
import styles from "./DeleteExerciseModal.module.css";
import { X } from "lucide-react";
import Button from "../Button";
import { deleteExercise } from "../../fetchers";
import useExerciseContext from "../../hooks/useExerciseContext";

export default function DeleteExerciseModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { id } = useExerciseContext();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const endpoint = `${import.meta.env.VITE_EXERCISE_ENDPOINT}/${id}`;
    await deleteExercise(endpoint);
    setIsOpen(false);
  }
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className={styles.trigger}>
        <X size={36} />
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
              <p>are you sure you want to delete this exercise?</p>
              <div className={styles.buttonWrapper}>
                <Button
                  type="submit"
                  style={{ backgroundColor: "hsl(30deg 100% 50%)" }}
                >
                  delete
                </Button>
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
