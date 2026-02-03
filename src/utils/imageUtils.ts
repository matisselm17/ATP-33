// Helper pour obtenir le chemin de l'image d'un service
// IMPORTANT: Les dossiers d'images doivent être copiés dans public/ pour que Vite puisse les servir
// Les chemins commencent par / car ils sont servis depuis la racine du serveur

// Image hero pour la page d'accueil
export const getHeroImage = (): string => {
  // Utilise l'image de réalisation comme hero
  return '/réalistation/Réa 1.2.JPG'
}

// Mapping des catégories vers des images placeholder thématiques (Unsplash)
const categoryPlaceholders: Record<string, string> = {
  'Couverture & zinguerie': 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
  'Étanchéité': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop',
  'Diagnostic & entretien': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
  'Interventions spécifiques': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
}

export const getServiceImage = (folderName: string): string => {
  // Mapping des noms de dossiers vers les chemins d'images
  // Les images sont servies depuis public/, donc les chemins commencent par /
  const imageMap: Record<string, string> = {
    'accsdifficile': '/accsdifficile/IMG_9552.jpeg',
    'apportenlumire': '/apportenlumire/09001a95-7749-433a-8b29-8044e170340e.jpeg',
    'couverture': '/couverture/IMG_2536.jpeg',
    'Couverture après desamiantage ': '/Couverture après desamiantage /PS 1.jpeg',
    'entretien toiture': '/entretien toiture/nettoyage-toiture.jpeg',
    'étanchéité liquide': '/etancheite-liquide/fr-etancheite-liquide-01-16-9.jpeg',
    'etancheite liquide': '/etancheite-liquide/fr-etancheite-liquide-01-16-9.jpeg',
    'etancheiteinaccessiblephoto': '/etancheiteinaccessiblephoto/IMG_3974.jpeg',
    'isolationtoitureparlextrieur': '/isolationtoitureparlextrieur/2025-02-24-15-35-51-860.jpeg',
    'patrimoine': '/patrimoine/IMG_9478.jpeg',
    'recherchedefuite': '/recherchedefuite/atypix-soprema-entreprises-soprassistance-vannes-08-web-1024x683.jpg',
    'rparationetreprisedtanchit': '/rparationetreprisedtanchit/IMG_9552.jpeg',
    'scurisationdetoiture': '/scurisationdetoiture/Point A.jpeg',
    'tanchitterrassesaccessibles': '/tanchitterrassesaccessibles/PHOTO-2023-09-28-15-22-07.jpeg',
    'travauxspciaux': '/travauxspciaux/IMG_1130.jpeg',
    'zinguerie': '/zinguerie/664e153f5b98aad1d0fb319f_Couloir et Noue en Zinc.jpeg',
  }

  return imageMap[folderName] || getCategoryPlaceholder(folderName)
}

// Obtenir un placeholder selon la catégorie du service
export const getCategoryPlaceholder = (folderName: string): string => {
  // Mapping simplifié pour déterminer la catégorie depuis le folderName
  if (folderName.includes('couverture') || folderName.includes('zinguerie')) {
    return categoryPlaceholders['Couverture & zinguerie']
  }
  if (folderName.includes('etancheite') || folderName.includes('étanchéité')) {
    return categoryPlaceholders['Étanchéité']
  }
  if (folderName.includes('entretien') || folderName.includes('recherche') || folderName.includes('diagnostic')) {
    return categoryPlaceholders['Diagnostic & entretien']
  }
  return categoryPlaceholders['Interventions spécifiques']
}

// Fallback pour les images qui ne chargent pas
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement
  // Utiliser un placeholder SVG élégant
  target.src = getPlaceholderSVG()
}

// Générer un placeholder SVG avec le nom du service
export const getPlaceholderSVG = (text: string = 'Image'): string => {
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect fill="url(#grad)" width="800" height="600"/>
      <g fill="#9ca3af" opacity="0.5">
        <path d="M200 200 L600 200 L600 400 L200 400 Z" stroke="#6b7280" stroke-width="2" fill="none"/>
        <circle cx="400" cy="300" r="60" stroke="#6b7280" stroke-width="2" fill="none"/>
        <path d="M340 300 L380 340 L460 260" stroke="#6b7280" stroke-width="3" fill="none" stroke-linecap="round"/>
      </g>
      <text x="400" y="480" font-family="Arial, sans-serif" font-size="24" fill="#6b7280" text-anchor="middle" font-weight="500">${text}</text>
    </svg>
  `)}`
}

// Obtenir une image de réalisation
export const getRealisationsImage = (index: number): string => {
  const images = [
    '/couverture/IMG_2536.jpeg',
    '/couverture/IMG_8346.jpeg',
    '/couverture/IMG_9472.jpeg',
    '/zinguerie/664e153f5b98aad1d0fb319f_Couloir et Noue en Zinc.jpeg',
    '/zinguerie/IMG_8406.jpeg',
    '/tanchitterrassesaccessibles/PHOTO-2023-09-28-15-22-07.jpeg',
    '/patrimoine/IMG_9478.jpeg',
    '/etancheite-liquide/fr-etancheite-liquide-01-16-9.jpeg',
    '/accsdifficile/IMG_9552.jpeg',
    '/etancheiteinaccessiblephoto/IMG_3974.jpeg',
    '/etancheiteinaccessiblephoto/IMG_4400.jpeg',
    '/scurisationdetoiture/Point A.jpeg',
  ]
  return images[index % images.length] || getPlaceholderSVG('Réalisation')
}
