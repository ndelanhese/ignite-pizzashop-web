'use client';

import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { SignUpFormSchema, signUpFormSchema } from './form.schema';

export const SignUpForm = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  const handleSignUp: SubmitHandler<SignUpFormSchema> = useCallback(
    async data => {
      console.log(data);

      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('Enviamos um link de autenticação para seu e-mail', {
        action: {
          label: 'Login',
          onClick: () => push('/sign-in'),
        },
      });
    },
    [push],
  );

  useEffect(() => {
    setFocus('restaurant_name');
  }, [setFocus]);

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
      <div className="space-y-2">
        <Label htmlFor="restaurant_name">Nome do estabelecimento</Label>
        <Input
          id="restaurant_name"
          placeholder="Pizza do zé"
          {...register('restaurant_name')}
        />
        {errors.restaurant_name && (
          <span className="text-xs text-destructive">
            {errors.restaurant_name.message}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="manager_name">Seu nome</Label>
        <Input
          id="manager_name"
          placeholder="Zé da Silva"
          {...register('manager_name')}
        />
        {errors.manager_name && (
          <span className="text-xs text-destructive">
            {errors.manager_name.message}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Seu e-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          {...register('email')}
        />
        {errors.email && (
          <span className="text-xs text-destructive">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Seu celular</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(44) 9 1234-5678"
          {...register('phone')}
        />
        {errors.phone && (
          <span className="text-xs text-destructive">
            {errors.phone.message}
          </span>
        )}
      </div>
      <Button
        type="submit"
        className="text-md w-full font-semibold tracking-tighter"
        disabled={isSubmitting}
      >
        Finalizar cadastro
      </Button>

      <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
        Ao continuar, você concorda com nossos{' '}
        <a className="underline underline-offset-4">Termos de serviço</a> e{' '}
        <a className="underline underline-offset-4">políticas de privacidade</a>
      </p>
    </form>
  );
};
