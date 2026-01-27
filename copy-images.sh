#!/bin/bash

# Script pour copier les images dans le dossier public pour Vite

echo "📸 Copie des images dans public/..."

# Créer le dossier public s'il n'existe pas
mkdir -p public

# Copier tous les dossiers d'images dans public/
for dir in accsdifficile apportenlumire couverture "Couverture après desamiantage " "entretien toiture" "étanchéité liquide" etancheiteinaccessiblephoto isolationtoitureparlextrieur patrimoine recherchedefuite rparationetreprisedtanchit scurisationdetoiture tanchitterrassesaccessibles travauxspciaux zinguerie; do
  if [ -d "$dir" ]; then
    echo "  ✓ Copie de $dir"
    cp -r "$dir" public/ 2>/dev/null || true
  fi
done

echo "✅ Images copiées dans public/"
echo ""
echo "Les images sont maintenant accessibles via /nom-du-dossier/nom-image.jpeg"
