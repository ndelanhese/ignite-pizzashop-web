import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z
    .string()
    .min(1, 'Informe o e-mail')
    .email({ message: 'E-mail inválido' }),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
