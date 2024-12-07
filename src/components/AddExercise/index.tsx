import React from "react";
import CloseButton from "../CloseButton";
import Form from "../Form";
import Input from "../Input";
import Select from "../Select";
import Spacer from "../Spacer";
import Button from "../Button";
import { exerciseTypeOptions } from "../../data";
import RadioInput from "../RadioInput";

export default function AddExercise() {
  const [type, setType] = React.useState("cardio");
  return (
    <Form
      formAction={(e) => {
        e.preventDefault();
        console.log("submitted");
      }}
    >
      <CloseButton handleClick={(e) => console.log(e.target)} />
      <Spacer />
      <Input label="name" id="name" />
      <Select
        label="type"
        id="type"
        options={exerciseTypeOptions}
        handleChange={(e) => setType(e.target.value)}
      />

      {type === "strength" && (
        <>
          <RadioInput name="mode" labels={["free weights", "machine"]} />
          <Input label="sets" id="sets" type="number" />
          <Input label="reps" id="reps" type="number" />
          <Input label="weight (kg)" id="weight" type="number" step="0.5" />
        </>
      )}

      {type === "cardio" && (
        <>
          <RadioInput name="mode" labels={["free style", "machine"]} />
          <Input label="time" id="time" type="number" step="any" />
          <Input label="distance (km)" id="distance" type="number" step="any" />
          <Input label="kcal" id="kcal" type="number" step="10" />
        </>
      )}

      <Spacer />
      <Button handleClick={() => console.log("clicked")}>save</Button>
    </Form>
  );
}
