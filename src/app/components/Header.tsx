import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/realisations', label: 'Réalisations' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-2xl font-bold text-[#FF6B00]">BTP</span>
            <span className="text-2xl font-bold text-[#111827]">Expertise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 relative ${
                  isActive(link.path)
                    ? 'text-[#FF6B00]'
                    : 'text-[#111827] hover:text-[#FF6B00]'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B00]"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+33557803774"
              className="flex items-center space-x-2 text-[#111827] hover:text-[#FF6B00] transition-colors duration-200 font-medium"
              title="Appeler 05 57 80 37 74"
            >
              <Phone size={20} />
              <span>05 57 80 37 74</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Demande de devis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#111827]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 pt-4 space-y-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#FF6B00]'
                    : 'text-[#111827] hover:text-[#FF6B00]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a
                href="tel:+33557803774"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-[#111827] hover:text-[#FF6B00] transition-colors duration-200 font-medium"
                title="Appeler 05 57 80 37 74"
              >
                <Phone size={20} />
                <span>05 57 80 37 74</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block btn-primary text-center"
              >
                Demande de devis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
