import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary-blue text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-heading font-bold">
              Zaijix
            </Link>
            <ul className="flex flex-wrap items-center gap-4 text-sm md:flex-nowrap md:gap-6 md:text-base">
              <li><Link to="/" className="hover:text-accent-teal transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent-teal transition">About</Link></li>
              <li><Link to="/services" className="hover:text-accent-teal transition">Services</Link></li>
              <li><Link to="/industries" className="hover:text-accent-teal transition">Industries</Link></li>
              <li><Link to="/faq" className="hover:text-accent-teal transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent-teal transition">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Zaijix. All rights reserved.</p>
          <p className="text-sm text-gray-400">Telecom & Telematics Solutions Provider</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

