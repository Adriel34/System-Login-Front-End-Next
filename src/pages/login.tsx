import { useLogin } from "@/hooks/login.hook";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/login.validation";

type SignInForm = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(loginSchema),
  });

  const { signIn } = useLogin();

  const onSubmit  = async (data: SignInForm) => {
    await signIn.mutateAsync(data);
  };
  return (
    <main className="flex flex-row min-h-screen items-center justify-center gap-12 bg-[url('https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      <form
        className="w-1/2 flex h-80 mr-12 shadow-lg rounded-lg border border-gray-300 bg-opacity-20 bg-red-200 dark:bg-gray-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-1/2 flex items-center flex-col justify-center">
          <h1 className="text-3xl font-bold">Seja bem vindo!</h1>
          <p className="text-center text-lg font-bold">
            Acesso garantido: digite seu login e desbrave!
          </p>
        </div>
        <div className="flex flex-col justify-center ml-8 mr-6">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                E-mail
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="email"
                {...register("email")}
                type="text"
                placeholder="Ex José"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="password"
                {...register("password")}
                type="password"
                placeholder="**********"
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-2/3 ml-40">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
