import { Button } from '@components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

import { SignUpForm } from './client/form';

export const metadata: Metadata = {
  title: 'Cadastro',
};

const SignUpPage = () => (
  <div className="w-full max-w-[24rem] p-8">
    <Button asChild className="absolute right-8 top-8" variant="ghost">
      <Link href={'sign-in'}>Fazer login</Link>
    </Button>
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Criar conta grátis
        </h1>
        <p className="text-sm text-muted-foreground">
          Seja um parceiro e comece suas vendas
        </p>
      </div>
      <SignUpForm />
    </div>
  </div>
);

export default SignUpPage;
