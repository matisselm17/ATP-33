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
              Spécialiste du bâtiment depuis 2017, nous réalisons vos projets d'étanchéité, 
              couverture et zinguerie avec professionnalisme et qualité. Plus de 150 chantiers par an et plus de 100 clients satisfaits.
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
                  href="tel:+33557803774"
                  className="flex items-center space-x-2 text-sm hover:text-[#FF6B00] transition-colors duration-200"
                >
                  <Phone size={16} />
                  <span>05 57 80 37 74</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@atp33.fr"
                  className="flex items-center space-x-2 text-sm hover:text-[#FF6B00] transition-colors duration-200"
                >
                  <Mail size={16} />
                  <span>contact@atp33.fr</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="mb-1">Adresse :</p>
                    <p className="text-xs">185 rue Gay Lussac</p>
                    <p className="text-xs">33127 Saint-Jean-d'Illac</p>
                    <p className="mt-2 mb-1">Zones d'intervention :</p>
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
        <div className="mt-12 pt-8 border-t border-[#1F2937]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; 2024 ATP33 - Tous droits réservés | Créé en 2017
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-[#FF6B00] transition-colors duration-200">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 hover:text-[#FF6B00] transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link to="/conditions-utilisation" className="text-gray-400 hover:text-[#FF6B00] transition-colors duration-200">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
