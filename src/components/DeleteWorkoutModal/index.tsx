import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./DeleteWorkoutModal.module.css";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import Button from "../Button";
import { useNavigate, useParams } from "react-router-dom";
import { deleteWorkout } from "../../fetchers";
import Form from "../Form";

export default function DeleteWorkoutModal() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const workoutEndpoint = `${import.meta.env.VITE_WORKOUT_ENDPOINT}/${id}`;
    await deleteWorkout(workoutEndpoint);
    navigate("/");
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={styles.trigger}>delete</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content className={styles.content}>
            <VisuallyHidden.Root>
              <Dialog.Title>delete exercise</Dialog.Title>
              <Dialog.Description>
                warning modal for deleting a workout. click delete to confirm
                deletion
              </Dialog.Description>
            </VisuallyHidden.Root>
            <Dialog.Close className={styles.close}>
              <X />
            </Dialog.Close>
            <Form>
              <p>
                Are you sure you want to delete this workout? all associated
                exercises will also be deleted.
              </p>
              <div className={styles.buttonWrapper}>
                <Button
                  className={styles.button}
                  onClick={async (e) => await handleClick(e)}
                >
                  delete
                </Button>
                <Dialog.Close className={styles.cancel}>cancel</Dialog.Close>
              </div>
            </Form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
