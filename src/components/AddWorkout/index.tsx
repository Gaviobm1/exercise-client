import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import { CirclePlus } from "lucide-react";
import { formatISO } from "date-fns";
import styles from "./AddWorkout.module.css";
import Spacer from "../Spacer";
import CloseButton from "../CloseButton";

export default function AddWorkout() {
  const defaultDate = formatISO(Date.now(), { representation: "date" });
  return (
    <Form
      formAction={(e) => {
        e.preventDefault();
        console.log("submitted");
      }}
    >
      <CloseButton handleClick={(e) => console.log(e)} />
      <Spacer />
      <Input label="date" id="date" value={defaultDate} type="date" />
      <button className={styles.addbtn}>
        exercise <CirclePlus />
      </button>
      <Button handleClick={() => console.log("saved")}>save</Button>
    </Form>
  );
}
