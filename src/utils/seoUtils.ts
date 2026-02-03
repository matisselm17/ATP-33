import { Service } from '../data/servicesData'

// Données structurées Schema.org pour l'entreprise
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.atp33.fr/#organization',
  name: 'Aquitaine Toitures Professionnelles',
  alternateName: 'ATP33',
  url: 'https://www.atp33.fr',
  logo: 'https://www.atp33.fr/logo.png',
  image: 'https://www.atp33.fr/logo.png',
  description: 'Entreprise spécialisée en toiture, couverture, étanchéité, zinguerie et travaux de toiture dans le Sud-Ouest. Expertise professionnelle depuis 2017.',
  telephone: '+33557803774',
  email: 'contact@atp33.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '185 rue Gay Lussac',
    addressLocality: 'Saint-Jean-d\'Illac',
    postalCode: '33127',
    addressRegion: 'Nouvelle-Aquitaine',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '44.8086',
    longitude: '-0.7775'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Gironde'
    },
    {
      '@type': 'State',
      name: 'Charente-Maritime'
    },
    {
      '@type': 'State',
      name: 'Haute-Garonne'
    }
  ],
  priceRange: '$$',
  foundingDate: '2017',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '100'
  },
  sameAs: []
})

// Données structurées pour un service
export const getServiceSchema = (service: Service, baseUrl: string = 'https://www.atp33.fr') => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${baseUrl}/services/${service.slug}#service`,
  name: service.title,
  description: service.excerpt,
  provider: {
    '@id': `${baseUrl}#organization`
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '44.8086',
      longitude: '-0.7775'
    },
    geoRadius: {
      '@type': 'Distance',
      name: 'Sud-Ouest France'
    }
  },
  serviceType: service.category,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock'
  }
})

// Générer les keywords SEO pour une page
export const generateKeywords = (service?: Service, page?: string): string => {
  const baseKeywords = [
    'toiture',
    'couverture',
    'étanchéité',
    'zinguerie',
    'réparation toiture',
    'rénovation toiture',
    'artisan couvreur',
    'entreprise toiture',
    'Gironde',
    'Charente-Maritime',
    'Haute-Garonne',
    'Sud-Ouest',
    'Bordeaux',
    'La Rochelle',
    'Brive',
    'devis toiture gratuit',
    'couvreur professionnel',
    'étanchéité toiture',
    'réparation fuite toiture',
    'zinguerie zinc',
    'gouttières',
    'terrasses accessibles',
    'bac acier',
    'panneau sandwich',
    'isolation toiture',
    'désamiantage',
    'patrimoine',
    'accès difficile',
    'recherche de fuite'
  ]

  if (service) {
    const serviceKeywords = [
      service.title.toLowerCase(),
      `${service.title} Gironde`,
      `${service.title} Sud-Ouest`,
      `${service.category} ${service.title}`,
      `devis ${service.title}`,
      `prix ${service.title}`,
      `entreprise ${service.title}`
    ]
    return [...serviceKeywords, ...baseKeywords].join(', ')
  }

  if (page === 'home') {
    return [
      ...baseKeywords,
      'entreprise toiture Gironde',
      'couvreur Gironde',
      'artisan toiture Sud-Ouest',
      'réparation toiture Bordeaux',
      'rénovation toiture Charente-Maritime'
    ].join(', ')
  }

  if (page === 'services') {
    return [
      ...baseKeywords,
      'tous nos services',
      'services toiture',
      'services couverture',
      'services étanchéité',
      'catalogue services'
    ].join(', ')
  }

  if (page === 'realisations') {
    return [
      ...baseKeywords,
      'réalisations',
      'projets',
      'chantiers',
      'références',
      'portfolio',
      'exemples travaux'
    ].join(', ')
  }

  if (page === 'contact') {
    return [
      ...baseKeywords,
      'contact',
      'devis gratuit',
      'demande devis',
      'appeler couvreur',
      'urgence fuite'
    ].join(', ')
  }

  return baseKeywords.join(', ')
}

// Générer la description SEO optimisée
export const generateDescription = (service?: Service, page?: string): string => {
  if (service) {
    return `${service.title} par Aquitaine Toitures Professionnelles (ATP33). ${service.excerpt} Expert en ${service.category.toLowerCase()} en Gironde, Charente-Maritime, Haute-Garonne et Sud-Ouest. Devis gratuit.`
  }

  if (page === 'home') {
    return 'Aquitaine Toitures Professionnelles (ATP33) : expert en toiture, couverture, étanchéité, zinguerie et travaux de toiture dans le Sud-Ouest. Rénovation, réparation, accès difficiles, recherche de fuite. Devis gratuit. Intervention Gironde, Charente-Maritime, Haute-Garonne.'
  }

  if (page === 'services') {
    return 'Découvrez tous nos services de toiture, couverture, étanchéité et zinguerie. Accès difficiles, recherche de fuite, terrasses accessibles, isolation, patrimoine. Expert dans le Sud-Ouest. Devis gratuit.'
  }

  if (page === 'realisations') {
    return 'Découvrez nos réalisations en toiture, couverture et étanchéité. Projets réalisés en Gironde, Charente-Maritime et Sud-Ouest. Mairies, entreprises, patrimoine. Références et exemples de travaux.'
  }

  if (page === 'contact') {
    return 'Contactez Aquitaine Toitures Professionnelles pour un devis gratuit. Intervention en Gironde, Charente-Maritime, Haute-Garonne. Urgence fuite ? Appelez-nous directement. Devis sous 48h.'
  }

  return 'Aquitaine Toitures Professionnelles - Expert en toiture, couverture et étanchéité dans le Sud-Ouest'
}

// Générer le titre SEO optimisé
export const generateTitle = (service?: Service, page?: string): string => {
  if (service) {
    return `${service.title} | Aquitaine Toitures Professionnelles - Expert ${service.category} Gironde & Sud-Ouest`
  }

  if (page === 'home') {
    return 'Aquitaine Toitures Professionnelles | Expert Toiture, Couverture & Étanchéité Sud-Ouest'
  }

  if (page === 'services') {
    return 'Nos Services | Toiture, Couverture, Étanchéité & Zinguerie - ATP33'
  }

  if (page === 'realisations') {
    return 'Nos Réalisations | Projets Toiture & Couverture Gironde & Sud-Ouest'
  }

  if (page === 'contact') {
    return 'Contact & Devis Gratuit | Aquitaine Toitures Professionnelles'
  }

  return 'Aquitaine Toitures Professionnelles - Expert Toiture & Couverture Sud-Ouest'
}
