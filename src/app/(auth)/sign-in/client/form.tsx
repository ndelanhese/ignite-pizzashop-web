'use client';

import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { SignInFormSchema, signInFormSchema } from './form.schema';

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isSubmitting },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormSchema> = useCallback(
    async data => {
      console.log(data);
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('Enviamos um link de autenticação para seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      });
    },
    [],
  );

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          {...register('email')}
        />
      </div>
      <Button
        type="submit"
        className="text-md w-full font-semibold tracking-tighter"
        disabled={isSubmitting}
      >
        Acessar painel
      </Button>
    </form>
  );
};
