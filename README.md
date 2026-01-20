# ATP33 - Site Vitrine React

Site vitrine professionnel pour ATP33, entreprise spécialisée en travaux du bâtiment (étanchéité, couverture, bardage, etc.) en Gironde.

## 🚀 Technologies

- **React 18** avec TypeScript
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS v4** - Framework CSS utility-first
- **React Router DOM** - Navigation SPA
- **lucide-react** - Icônes modernes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 📁 Structure du Projet

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                  # Configuration des routes
│   │   ├── components/
│   │   │   ├── Header.tsx           # Navigation sticky + CTA
│   │   │   └── Footer.tsx           # Footer avec infos contact
│   │   └── pages/
│   │       ├── Home.tsx             # Page d'accueil
│   │       ├── Services.tsx         # Liste des services
│   │       ├── Realisations.tsx     # Galerie de réalisations
│   │       └── Contact.tsx          # Formulaire de contact
│   ├── main.tsx                     # Point d'entrée React
│   └── styles/
│       └── index.css                # Styles Tailwind CSS
├── index.html                       # Template HTML
├── vite.config.ts                   # Configuration Vite
└── package.json
```

## 🎯 Routes Disponibles

- `/` - Page d'accueil
- `/services` - Liste des services
- `/realisations` - Galerie de réalisations
- `/contact` - Formulaire de contact

## ✨ Fonctionnalités

- ✅ Navigation SPA avec React Router
- ✅ Header sticky avec menu responsive
- ✅ Bouton "Demande de devis" visible sur toutes les pages
- ✅ Footer avec informations de contact (placeholders)
- ✅ Design responsive mobile-first avec Tailwind CSS
- ✅ TypeScript pour la sécurité des types
- ✅ Code structuré et modulaire

## 📝 Prochaines Étapes

Le site est actuellement en version de base avec uniquement la structure et la navigation. Les pages contiennent des H1 simples prêts à être complétés avec le contenu métier.

### À compléter :

1. **Page Accueil** : Hero, présentation entreprise, services, zones d'intervention
2. **Page Services** : Détails des 6 services (étanchéité, couverture, bardage, etc.)
3. **Page Réalisations** : Galerie photos des projets réalisés
4. **Page Contact** : Formulaire de demande de devis fonctionnel
5. **Footer** : Compléter les informations de contact (téléphone, email)

## 🔧 Personnalisation

### Modifier les couleurs Tailwind

Les couleurs peuvent être personnalisées dans `src/styles/index.css` ou directement via les classes Tailwind dans les composants.

### Ajouter du contenu

Chaque page est dans `src/app/pages/` et peut être modifiée indépendamment.

---

**ATP33** - Spécialiste en étanchéité, couverture et bardage en Gironde
