import { GET_ALL_USERS_API, CREATE_NEW_USER_API, UPDATE_USER_API, DELETE_USER_API } from "@/constants/constants";
import { api } from "@/services/api";
import { useMutation } from "react-query";


export type AllUsersType = {
  id: number;
  name: string;
  email: string;
}

export type NewUserType = {
  name: string;
  email: string;
  password: string;
}

export function useCrud() {
  
    const getAllUsers = useMutation(async () => {
      try {
        const response = await api.get(GET_ALL_USERS_API);
  
        if (response) {
          console.log(response);
        }
        return response;
      } catch (error) {
        console.log(error);
      }
    });
  
    const createNewUser = useMutation(async (data: NewUserType) => {
      try {
        const response = await api.post(CREATE_NEW_USER_API, data);
  
        if (response) {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    });
  
    const updateUser = useMutation(async (data: AllUsersType) => {
      try {
        const response = await api.post(UPDATE_USER_API, data);
  
        if (response) {
          console.log(response);
        }
      } catch (error) {
        console.log(error);

      }
    });
  
    const deleteUser = useMutation(async (id: number) => {
      try {
        const response = await api.delete(`${DELETE_USER_API}${id}`);
  
        if (response) {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    });
  
    return {
      getAllUsers,
      createNewUser,
      updateUser,
      deleteUser,
    };
  }