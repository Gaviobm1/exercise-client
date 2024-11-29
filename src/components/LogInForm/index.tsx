import React from "react";
import Form from "../Form";
import Input from "../Input";
import Cookies from "js-cookie";

export default function LogInForm() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  async function logIn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      }),
    });
    const data = await response.json();
    const { token } = data;
    Cookies.set("token", token, { expires: 7 });
  }
  return (
    <Form>
      <Input label="email" id="email" type="email" ref={emailRef} />
      <Input label="password" id="password" type="password" ref={passwordRef} />
      <button onClick={(e) => logIn(e)}>Log In</button>
    </Form>
  );
}
