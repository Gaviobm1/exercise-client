import Cookies from "js-cookie";

export const fetchUser = async (endpoint: string) => {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return await response.json();
};
