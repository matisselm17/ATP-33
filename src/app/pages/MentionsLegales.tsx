const MentionsLegales = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentions légales</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Informations légales concernant ATP33
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">1. Éditeur du site</h2>
              <div className="text-gray-700 space-y-2">
                <p><strong>Raison sociale :</strong> ATP33</p>
                <p><strong>Adresse :</strong> 185 rue Gay Lussac, 33127 Saint-Jean-d'Illac, France</p>
                <p><strong>Téléphone :</strong> 05 57 80 37 74</p>
                <p><strong>Email :</strong> contact@atp33.fr</p>
                <p><strong>Année de création :</strong> 2017</p>
              </div>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">2. Directeur de publication</h2>
              <p className="text-gray-700">
                Le directeur de la publication est le représentant légal de l'entreprise ATP33.
              </p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">3. Hébergement</h2>
              <p className="text-gray-700">
                Le site est hébergé par un prestataire technique. Pour toute question concernant l'hébergement, 
                veuillez nous contacter à l'adresse email indiquée ci-dessus.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700">
                La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement 
                interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">5. Données personnelles</h2>
              <p className="text-gray-700 mb-4">
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement 
                Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-700">
                Pour exercer ce droit, vous pouvez nous contacter à l'adresse : contact@atp33.fr
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">6. Cookies</h2>
              <p className="text-gray-700">
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. 
                En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">7. Responsabilité</h2>
              <p className="text-gray-700 mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement 
                remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p className="text-gray-700">
                ATP33 ne pourra être tenu responsable des dommages directs et indirects causés au matériel de 
                l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne 
                répondant pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">8. Liens hypertextes</h2>
              <p className="text-gray-700">
                Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
                Les liens vers ces autres ressources vous font quitter le site ATP33. Il est possible de créer 
                un lien vers la page de présentation de ce site sans autorisation expresse de l'éditeur.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">9. Droit applicable</h2>
              <p className="text-gray-700">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut 
                d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de 
                compétence en vigueur.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">10. Contact</h2>
              <p className="text-gray-700">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse : 
                <a href="mailto:contact@atp33.fr" className="text-[#FF6B00] hover:underline ml-1">
                  contact@atp33.fr
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegales
