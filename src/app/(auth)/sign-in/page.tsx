import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Metadata } from 'next';

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
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
        <Button
          type="submit"
          className="text-md w-full font-semibold tracking-tighter"
        >
          Acessar painel
        </Button>
      </form>
    </div>
  </div>
);

export default SignInPage;
