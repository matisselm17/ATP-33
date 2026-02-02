import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { handleImageError } from '../../utils/imageUtils'

const Realisations = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos réalisations</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Découvrez quelques-unes de nos réalisations en toiture, couverture et étanchéité dans le Sud-Ouest
          </p>
        </div>
      </section>

      {/* Grille de réalisations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Réalisation 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF6B00] hover:shadow-lg transition-all duration-200 group">
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src="/réalistation/Réa 1.2.JPG"
                  alt="Couverture spéciale pour mairie"
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#FF6B00] transition-colors">
                  Couverture spéciale pour mairie
                </h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium text-[#111827]">Client :</span> Mairie
                </p>
                <p className="text-gray-600 mb-3">
                  <span className="font-medium text-[#111827]">Surface :</span> 190 m²
                </p>
                <p className="text-sm text-gray-500">
                  Projet de couverture sur mesure pour bâtiment municipal
                </p>
              </div>
            </div>

            {/* Réalisation 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF6B00] hover:shadow-lg transition-all duration-200 group">
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src="/réalistation/réa 2.JPG"
                  alt="Couverture panneau sandwich"
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#FF6B00] transition-colors">
                  Couverture panneau sandwich
                </h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium text-[#111827]">Client :</span> Entreprise d'aéronautique
                </p>
                <p className="text-gray-600 mb-3">
                  <span className="font-medium text-[#111827]">Surface :</span> 2800 m²
                </p>
                <p className="text-sm text-gray-500">
                  Installation de panneaux sandwich pour toiture industrielle
                </p>
              </div>
            </div>

            {/* Réalisation 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF6B00] hover:shadow-lg transition-all duration-200 group">
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src="/réalistation/réa 3.JPG"
                  alt="Réfection d'étanchéité entreprise défense"
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#FF6B00] transition-colors">
                  Réfection d'étanchéité
                </h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium text-[#111827]">Client :</span> Entreprise dans la défense
                </p>
                <p className="text-gray-600 mb-3">
                  <span className="font-medium text-[#111827]">Surface :</span> 1800 m²
                </p>
                <p className="text-sm text-gray-500">
                  Réfection complète de l'étanchéité pour site industriel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF6B00] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contactez-nous pour discuter de votre projet et obtenir un devis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#FF6B00] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center"
            >
              Demande de devis gratuit
            </Link>
            <a
              href="tel:+33557803774"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-[#FF6B00] transition-all duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Realisations
