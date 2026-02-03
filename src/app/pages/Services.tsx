import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services, ServiceCategory, getServicesByCategory } from '../../data/servicesData'
import { getServiceImage, handleImageError, getCategoryPlaceholder } from '../../utils/imageUtils'
import SEO from '../components/SEO'
import { generateTitle, generateDescription, generateKeywords } from '../../utils/seoUtils'

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'Tous'>('Tous')
  
  const categories: (ServiceCategory | 'Tous')[] = [
    'Tous',
    'Couverture & zinguerie',
    'Étanchéité',
    'Diagnostic & entretien',
    'Interventions spécifiques'
  ]

  const filteredServices = selectedCategory === 'Tous' 
    ? services 
    : getServicesByCategory(selectedCategory)

  return (
    <div className="bg-white">
      <SEO
        title={generateTitle(undefined, 'services')}
        description={generateDescription(undefined, 'services')}
        keywords={generateKeywords(undefined, 'services')}
        canonical="https://www.atp33.fr/services"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Expertise complète en toiture, couverture, étanchéité et zinguerie pour tous vos projets en Gironde, Charente-Maritime, Haute-Garonne et Sud-Ouest. Devis gratuit sous 48h.
          </p>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="border-b border-gray-200 bg-[#F9FAFB] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  selectedCategory === category
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

      {/* Liste des services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}#ce-que-nous-faisons`}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF6B00] hover:shadow-lg transition-all duration-200 group h-full flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={getServiceImage(service.folderName)}
                    alt={`${service.title} - ${service.category} Gironde Sud-Ouest - Devis gratuit`}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.target as HTMLImageElement
                      // Utiliser un placeholder de catégorie comme fallback
                      target.src = getCategoryPlaceholder(service.folderName)
                      target.onerror = () => handleImageError(e)
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-3 left-3 inline-block bg-[#FF6B00] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {service.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-[#111827] mb-3 group-hover:text-[#FF6B00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.excerpt}</p>
                  <span className="text-[#FF6B00] font-medium inline-flex items-center mt-auto">
                    En savoir plus
                    <ArrowRight className="ml-2" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#111827] mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous pour discuter de votre projet spécifique
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center"
          >
            Demander un devis
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
