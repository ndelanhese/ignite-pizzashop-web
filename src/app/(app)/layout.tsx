import { Header } from '@components/shared/header';
import { ReactNode } from 'react';

const AppLayout = ({ children }: { children: ReactNode }) => (
  <main className="flex min-h-screen flex-col antialiased">
    <Header />
    <div className="flex flex-1 flex-col gap-4 p-8 pt-6">{children}</div>
  </main>
);

export default AppLayout;
