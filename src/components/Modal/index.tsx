import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import styles from "./Modal.module.css";
import { X } from "react-feather";
import { ModalProps } from "../../types";

export default function Modal({ children, btnText, type, Icon }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={type === "simple" ? styles.trigger : styles.button}
      >
        {btnText}
        {Icon && <Icon />}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content
            className={styles.content}
            aria-describedby={undefined}
          >
            <Dialog.Close className={styles.close}>
              <X />
            </Dialog.Close>
            {children}
          </Dialog.Content>
          <VisuallyHidden.Root>
            <Dialog.Title>add exercise</Dialog.Title>
          </VisuallyHidden.Root>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
