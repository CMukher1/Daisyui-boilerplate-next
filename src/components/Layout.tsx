import { ReactNode } from 'react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto">
      <header>
        <ThemeToggle />
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </div>
  );
};

export default Layout;
