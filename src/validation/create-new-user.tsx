import { z } from "zod";

export const CreateNewUserSchema = z.object({
  name: z.string().nonempty("O campo de name é obrigatório"),
  email: z.string().email().nonempty("O campo de email é obrigatório"),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .nonempty("O campo de senha é obrigatório"),
  confirmPassword: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .nonempty("O campo de senha é obrigatório")
}).omit({ confirmPassword: true });