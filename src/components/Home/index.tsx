import React from "react";
import Cookies from "js-cookie";

export default function Home() {
  const [user, setUser] = React.useState("me");

  React.useEffect(() => {
    async function authenticate() {
      const response = await fetch("http://localhost:8080/protected", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUser(data);
    }
    authenticate();
  }, []);

  return <div>{user}</div>;
}
