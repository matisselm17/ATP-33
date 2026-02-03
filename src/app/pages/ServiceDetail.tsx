import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Phone, Check, ChevronDown, ChevronUp } from 'lucide-react'
import { getServiceBySlug } from '../../data/servicesData'
import { useState } from 'react'
import { getServiceImage, handleImageError, getCategoryPlaceholder } from '../../utils/imageUtils'
import SEO from '../components/SEO'
import { generateTitle, generateDescription, generateKeywords, getServiceSchema } from '../../utils/seoUtils'

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  if (!service) {
    return (
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-[#111827] mb-4">Service non trouvé</h1>
          <Link to="/services" className="text-[#FF6B00] hover:underline">
            Retour aux services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <SEO
        title={generateTitle(service)}
        description={generateDescription(service)}
        keywords={generateKeywords(service)}
        canonical={`https://www.atp33.fr/services/${service.slug}`}
        schema={getServiceSchema(service)}
      />
      {/* Hero avec image */}
      <section className="relative bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white py-20 lg:py-24 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <img
            src={getServiceImage(service.folderName)}
            alt={`${service.title} - ${service.category} Gironde Sud-Ouest - Aquitaine Toitures Professionnelles`}
            className="w-full h-full object-cover opacity-25"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement
              target.src = getCategoryPlaceholder(service.folderName)
              target.onerror = () => handleImageError(e)
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/85 via-[#1F2937]/75 to-[#111827]/85"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.heroTitle}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{service.excerpt}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed">{service.intro}</p>
        </div>
      </section>

      {/* Ce que nous faisons - Design amélioré */}
      <section id="ce-que-nous-faisons" className="py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Ce que nous faisons</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions professionnelles adaptées à vos besoins spécifiques en Gironde, Charente-Maritime, Haute-Garonne et Sud-Ouest. Expert {service.category.toLowerCase()} depuis 2017.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whatWeDo.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#F9FAFB] border border-gray-200 rounded-xl p-6 hover:border-[#FF6B00] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#FF6B00] w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quand nous appeler */}
      <section id="quand-nous-appeler" className="py-20 bg-[#F9FAFB] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Quand nous appeler</h2>
              <p className="text-lg text-gray-600">
                Des situations où notre expertise fait la différence
              </p>
            </div>
            <div className="bg-white border-2 border-[#FF6B00] rounded-xl p-8 shadow-lg">
              <ul className="space-y-4">
                {service.whenToCall.map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-[#FF6B00] rounded-full"></div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600">
              Tout ce que vous devez savoir sur ce service
            </p>
          </div>
          <div className="space-y-4">
            {service.faq.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#111827]">{item.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="text-[#FF6B00] flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF6B00] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Demandez un devis gratuit ou contactez-nous pour discuter de vos besoins
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

      {/* CTA Sticky Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
        <div className="flex gap-3 max-w-7xl mx-auto">
          <a
            href="tel:+33557803774"
            className="flex-1 bg-[#FF6B00] text-white px-4 py-3 rounded-md font-semibold text-center hover:bg-[#E55A00] transition-colors inline-flex items-center justify-center"
          >
            <Phone className="mr-2" size={20} />
            Appeler
          </a>
          <Link
            to="/contact"
            className="flex-1 border-2 border-[#FF6B00] text-[#FF6B00] px-4 py-3 rounded-md font-semibold text-center hover:bg-[#FF6B00] hover:text-white transition-colors"
          >
            Devis
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
