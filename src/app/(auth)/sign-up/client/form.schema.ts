import { z } from 'zod';

export const signUpFormSchema = z.object({
  restaurant_name: z.string().min(1, 'Informe o nome do restaurante'),
  manager_name: z.string().min(1, 'Informe o seu nome'),
  phone: z.string().min(1, 'Informe o telefone'),
  email: z
    .string()
    .min(1, 'Informe o e-mail')
    .email({ message: 'E-mail inválido' }),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
