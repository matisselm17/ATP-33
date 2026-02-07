import { Link } from 'react-router-dom'
import { Phone, ArrowRight, MapPin, Shield, Award, Clock, Users } from 'lucide-react'
import { getServicesInOrder } from '../../data/servicesData'
import { getServiceImage, handleImageError, getHeroImage } from '../../utils/imageUtils'
import SEO from '../components/SEO'
import { generateTitle, generateDescription, generateKeywords, getLocalBusinessSchema } from '../../utils/seoUtils'

const Home = () => {
  const servicesInOrder = getServicesInOrder()

  return (
    <div className="bg-white">
      <SEO
        title={generateTitle(undefined, 'home')}
        description={generateDescription(undefined, 'home')}
        keywords={generateKeywords(undefined, 'home')}
        canonical="https://www.atp33.fr/"
        schema={getLocalBusinessSchema()}
      />
      {/* Hero Section avec image */}
      <section className="relative bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white py-20 lg:py-32 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <img
            src={getHeroImage()}
            alt="Réalisation couverture mairie - Aquitaine Toitures Professionnelles Gironde"
            className="w-full h-full object-cover opacity-50"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/60 via-[#1F2937]/50 to-[#111827]/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Etanchéité, couverture et services.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Notre expérience, nos solutions au service de votre toiture. Intervention dans le sud ouest
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#FF6B00] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#E55A00] transition-all duration-200 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Demande de devis gratuit
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-[#111827] transition-all duration-200 inline-flex items-center justify-center"
              >
                Voir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nos services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Nos services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aquitaine Toitures Professionnelles intervient pour votre étanchéité, votre couverture, votre toit terrasse, dans le strict respect des règles de l'art. Nos travaux sont réalisés avec une solide couverture d'assurance décennale, et chaque intervention donne lieu à des rapports formalisés et circonstanciés garantissant rigueur, transparence et traçabilité.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {servicesInOrder.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}#ce-que-nous-faisons`}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF6B00] hover:shadow-lg transition-all duration-200 group"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src={getServiceImage(service.folderName)}
                  alt={`${service.title} - ${service.category} Gironde Sud-Ouest - Aquitaine Toitures Professionnelles`}
                  onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#111827] mb-3 group-hover:text-[#FF6B00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.excerpt}</p>
                  <span className="text-[#FF6B00] font-medium inline-flex items-center">
                    En savoir plus
                    <ArrowRight className="ml-2" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="btn-secondary inline-flex items-center"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir ? */}
      <section className="bg-[#111827] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lg text-gray-300">
              Des valeurs fortes pour votre satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#FF6B00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">Expertise reconnue</h3>
              <p className="text-gray-300">Depuis 2017, plus de 150 chantiers par an et plus de 100 clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF6B00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">Qualité certifiée</h3>
              <p className="text-gray-300">Certifications et garanties décennale pour tous nos travaux</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF6B00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-white" size={40} />
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">Réactivité</h3>
              <p className="text-gray-300">Intervention rapide et respect des délais</p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF6B00] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">Équipe qualifiée</h3>
              <p className="text-gray-300">Personnel formé et régulièrement encadré</p>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Nos réalisations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Quelques exemples de nos réalisations récentes en toiture, couverture et étanchéité en Gironde et Sud-Ouest. Nous avons réalisé plus de 150 chantiers depuis 2017 pour mairies, entreprises et particuliers.
            </p>
          </div>
          
          {/* Blocs de réalisations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Réalisation 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF6B00] hover:shadow-lg transition-all duration-200 group">
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src="/réalistation/Réa 1.2.JPG"
                  alt="Réalisation couverture mairie 190 m² - Projet toiture Gironde - Aquitaine Toitures Professionnelles"
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
                  Projet de couverture sur mesure pour bâtiment municipal en Gironde. <Link to="/services/couverture" className="text-[#FF6B00] hover:underline">Découvrez nos services de couverture</Link>.
                </p>
              </div>
            </div>

            {/* Réalisation 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF6B00] hover:shadow-lg transition-all duration-200 group">
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src="/réalistation/réa 2.JPG"
                  alt="Réalisation couverture panneau sandwich entreprise aéronautique 2800 m² - Projet industriel Gironde"
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
                  Installation de panneaux sandwich pour toiture industrielle. <Link to="/services/couverture" className="text-[#FF6B00] hover:underline">Expert en couverture industrielle</Link>.
                </p>
              </div>
            </div>

            {/* Réalisation 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#FF6B00] hover:shadow-lg transition-all duration-200 group">
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src="/réalistation/réa 3.JPG"
                  alt="Réfection étanchéité entreprise défense 1800 m² - Projet étanchéité toiture plate Gironde"
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
                  Réfection complète de l'étanchéité pour site industriel. <Link to="/services/etancheite-terrasses-accessibles" className="text-[#FF6B00] hover:underline">Découvrez nos services d'étanchéité</Link>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/realisations"
              className="btn-primary inline-flex items-center"
            >
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#111827] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre processus
            </h2>
            <p className="text-lg text-gray-300">
              De la demande à la fin des travaux, un accompagnement professionnel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#FF6B00] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">Diagnostic</h3>
              <p className="text-gray-300 text-sm">
                Visite sur site et analyse complète de votre projet
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF6B00] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">Devis</h3>
              <p className="text-gray-300 text-sm">
                Devis détaillé et transparent sous 48h
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF6B00] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">Intervention</h3>
              <p className="text-gray-300 text-sm">
                Réalisation soignée par nos équipes qualifiées
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#FF6B00] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">Contrôle & conseils</h3>
              <p className="text-gray-300 text-sm">
                Vérification finale et conseils d'entretien
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Zones d'intervention
            </h2>
            <p className="text-lg text-gray-600">
              Nous intervenons en Nouvelle-Aquitaine et en Occitanie
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Nouvelle Aquitaine', 'Occitanie'].map((zone) => (
              <div
                key={zone}
                className="bg-white border-2 border-gray-200 px-6 py-3 rounded-md flex items-center space-x-2"
              >
                <MapPin className="text-[#FF6B00]" size={20} />
                <span className="font-medium text-[#111827]">{zone}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#FF6B00] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un devis ou d'un conseil ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contactez-nous pour discuter de votre projet
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

export default Home
