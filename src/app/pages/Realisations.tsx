import { useState } from 'react'
import { services } from '../../data/servicesData'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { getServiceImage, handleImageError, getRealisationsImage } from '../../utils/imageUtils'

const Realisations = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Tous')

  const categories = ['Tous', ...Array.from(new Set(services.map(s => s.category)))]

  const filteredServices = selectedFilter === 'Tous' 
    ? services 
    : services.filter(s => s.category === selectedFilter)

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

      {/* Filtres */}
      <section className="border-b border-gray-200 bg-[#F9FAFB] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  selectedFilter === category
                    ? 'bg-[#FF6B00] text-white'
                    : 'bg-white text-[#111827] hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF6B00] hover:shadow-lg transition-all duration-200 group"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={getServiceImage(service.folderName)}
                    alt={service.title}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.target as HTMLImageElement
                      // Essayer d'utiliser une image de réalisation comme fallback
                      const index = filteredServices.indexOf(service)
                      target.src = getRealisationsImage(index)
                      target.onerror = () => handleImageError(e)
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#F9FAFB] text-[#FF6B00] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.excerpt}</p>
                  <span className="text-[#FF6B00] font-medium inline-flex items-center text-sm">
                    Voir les détails
                    <ArrowRight className="ml-2" size={16} />
                  </span>
                </div>
              </Link>
            ))}
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
              href="tel:+33000000000"
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
