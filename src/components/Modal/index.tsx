import * as Dialog from "@radix-ui/react-dialog";
import styles from "./Modal.module.css";
import { Plus, X } from "react-feather";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Plus />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Close className={styles.close}>
            <X />
          </Dialog.Close>
          <div className={styles.wrapper}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
