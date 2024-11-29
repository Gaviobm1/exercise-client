import Modal from "../Modal";
import Input from "../Input";

export default function AddExerciseModal() {
  return (
    <Modal>
      <Input label="date" id="date" placeholder="17/11/2024" type="date" />
    </Modal>
  );
}
