import { z } from "zod";

export const UpdateUserSchema = z.object({
  name: z.string().nonempty("O campo de name é obrigatório"),
  email: z.string().email().nonempty("O campo de email é obrigatório"),
});