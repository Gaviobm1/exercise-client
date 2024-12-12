import Form from "../Form";
import Input from "../Input";
import ExerciseTab from "../ExerciseTab";
import { Plus } from "lucide-react";
import Button from "../Button";
import Modal from "../Modal";
import AddExercise from "../AddExercise";
import { formatISO } from "date-fns";
import useExercisesContext from "../../hooks/useExercisesContext";
import Spacer from "../Spacer";

export default function AddWorkout() {
  const { exercises } = useExercisesContext();

  const defaultDate = formatISO(Date.now(), { representation: "date" });

  return (
    <Form>
      <Spacer />
      <Input label="date" id="date" value={defaultDate} type="date" />
      <Modal btnText={"exercise"} Icon={Plus} type="simple">
        <AddExercise />
      </Modal>
      {exercises &&
        exercises.map(({ name, type, slug }) => (
          <ExerciseTab type={type} key={slug} slug={slug}>
            {name}
          </ExerciseTab>
        ))}
      <Button>save</Button>
    </Form>
  );
}
