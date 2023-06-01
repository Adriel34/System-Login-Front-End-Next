import { LOGIN_AUTH_API } from "@/constants/constants";
import { api } from "@/services/api";
import { useMutation } from "react-query";

export type SignIn = {
  email: string;
  password: string;
};


export function useLogin() {
  const signIn = useMutation(async ({ email, password }: SignIn) => {
    try {
      const response = await api.post(LOGIN_AUTH_API, {
        email,
        password,
      });

      if (response?.status === 200) {
        console.log(response);
        const token = response?.data?.access_token;

        localStorage.setItem("ACCESS_TOKEN", token);
        window.location.href = "/";
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
