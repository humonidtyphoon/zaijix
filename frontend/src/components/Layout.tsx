import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary-blue/95 text-white fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => handleScrollTo('home')}
              className="text-2xl font-heading font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal rounded-sm"
            >
              Zaijix
            </button>
            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-6 text-base">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleScrollTo(item.id)}
                    className="hover:text-accent-teal transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal rounded-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/30 hover:border-white/60 transition"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${
                    isOpen ? 'translate-y-2 rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-opacity ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-transform ${
                    isOpen ? '-translate-y-2 -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
          {/* Mobile menu */}
          {isOpen && (
            <ul className="md:hidden mt-4 flex flex-col gap-3 bg-primary-blue/90 rounded-lg p-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="block w-full text-left py-2 px-2 rounded hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal"
                    onClick={() => {
                      handleScrollTo(item.id);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
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

