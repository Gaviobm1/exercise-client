import React from "react";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import AnimatedLink from "../AnimatedLink";
import { handleSubmitAuth } from "../../fetchers";
import { useNavigate } from "react-router-dom";

export default function LogInForm() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [error, setError] = React.useState<string>("");

  const navigate = useNavigate();

  const endpoint = import.meta.env.VITE_LOGIN_ENDPOINT || "";

  return (
    <Form
      onSubmit={async (e) => {
        const response = await handleSubmitAuth(e, endpoint);
        if (!response.success) {
          setError(response.message);
          return;
        }
        navigate("/");
      }}
    >
      <Input label="email" id="email" type="email" ref={emailRef} />
      <Input label="password" id="password" type="password" ref={passwordRef} />
      <Button>log in</Button>
      <AnimatedLink linkProps={{ to: "/register" }}>
        no account? register here!
      </AnimatedLink>
      <AnimatedLink linkProps={{ to: "/register" }}>
        forgot password
      </AnimatedLink>
      {error && <p style={{ fontWeight: "800" }}>{error}</p>}
    </Form>
  );
}
