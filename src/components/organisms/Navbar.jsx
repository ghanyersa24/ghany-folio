import { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Container } from '../atoms';
import { NavLink } from '../molecules';
import { navItems, sectionIds } from '../../data';
import { useActiveSection } from '../../hooks/useActiveSection';

/** Fixed top navigation with scroll-spy and a mobile dropdown menu. */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds, 'beranda');

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => window.scrollTo(0, 0)}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-xl tracking-tight text-white">
              Ghany<span className="text-cyan-400">.dev</span>
            </span>
          </button>

          {/* desktop links */}
          <div className="hidden md:flex items-baseline space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
              />
            ))}
          </div>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                variant="mobile"
                onClick={closeMenu}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
