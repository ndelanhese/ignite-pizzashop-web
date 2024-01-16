import { Pizza } from 'lucide-react';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Login',
};

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <main className="grid min-h-screen grid-cols-1 sm:grid-cols-2">
    <div className="hidden h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground sm:flex">
      <div className="flex items-center gap-3 text-lg text-foreground">
        <Pizza className="h-5 w-5" />
        <span className="font-semibold">pizza.shop</span>
      </div>
      <footer className="text-sm">
        Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
      </footer>
    </div>
    <div className="flex flex-col items-center justify-center">{children}</div>
  </main>
);

export default AuthLayout;
