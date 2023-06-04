"use client";
import { NewUserType, useCrud } from "@/hooks/crud.hook";
import { CreateNewUserSchema } from "@/validation/create-new-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type CreateNewUserModalType = {
  open?: boolean;
  getUsers?: () => void;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export const CreateNewUserModal = ({
  getUsers,
  setOpen,
  open = false,
}: CreateNewUserModalType) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<NewUserType>({
    resolver: zodResolver(CreateNewUserSchema),
  });
  const { createNewUser } = useCrud();

  const HandleCreateNewUser = async (data: NewUserType) => {
    await createNewUser.mutateAsync(data);
    reset();

    if (setOpen && getUsers) {
      setOpen(false);
      getUsers();
    }
  };

  const handleClose = () => {
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <>
      {open && (
        <form onSubmit={handleSubmit(HandleCreateNewUser)}>
          <div className="w-full max-w-xs fixed top-0 mt-20 mr-20 right-0">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <h2 className="font-bold mb-6">Criar Usuario</h2>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  {...register("name")}
                  type="text"
                  placeholder="Username"
                />
                <label className="block text-gray-700 text-sm font-bold mt-2 mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  {...register("password")}
                  type="password"
                  placeholder="*********"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="*********"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleClose}
                >
                  Cancelar
                </button>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Criar Usuario
                </button>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs"></p>
          </div>
        </form>
      )}
    </>
  );
};
