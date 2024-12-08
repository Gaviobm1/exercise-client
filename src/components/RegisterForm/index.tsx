import React, { FormEvent } from "react";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

export default function RegisterForm() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);

  function logIn(e: FormEvent) {
    e.preventDefault();
    console.log("logged in!");
  }

  return (
    <Form formAction={(e) => logIn(e)}>
      <Input
        label="first name"
        id="first_name"
        type="text"
        ref={firstNameRef}
      />
      <Input label="last name" id="last_name" type="text" ref={lastNameRef} />
      <Input label="email" id="email" type="email" ref={emailRef} />
      <Input label="password" id="password" type="password" ref={passwordRef} />
      <Input
        label="confirm password"
        id="confirm-password"
        type="password"
        ref={confirmPasswordRef}
      />
      <Button onClick={() => console.log("click")}>register</Button>
    </Form>
  );
}
