import { api } from "@/services/api";
import { useMutation } from "react-query";

export type SignIn = {
  email: string;
  password: string;
};

const authLoginURL = "/login";

export function useLogin() {
  const signIn = useMutation(async ({ email, password }: SignIn) => {
    try {
      const response = await api.post(authLoginURL, {
        email,
        password,
      });

      if (response?.status === 200) {
        console.log(response);
        const token = response?.data?.access_token;

        localStorage.setItem("ACCESS_TOKEN", token);

        api.defaults.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.log(error);
    }
  });

  return {
    signIn,
  };
}
