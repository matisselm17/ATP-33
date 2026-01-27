# 📸 Système d'images du site

## Images d'accueil

✅ **Image Hero** : Une image de couverture est utilisée comme image de fond pour la section hero de la page d'accueil (`/couverture/IMG_2536.jpeg`)

## Images par catégorie

Le système d'images utilise automatiquement :

1. **Les images existantes** dans les dossiers correspondants (copiées dans `public/`)
2. **Des placeholders Unsplash thématiques** si l'image n'existe pas, selon la catégorie :
   - **Couverture & zinguerie** : Images de toitures et couvertures
   - **Étanchéité** : Images d'étanchéité et terrasses
   - **Diagnostic & entretien** : Images de maintenance et diagnostic
   - **Interventions spécifiques** : Images de travaux spécialisés

## Mapping des services vers images

Chaque service utilise automatiquement l'image de son dossier correspondant :

- `accsdifficile` → `/accsdifficile/1fc4ec05-44c8-4066-899c-13f157e59e29.jpeg`
- `couverture` → `/couverture/IMG_2536.jpeg`
- `zinguerie` → `/zinguerie/IMG_2536.jpeg`
- `étanchéité liquide` → `/étanchéité liquide/IMG_3398.jpeg`
- `tanchitterrassesaccessibles` → `/tanchitterrassesaccessibles/PHOTO-2023-09-28-15-22-07.jpeg`
- etc.

## Copie des images

Les images ont été copiées dans `public/` via le script `copy-images.sh`.

Pour recopier les images après ajout de nouvelles :
```bash
./copy-images.sh
```

## Fallback automatique

Si une image ne charge pas :
1. Le système essaie d'utiliser un placeholder de catégorie (Unsplash)
2. Si cela échoue, un placeholder SVG élégant est affiché

## Utilisation dans le code

```typescript
import { getServiceImage, getHeroImage, getCategoryPlaceholder } from '../../utils/imageUtils'

// Image hero
<img src={getHeroImage()} />

// Image de service
<img src={getServiceImage(service.folderName)} />

// Placeholder de catégorie
<img src={getCategoryPlaceholder(folderName)} />
```

## Ajouter de nouvelles images

1. Ajoutez vos images dans le dossier correspondant à la racine
2. Exécutez `./copy-images.sh` pour les copier dans `public/`
3. Mettez à jour `imageUtils.ts` si nécessaire pour mapper de nouveaux dossiers
