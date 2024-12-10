import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.css";
import { X } from "react-feather";

export default function Modal({
  children,
  btnText,
}: {
  children: React.ReactNode;
  btnText: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.button}>{btnText}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content className={styles.content}>
            <Dialog.Close className={styles.close}>
              <X />
            </Dialog.Close>
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
