import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* À propos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">À propos</h3>
            <p className="text-sm leading-relaxed">
              Spécialiste du bâtiment depuis de nombreuses années, nous réalisons vos projets d'étanchéité, 
              couverture, bardage et zinguerie avec professionnalisme et qualité.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services principaux */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Étanchéité
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Couverture
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Zinguerie
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Bac acier
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Bardage
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#FF6B00] transition-colors duration-200">
                  Terrasses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33000000000"
                  className="flex items-center space-x-2 text-sm hover:text-[#FF6B00] transition-colors duration-200"
                >
                  <Phone size={16} />
                  <span>À compléter</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@atp33.fr"
                  className="flex items-center space-x-2 text-sm hover:text-[#FF6B00] transition-colors duration-200"
                >
                  <Mail size={16} />
                  <span>À compléter</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-1">Zones d'intervention :</p>
                    <p className="text-xs">Gironde</p>
                    <p className="text-xs">Charente-Maritime</p>
                    <p className="text-xs">Haute-Garonne</p>
                    <p className="text-xs">Sud-Ouest</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#1F2937] text-center text-sm text-gray-400">
          <p>&copy; 2024 BTP Expertise - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
