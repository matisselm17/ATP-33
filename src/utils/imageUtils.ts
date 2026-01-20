// Helper pour obtenir le chemin de l'image d'un service
// IMPORTANT: Les dossiers d'images doivent être copiés dans public/ pour que Vite puisse les servir
// Les chemins commencent par / car ils sont servis depuis la racine du serveur
export const getServiceImage = (folderName: string): string => {
  // Mapping des noms de dossiers vers les chemins d'images
  // Les images sont servies depuis public/, donc les chemins commencent par /
  const imageMap: Record<string, string> = {
    'accsdifficile': '/accsdifficile/1fc4ec05-44c8-4066-899c-13f157e59e29.jpeg',
    'apportenlumire': '/apportenlumire/09001a95-7749-433a-8b29-8044e170340e.jpeg',
    'couverture': '/couverture/IMG_2536.jpeg',
    'Couverture après desamiantage ': '/Couverture après desamiantage /PS 1.jpeg',
    'entretien toiture': '/entretien toiture/3e001570-2626-4dfb-85c4-3bb0accd4f70.jpeg',
    'étanchéité liquide': '/etancheite liquide/IMG_3398.jpeg',
    'etancheiteinaccessiblephoto': '/etancheiteinaccessiblephoto/IMG_9552.jpeg',
    'isolationtoitureparlextrieur': '/isolationtoitureparlextrieur/IMG_9552.jpeg',
    'patrimoine': '/patrimoine/IMG_9478.jpeg',
    'recherchedefuite': '/recherchedefuite/IMG_9552.jpeg',
    'rparationetreprisedtanchit': '/rparationetreprisedtanchit/IMG_9552.jpeg',
    'scurisationdetoiture': '/scurisationdetoiture/IMG_9552.jpeg',
    'tanchitterrassesaccessibles': '/tanchitterrassesaccessibles/PHOTO-2023-09-28-15-22-07.jpeg',
    'travauxspciaux': '/travauxspciaux/IMG_1130.jpeg',
    'zinguerie': '/zinguerie/IMG_2536.jpeg',
  }

  return imageMap[folderName] || '/placeholder-service.jpg'
}

// Fallback pour les images qui ne chargent pas
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement
  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3EImage%3C/text%3E%3C/svg%3E'
}
