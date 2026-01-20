export type ServiceCategory = 
  | 'Couverture & zinguerie'
  | 'Étanchéité'
  | 'Diagnostic & entretien'
  | 'Interventions spécifiques'

export interface Service {
  id: string
  title: string
  slug: string
  folderName: string
  category: ServiceCategory
  excerpt: string
  heroTitle: string
  intro: string
  whatWeDo: string[]
  whenToCall: string[]
  faq: { question: string; answer: string }[]
  featured: boolean
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Accès difficile',
    slug: 'acces-difficile',
    folderName: 'accsdifficile',
    category: 'Interventions spécifiques',
    excerpt: 'Interventions sécurisées sur toitures complexes et zones d\'accès difficile.',
    heroTitle: 'Interventions sur toitures en accès difficile',
    intro: 'Les toitures complexes, hautes ou à forte pente nécessitent des techniques spécifiques et une sécurisation rigoureuse. Nous intervenons sur tous types de configurations difficiles d\'accès, en garantissant la sécurité des équipes et la qualité de l\'intervention.',
    whatWeDo: [
      'Diagnostic sécurisé des zones d\'accès difficile',
      'Mise en place de dispositifs de sécurité adaptés',
      'Interventions sur toitures hautes et à forte pente',
      'Travaux en milieu confiné ou complexe',
      'Utilisation d\'équipements spécialisés',
      'Coordination avec les contraintes d\'accès',
      'Respect des normes de sécurité en hauteur'
    ],
    whenToCall: [
      'Toiture à forte pente nécessitant des équipements spécifiques',
      'Bâtiment haut sans accès direct',
      'Zone difficile d\'accès nécessitant des techniques particulières',
      'Besoin d\'intervention sécurisée sur structure complexe'
    ],
    faq: [
      {
        question: 'Quels types d\'accès difficiles gérez-vous ?',
        answer: 'Nous intervenons sur toitures hautes, à forte pente, en milieu confiné, avec accès limité ou nécessitant des équipements spécifiques. Chaque situation est analysée pour définir la méthode d\'intervention la plus sécurisée.'
      },
      {
        question: 'Quelles garanties de sécurité ?',
        answer: 'Toutes nos interventions respectent les normes de sécurité en hauteur. Nous utilisons des EPI adaptés, sécurisons les zones de travail et formons nos équipes aux techniques d\'accès difficile.'
      },
      {
        question: 'Combien de temps prend une intervention ?',
        answer: 'Le temps d\'intervention varie selon la complexité de l\'accès et la nature des travaux. Un diagnostic préalable permet d\'évaluer précisément la durée nécessaire.'
      }
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Apport en lumière',
    slug: 'apport-en-lumiere',
    folderName: 'apportenlumire',
    category: 'Couverture & zinguerie',
    excerpt: 'Pose de fenêtres de toit et puits de lumière pour plus de luminosité.',
    heroTitle: 'Apport en lumière : fenêtres de toit et puits de lumière',
    intro: 'Améliorer la luminosité naturelle d\'un espace nécessite une expertise en couverture et étanchéité. Nous installons fenêtres de toit et puits de lumière avec des raccords étanches et une intégration harmonieuse à votre couverture existante.',
    whatWeDo: [
      'Pose de fenêtres de toit toutes dimensions',
      'Installation de puits de lumière',
      'Raccords étanches avec la couverture',
      'Intégration harmonieuse aux matériaux existants',
      'Travail sur tous types de toitures',
      'Étanchéité périphérique garantie',
      'Finitions soignées'
    ],
    whenToCall: [
      'Besoin d\'améliorer la luminosité naturelle',
      'Projet de rénovation avec ouverture',
      'Remplacement de fenêtre de toit existante',
      'Fuites autour d\'une fenêtre de toit'
    ],
    faq: [
      {
        question: 'Quels types de fenêtres installez-vous ?',
        answer: 'Nous installons tous types de fenêtres de toit et puits de lumière, adaptés à votre type de couverture (tuiles, ardoises, zinc, etc.). Chaque installation est réalisée sur mesure.'
      },
      {
        question: 'Garantit-on l\'étanchéité ?',
        answer: 'Oui, nous garantissons l\'étanchéité des raccords et réalisons les relevés périphériques nécessaires pour éviter toute infiltration.'
      },
      {
        question: 'Travaillez-vous sur toitures anciennes ?',
        answer: 'Oui, nous intervenons aussi bien sur constructions neuves que sur bâti ancien, en respectant les matériaux et techniques d\'origine.'
      }
    ],
    featured: false
  },
  {
    id: '3',
    title: 'Couverture',
    slug: 'couverture',
    folderName: 'couverture',
    category: 'Couverture & zinguerie',
    excerpt: 'Pose, réparation et rénovation de toitures en tous matériaux.',
    heroTitle: 'Couverture : expertise en tous matériaux',
    intro: 'De la pose neuve à la rénovation complète, nous maîtrisons tous les matériaux de couverture : tuiles, ardoises, zinc, bac acier, shingle. Notre savoir-faire couvre la toiture dans son ensemble, des supports aux finitions.',
    whatWeDo: [
      'Pose de couverture neuve tous matériaux',
      'Rénovation et réparation de toitures',
      'Travaux de faîtage et rives',
      'Ventilation et sous-toiture',
      'Réparation de tuiles et ardoises',
      'Remplacement de couverture',
      'Finitions et accessoires'
    ],
    whenToCall: [
      'Tuiles ou ardoises cassées ou déplacées',
      'Fuites récurrentes',
      'Toiture à rénover complètement',
      'Projet de construction neuve',
      'Ventilation insuffisante des combles'
    ],
    faq: [
      {
        question: 'Quels matériaux de couverture utilisez-vous ?',
        answer: 'Nous travaillons avec tous les matériaux : tuiles terre cuite, ardoises naturelles, zinc, bac acier, shingle, et matériaux spécifiques selon votre région et votre bâti.'
      },
      {
        question: 'Intervenez-vous en urgence pour les réparations ?',
        answer: 'Oui, pour les réparations urgentes suite à intempéries ou dommages, nous pouvons intervenir rapidement pour sécuriser votre toiture.'
      },
      {
        question: 'Quelle garantie sur les travaux ?',
        answer: 'Nos travaux bénéficient de garanties adaptées aux matériaux posés et aux interventions réalisées. Nous vous informons des garanties spécifiques lors du devis.'
      }
    ],
    featured: true
  },
  {
    id: '4',
    title: 'Couverture après désamiantage',
    slug: 'couverture-apres-desamiantage',
    folderName: 'Couverture après desamiantage ',
    category: 'Couverture & zinguerie',
    excerpt: 'Reprise de couverture après retrait d\'amiante, en conformité.',
    heroTitle: 'Reprise de couverture après désamiantage',
    intro: 'Après un désamiantage, la reprise de couverture doit être réalisée dans le respect des normes et en garantissant une étanchéité parfaite. Nous intervenons pour remettre en état votre toiture après retrait d\'amiante, avec toutes les précautions nécessaires.',
    whatWeDo: [
      'Remise en état complète de la couverture',
      'Respect des normes post-désamiantage',
      'Étanchéité garantie',
      'Pose de matériaux conformes',
      'Finitions soignées',
      'Coordination avec les équipes de désamiantage',
      'Conformité réglementaire'
    ],
    whenToCall: [
      'Désamiantage prévu ou en cours',
      'Besoin de remise en état après retrait',
      'Vérification de conformité post-intervention',
      'Projet de rénovation après désamiantage'
    ],
    faq: [
      {
        question: 'Quels matériaux posez-vous après désamiantage ?',
        answer: 'Nous posons des matériaux conformes et adaptés à votre région, en respectant les normes en vigueur et en garantissant une étanchéité durable.'
      },
      {
        question: 'Combien de temps après le désamiantage peut-on intervenir ?',
        answer: 'L\'intervention peut avoir lieu dès validation du diagnostic et dépose effectuée, en coordination avec les équipes de désamiantage.'
      },
      {
        question: 'Garantissez-vous l\'étanchéité ?',
        answer: 'Oui, nous garantissons l\'étanchéité complète de la couverture remise en état, avec contrôle systématique des points sensibles.'
      }
    ],
    featured: false
  },
  {
    id: '5',
    title: 'Entretien toiture',
    slug: 'entretien-toiture',
    folderName: 'entretien toiture',
    category: 'Diagnostic & entretien',
    excerpt: 'Contrôle, nettoyage et maintenance préventive de votre toiture.',
    heroTitle: 'Entretien et maintenance préventive de toiture',
    intro: 'Un entretien régulier prolonge la durée de vie de votre toiture et évite les interventions coûteuses. Nous réalisons des contrôles complets, du nettoyage raisonné et des interventions préventives sur tous les points sensibles.',
    whatWeDo: [
      'Contrôle visuel complet de la toiture',
      'Vérification des points sensibles',
      'Nettoyage et démoussage raisonné',
      'Vérification des évacuations',
      'Contrôle de la ventilation',
      'Interventions préventives',
      'Conseils d\'entretien personnalisés'
    ],
    whenToCall: [
      'Toiture envahie par la mousse',
      'Évacuations bouchées',
      'Contrôle annuel préventif',
      'Vérification après intempéries',
      'Problèmes récurrents à prévenir'
    ],
    faq: [
      {
        question: 'À quelle fréquence entretenir sa toiture ?',
        answer: 'Un contrôle annuel est recommandé, avec nettoyage tous les 2 à 3 ans selon l\'exposition et l\'environnement. Un suivi régulier permet de détecter les problèmes tôt.'
      },
      {
        question: 'Le démoussage est-il nécessaire ?',
        answer: 'Le démoussage raisonné est utile pour éviter la dégradation des matériaux, mais doit être réalisé avec précaution pour ne pas endommager la couverture.'
      },
      {
        question: 'Que comprend un contrôle préventif ?',
        answer: 'Un contrôle préventif inclut la vérification des tuiles/ardoises, des solins, des évacuations, de la ventilation, et l\'identification des points à surveiller.'
      }
    ],
    featured: true
  },
  {
    id: '6',
    title: 'Étanchéité liquide',
    slug: 'etancheite-liquide',
    folderName: 'étanchéité liquide',
    category: 'Étanchéité',
    excerpt: 'Solutions d\'étanchéité en membranes liquides pour terrasses et toitures.',
    heroTitle: 'Étanchéité liquide : solutions durables',
    intro: 'Les membranes d\'étanchéité liquide offrent une excellente adhérence et s\'adaptent aux formes complexes. Idéales pour terrasses, balcons et toitures plates, elles assurent une étanchéité continue et durable.',
    whatWeDo: [
      'Application de membranes liquides SEL',
      'Traitement des points singuliers',
      'Relevés périphériques',
      'Étanchéité de terrasses et balcons',
      'Reprises et réparations',
      'Renforcement sur zones sensibles',
      'Finitions et protections'
    ],
    whenToCall: [
      'Terrasses à étancher ou à réparer',
      'Fuites sur toiture plate',
      'Balcon nécessitant une étanchéité',
      'Projet de création de terrasse accessible',
      'Reprise d\'étanchéité défaillante'
    ],
    faq: [
      {
        question: 'Quels sont les avantages de l\'étanchéité liquide ?',
        answer: 'L\'étanchéité liquide s\'adapte aux formes complexes, offre une adhérence excellente, est sans soudure donc sans point faible, et convient aux terrasses accessibles.'
      },
      {
        question: 'Quelle durée de vie ?',
        answer: 'Les membranes liquides de qualité offrent une durée de vie de 15 à 20 ans selon les conditions d\'exposition et l\'entretien.'
      },
      {
        question: 'Peut-on marcher dessus après application ?',
        answer: 'Selon le type de membrane, un délai de séchage est nécessaire. Pour les terrasses accessibles, nous posons des protections ou revêtements adaptés.'
      }
    ],
    featured: true
  },
  {
    id: '7',
    title: 'Étanchéité inaccessible',
    slug: 'etancheite-inaccessible',
    folderName: 'etancheiteinaccessiblephoto',
    category: 'Diagnostic & entretien',
    excerpt: 'Diagnostic et intervention sur toitures difficiles d\'accès.',
    heroTitle: 'Diagnostic et intervention sur étanchéité inaccessible',
    intro: 'Certaines toitures sont difficiles d\'accès pour un diagnostic classique. Nous utilisons des méthodes adaptées, notamment la photographie détaillée et l\'inspection par drone si nécessaire, pour identifier précisément les problèmes et proposer des solutions adaptées.',
    whatWeDo: [
      'Pré-diagnostic par photographie détaillée',
      'Inspection visuelle sécurisée',
      'Identification précise des défauts',
      'Propositions de solutions adaptées',
      'Interventions ciblées',
      'Suivi photographique des travaux',
      'Diagnostic post-intervention'
    ],
    whenToCall: [
      'Toiture difficile d\'accès à diagnostiquer',
      'Fuites récurrentes sans origine visible',
      'Besoin d\'inspection préalable',
      'Vérification sans accès direct',
      'Contrôle après travaux'
    ],
    faq: [
      {
        question: 'Comment diagnostiquez-vous une toiture inaccessible ?',
        answer: 'Nous utilisons la photographie haute définition, l\'inspection par drone si nécessaire, et toutes les techniques permettant d\'identifier les problèmes sans accès direct.'
      },
      {
        question: 'Un diagnostic photo suffit-il ?',
        answer: 'Le diagnostic photo permet souvent d\'identifier les problèmes majeurs. Si nécessaire, nous proposons une inspection complémentaire ou une intervention sécurisée.'
      },
      {
        question: 'Intervenez-vous après diagnostic ?',
        answer: 'Oui, nous pouvons intervenir pour réparer les défauts identifiés, avec des méthodes adaptées à l\'accessibilité de votre toiture.'
      }
    ],
    featured: false
  },
  {
    id: '8',
    title: 'Isolation toiture par l\'extérieur',
    slug: 'isolation-toiture-exterieure',
    folderName: 'isolationtoitureparlextrieur',
    category: 'Couverture & zinguerie',
    excerpt: 'Sarking et isolation performante par l\'extérieur pour plus de confort.',
    heroTitle: 'Isolation de toiture par l\'extérieur (sarking)',
    intro: 'L\'isolation par l\'extérieur offre de nombreux avantages : meilleure performance thermique, confort été comme hiver, pas de perte d\'espace habitable. Le sarking, technique d\'isolation sous couverture, est particulièrement adapté en rénovation comme en construction neuve.',
    whatWeDo: [
      'Isolation par sarking (sous couverture)',
      'Pose de membranes isolantes performantes',
      'Amélioration de l\'inertie thermique',
      'Rénovation sans perturber l\'intérieur',
      'Optimisation de la ventilation',
      'Travaux sur bâti existant et neuf',
      'Conseil en performance énergétique'
    ],
    whenToCall: [
      'Combles froids à améliorer',
      'Projet de rénovation énergétique',
      'Besoin d\'isoler sans perdre d\'espace',
      'Problèmes de condensation',
      'Amélioration du confort été/hiver'
    ],
    faq: [
      {
        question: 'Quels sont les avantages de l\'isolation par l\'extérieur ?',
        answer: 'L\'isolation par l\'extérieur améliore fortement la performance thermique, ne réduit pas l\'espace habitable, élimine les ponts thermiques et améliore le confort été comme hiver.'
      },
      {
        question: 'Doit-on refaire la couverture ?',
        answer: 'Souvent, l\'isolation par l\'extérieur s\'accompagne d\'une rénovation de couverture, ce qui permet d\'optimiser l\'ensemble. Mais il est possible d\'isoler sans tout refaire selon les cas.'
      },
      {
        question: 'Quelle amélioration de performance attendre ?',
        answer: 'L\'isolation par l\'extérieur peut améliorer significativement la performance thermique, avec des gains pouvant atteindre 30 à 40% selon la situation initiale.'
      }
    ],
    featured: false
  },
  {
    id: '9',
    title: 'Patrimoine',
    slug: 'patrimoine',
    folderName: 'patrimoine',
    category: 'Interventions spécifiques',
    excerpt: 'Travaux soignés sur bâti ancien et patrimoine architectural.',
    heroTitle: 'Travaux sur bâti ancien et patrimoine',
    intro: 'Les bâtiments anciens et le patrimoine architectural nécessitent une approche respectueuse des techniques et matériaux d\'origine. Nous intervenons avec savoir-faire sur ces ouvrages, en préservant leur caractère tout en assurant étanchéité et pérennité.',
    whatWeDo: [
      'Travaux respectueux des techniques anciennes',
      'Utilisation de matériaux traditionnels',
      'Réparation et restauration soignées',
      'Conservation du caractère patrimonial',
      'Étanchéité adaptée aux matériaux anciens',
      'Finitions d\'époque',
      'Conseil en techniques historiques'
    ],
    whenToCall: [
      'Bâtiment ancien nécessitant des travaux',
      'Projet de rénovation patrimoniale',
      'Respect des techniques et matériaux d\'origine',
      'Restauration de toiture historique',
      'Intervention sur monument ou bâti remarquable'
    ],
    faq: [
      {
        question: 'Travaillez-vous avec des matériaux traditionnels ?',
        answer: 'Oui, nous maîtrisons les matériaux traditionnels (tuiles anciennes, ardoises, zinc traditionnel) et les techniques d\'époque pour préserver le caractère des bâtiments anciens.'
      },
      {
        question: 'Respectez-vous les contraintes patrimoniales ?',
        answer: 'Absolument. Nous adaptons nos interventions aux contraintes patrimoniales et aux prescriptions éventuelles des architectes des Bâtiments de France.'
      },
      {
        question: 'Peut-on moderniser un bâti ancien ?',
        answer: 'Oui, il est possible d\'améliorer les performances (isolation, étanchéité) tout en respectant l\'aspect et les techniques d\'origine, avec une approche adaptée.'
      }
    ],
    featured: false
  },
  {
    id: '10',
    title: 'Recherche de fuite',
    slug: 'recherche-fuite',
    folderName: 'recherchedefuite',
    category: 'Diagnostic & entretien',
    excerpt: 'Diagnostic précis des fuites et infiltrations d\'eau.',
    heroTitle: 'Recherche et localisation de fuites',
    intro: 'Les fuites d\'eau peuvent avoir des origines multiples et parfois difficiles à identifier. Nous disposons de méthodes de diagnostic précises pour localiser les infiltrations, des plus évidentes aux plus complexes, et intervenons de manière ciblée.',
    whatWeDo: [
      'Diagnostic précis des infiltrations',
      'Localisation par différentes méthodes',
      'Inspection visuelle détaillée',
      'Recherche sur toitures, terrasses, balcons',
      'Identification des causes multiples',
      'Test d\'étanchéité',
      'Rapport détaillé avec photos'
    ],
    whenToCall: [
      'Taches d\'humidité apparaissant',
      'Infiltration après pluie',
      'Fuites récurrentes non localisées',
      'Besoin d\'un diagnostic avant travaux',
      'Urgence fuite d\'eau'
    ],
    faq: [
      {
        question: 'Comment localisez-vous une fuite ?',
        answer: 'Nous combinons inspection visuelle, test d\'étanchéité, vérification des points sensibles (solins, raccords, évacuations) et méthodes adaptées selon la configuration de votre toiture.'
      },
      {
        question: 'Combien de temps prend un diagnostic ?',
        answer: 'Un diagnostic de base prend généralement 1 à 2 heures. Les cas complexes peuvent nécessiter plusieurs passages et tests supplémentaires.'
      },
      {
        question: 'Intervenez-vous en urgence ?',
        answer: 'Oui, pour les fuites urgentes, nous pouvons intervenir rapidement pour limiter les dégâts et identifier la cause.'
      }
    ],
    featured: true
  },
  {
    id: '11',
    title: 'Réparation & reprise d\'étanchéité',
    slug: 'reparation-reprise-etancheite',
    folderName: 'rparationetreprisedtanchit',
    category: 'Étanchéité',
    excerpt: 'Reprises ciblées et réparations d\'étanchéité défaillante.',
    heroTitle: 'Réparation et reprise d\'étanchéité',
    intro: 'Les défauts d\'étanchéité nécessitent des interventions ciblées et durables. Nous réalisons des reprises localisées sur solins, relevés, joints et zones dégradées, avec des techniques adaptées à chaque matériau et situation.',
    whatWeDo: [
      'Reprise de solins et relevés',
      'Réparation de joints défaillants',
      'Renforcement des points sensibles',
      'Traitement des zones dégradées',
      'Réparation de membranes',
      'Relevés périphériques',
      'Reprises localisées durables'
    ],
    whenToCall: [
      'Solins dégradés ou décollés',
      'Joints qui laissent passer l\'eau',
      'Reprises localisées à effectuer',
      'Étanchéité partielle à réparer',
      'Défauts identifiés lors d\'un diagnostic'
    ],
    faq: [
      {
        question: 'Quels types de reprises réalisez-vous ?',
        answer: 'Nous réalisons tous types de reprises : solins, relevés, joints, membranes, points singuliers, avec des techniques adaptées à chaque matériau (zinc, EPDM, bitume, etc.).'
      },
      {
        question: 'Une reprise localisée est-elle durable ?',
        answer: 'Oui, une reprise bien réalisée avec les bons matériaux et techniques peut être aussi durable qu\'une pose neuve. L\'important est d\'identifier et traiter toutes les causes.'
      },
      {
        question: 'Doit-on tout refaire si une zone fuit ?',
        answer: 'Non, souvent une reprise localisée suffit si le problème est circonscrit. Nous vous conseillons si une rénovation complète est plus appropriée.'
      }
    ],
    featured: false
  },
  {
    id: '12',
    title: 'Sécurisation de toiture',
    slug: 'securisation-toiture',
    folderName: 'scurisationdetoiture',
    category: 'Interventions spécifiques',
    excerpt: 'Solutions d\'accès et sécurisation pour toitures et zones en hauteur.',
    heroTitle: 'Sécurisation de toiture et accès sécurisés',
    intro: 'L\'accès et le travail sur toiture nécessitent des dispositifs de sécurisation adaptés. Nous installons et utilisons des solutions d\'accès sécurisées, respectant les normes de sécurité en hauteur, pour toutes interventions et maintenances.',
    whatWeDo: [
      'Installation de dispositifs d\'accès sécurisés',
      'Mise en place d\'équipements de protection',
      'Sécurisation des zones de travail',
      'Accès sécurisé pour interventions',
      'Maintenance avec dispositifs permanents',
      'Respect des normes de sécurité',
      'Conseil en solutions d\'accès'
    ],
    whenToCall: [
      'Besoin d\'accès sécurisé régulier',
      'Interventions nécessitant sécurisation',
      'Installation de dispositifs permanents',
      'Maintenance préventive à sécuriser',
      'Conformité avec normes de sécurité'
    ],
    faq: [
      {
        question: 'Quels types de dispositifs installez-vous ?',
        answer: 'Nous installons des dispositifs d\'accès sécurisés adaptés à votre configuration : points d\'ancrage, garde-corps, systèmes d\'accès sécurisés, selon vos besoins et contraintes.'
      },
      {
        question: 'Les dispositifs sont-ils permanents ?',
        answer: 'Cela dépend de vos besoins. Nous pouvons installer des dispositifs permanents pour un accès régulier ou temporaires pour des interventions ponctuelles.'
      },
      {
        question: 'Respectez-vous les normes en vigueur ?',
        answer: 'Oui, tous nos dispositifs et interventions respectent les normes de sécurité en hauteur en vigueur.'
      }
    ],
    featured: false
  },
  {
    id: '13',
    title: 'Étanchéité terrasses accessibles',
    slug: 'etancheite-terrasses-accessibles',
    folderName: 'tanchitterrassesaccessibles',
    category: 'Étanchéité',
    excerpt: 'Étanchéité complète de terrasses accessibles avec revêtements adaptés.',
    heroTitle: 'Étanchéité de terrasses accessibles',
    intro: 'Les terrasses accessibles nécessitent une étanchéité particulièrement performante et des revêtements adaptés à la circulation. Nous réalisons l\'étanchéité complète avec évacuations, relevés, protections et finitions adaptées à l\'usage.',
    whatWeDo: [
      'Étanchéité complète de terrasses',
      'Traitement des évacuations et relevés',
      'Protections mécaniques adaptées',
      'Pose de revêtements de sol',
      'Relevés périphériques garantis',
      'Zones de circulation sécurisées',
      'Finitions soignées et durables'
    ],
    whenToCall: [
      'Projet de terrasse accessible',
      'Terasse existante qui fuit',
      'Remplacement d\'étanchéité défaillante',
      'Rénovation de terrasse',
      'Création de zone extérieure accessible'
    ],
    faq: [
      {
        question: 'Quels revêtements pour terrasses accessibles ?',
        answer: 'Nous proposons différents revêtements adaptés : dalles sur plots, bois composite, résine, selon vos préférences et contraintes techniques.'
      },
      {
        question: 'Garantissez-vous l\'étanchéité sur le long terme ?',
        answer: 'Oui, avec des matériaux de qualité et une mise en œuvre soignée, nous garantissons une étanchéité durable, avec protections mécaniques adaptées à l\'usage.'
      },
      {
        question: 'Combien de temps pour une terrasse accessible ?',
        answer: 'Le temps d\'intervention varie selon la surface, la complexité et les finitions choisies. Un délai de 1 à 2 semaines est généralement nécessaire.'
      }
    ],
    featured: false
  },
  {
    id: '14',
    title: 'Travaux spéciaux',
    slug: 'travaux-speciaux',
    folderName: 'travauxspciaux',
    category: 'Interventions spécifiques',
    excerpt: 'Solutions sur-mesure pour projets complexes et cas particuliers.',
    heroTitle: 'Travaux spéciaux et sur-mesure',
    intro: 'Certains projets nécessitent des solutions adaptées et un savoir-faire spécifique. Nous intervenons sur des cas complexes, des contraintes particulières et des projets sur-mesure, en apportant des solutions techniques appropriées.',
    whatWeDo: [
      'Étude de cas complexes',
      'Solutions sur-mesure adaptées',
      'Interventions avec contraintes particulières',
      'Coordination avec autres corps de métier',
      'Techniques spécifiques selon le projet',
      'Accompagnement de A à Z',
      'Conseil en solutions techniques'
    ],
    whenToCall: [
      'Projet avec contraintes particulières',
      'Cas complexe nécessitant expertise',
      'Besoin de solutions sur-mesure',
      'Coordination de plusieurs interventions',
      'Problème technique spécifique'
    ],
    faq: [
      {
        question: 'Quels types de projets spéciaux gérez-vous ?',
        answer: 'Nous intervenons sur tous types de projets complexes : contraintes architecturales, coordination de métiers, solutions techniques spécifiques, projets sur-mesure.'
      },
      {
        question: 'Proposez-vous un accompagnement complet ?',
        answer: 'Oui, pour les projets complexes, nous proposons un accompagnement de A à Z, de l\'étude à la réalisation, avec coordination si nécessaire.'
      },
      {
        question: 'Comment évaluez-vous un projet spécial ?',
        answer: 'Chaque projet spécial fait l\'objet d\'une étude détaillée, avec visite sur site, analyse des contraintes et proposition de solutions adaptées.'
      }
    ],
    featured: false
  },
  {
    id: '15',
    title: 'Zinguerie',
    slug: 'zinguerie',
    folderName: 'zinguerie',
    category: 'Couverture & zinguerie',
    excerpt: 'Pose et réparation de zinguerie : gouttières, chéneaux, noues, solins.',
    heroTitle: 'Zinguerie : finitions et évacuation des eaux',
    intro: 'La zinguerie assure l\'étanchéité des points singuliers et l\'évacuation efficace des eaux de pluie. Nous réalisons tous travaux de zinguerie : gouttières, chéneaux, noues, solins, relevés, avec un savoir-faire précis et des finitions soignées.',
    whatWeDo: [
      'Pose et réparation de gouttières',
      'Fabrication et pose de chéneaux',
      'Noues et solins sur mesure',
      'Relevés et finitions périphériques',
      'Évacuation des eaux pluviales',
      'Zinguerie de rives et faîtage',
      'Fabrication sur mesure'
    ],
    whenToCall: [
      'Gouttières bouchées ou dégradées',
      'Fuites au niveau des noues ou solins',
      'Évacuation inefficace des eaux',
      'Projet avec zinguerie à réaliser',
      'Rénovation de finitions'
    ],
    faq: [
      {
        question: 'Quels matériaux pour la zinguerie ?',
        answer: 'Nous travaillons principalement le zinc, mais aussi l\'aluminium, le cuivre et d\'autres métaux selon vos préférences et contraintes.'
      },
      {
        question: 'Fabriquez-vous sur mesure ?',
        answer: 'Oui, nous fabriquons sur mesure tous les éléments de zinguerie : chéneaux, noues, solins, pour s\'adapter parfaitement à votre toiture.'
      },
      {
        question: 'Quelle garantie sur la zinguerie ?',
        answer: 'La zinguerie bien réalisée offre une très bonne durabilité. Nous garantissons nos travaux et vous conseillons sur l\'entretien nécessaire.'
      }
    ],
    featured: true
  }
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug)
}

export const getServicesByCategory = (category: ServiceCategory): Service[] => {
  return services.filter(service => service.category === category)
}

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured)
}
