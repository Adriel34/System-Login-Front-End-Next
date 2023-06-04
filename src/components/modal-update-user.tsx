"use client";
import { useCrud } from "@/hooks/crud.hook";
import { UpdateUserSchema } from "@/validation/update-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

type UpdateUserModalType = {
  open?: boolean;
  onConfirm?: () => void;
  userToUpdate: any;
  getUsers?: () => void;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};
type UpdateUserModaFormType = {
  name: string;
  email: string;
};

export const UpdateUserModal = ({
  setOpen,
  open = false,
  userToUpdate,
  getUsers
}: UpdateUserModalType) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<UpdateUserModaFormType>({
    resolver: zodResolver(UpdateUserSchema),
  });
  const { updateUser } = useCrud();

  const updateUserSubmit = async (data: UpdateUserModaFormType) => {
    const payload = {
      id: userToUpdate.id,
      name: data.name,
      email: data.email,
    };
    await updateUser.mutateAsync(payload);
   if(setOpen && getUsers){
    setOpen(false)
    getUsers()
   }  
  };

  const handleClose = () => {
    if (setOpen) {
      setOpen(false);
      reset();
    }
  };

  return (
    <>
      {open && (
        <form onSubmit={handleSubmit(updateUserSubmit)}>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <h2 className="font-bold mb-6">Editar Usuario</h2>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  {...register("name")}
                  defaultValue={userToUpdate.name}
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
                  defaultValue={userToUpdate.email}
                  placeholder="Email"
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
                  Editar Usuario
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
