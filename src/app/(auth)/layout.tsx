import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Login',
};

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <main>{children}</main>
);

export default AuthLayout;
