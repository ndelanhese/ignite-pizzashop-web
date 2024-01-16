import { Metadata } from 'next';

import { SignInForm } from './client/form';

export const metadata: Metadata = {
  title: 'Login',
};

const SignInPage = () => (
  <div className="p-8">
    <div className="flex w-[21.875rem] flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Acessar painel
        </h1>
        <p className="text-sm text-muted-foreground">
          Acompanhe suas vendas pelo painel do parceiro
        </p>
      </div>
      <SignInForm />
    </div>
  </div>
);

export default SignInPage;
