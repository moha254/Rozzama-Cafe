import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', to: '/' },
    { name: 'Menu', to: '/menu' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' },
    { name: 'Reservation', to: '/reservation', className: 'bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/img/logo-673892610ff12.png" className="h-8 w-auto" alt="Logo" />
              <span className="text-2xl font-bold text-gray-900 ml-2">Rozzama Cafe</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  link.className || `text-gray-700 hover:text-green-600 ${isActive ? 'text-green-600 font-semibold' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  link.className || `block px-3 py-2 ${isActive ? 'text-green-600 font-semibold' : 'text-gray-700 hover:text-green-600'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}