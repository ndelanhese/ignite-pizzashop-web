import { NavLink } from '@components/shared/navLink';
import { Separator } from '@components/ui/separator';
import { Home, Pizza, UtensilsCrossed } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink href={'/dashboard'}>
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink href={'/orders'}>
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
