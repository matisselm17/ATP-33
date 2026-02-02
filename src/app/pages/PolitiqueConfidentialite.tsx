const PolitiqueConfidentialite = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Politique de confidentialité</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Protection de vos données personnelles
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-700 mb-4">
                ATP33 s'engage à protéger la confidentialité de vos données personnelles. Cette politique de 
                confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations 
                personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi 
                "Informatique et Libertés".
              </p>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">1. Responsable du traitement</h2>
              <div className="text-gray-700 space-y-2">
                <p><strong>Raison sociale :</strong> ATP33</p>
                <p><strong>Adresse :</strong> 185 rue Gay Lussac, 33127 Saint-Jean-d'Illac, France</p>
                <p><strong>Email :</strong> contact@atp33.fr</p>
                <p><strong>Téléphone :</strong> 05 57 80 37 74</p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">2. Données collectées</h2>
              <p className="text-gray-700 mb-4">
                Nous collectons les données personnelles suivantes lorsque vous utilisez notre site ou nos services :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Données d'identification :</strong> nom, prénom</li>
                <li><strong>Données de contact :</strong> adresse email, numéro de téléphone</li>
                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                <li><strong>Données de communication :</strong> messages envoyés via le formulaire de contact</li>
              </ul>
            </section>

            {/* Finalités du traitement */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">3. Finalités du traitement</h2>
              <p className="text-gray-700 mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Répondre à vos demandes de devis et de contact</li>
                <li>Vous contacter concernant nos services</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
                <li>Gérer la relation client</li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">4. Base légale du traitement</h2>
              <p className="text-gray-700">
                Le traitement de vos données personnelles est basé sur :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                <li>Votre consentement lorsque vous nous contactez</li>
                <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
                <li>Notre intérêt légitime à améliorer nos services</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
            </section>

            {/* Conservation des données */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">5. Durée de conservation</h2>
              <p className="text-gray-700">
                Vos données personnelles sont conservées pour la durée nécessaire aux finalités pour lesquelles 
                elles ont été collectées, et conformément aux obligations légales. Les données de contact sont 
                conservées pendant 3 ans à compter du dernier contact, sauf opposition de votre part.
              </p>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">6. Destinataires des données</h2>
              <p className="text-gray-700 mb-4">
                Vos données personnelles sont destinées à ATP33 et peuvent être communiquées à :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Nos prestataires techniques (hébergement, maintenance)</li>
                <li>Les autorités compétentes en cas d'obligation légale</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Nous ne vendons ni ne louons vos données personnelles à des tiers.
              </p>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">7. Vos droits</h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Droit d'accès :</strong> vous pouvez obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> vous pouvez corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> vous pouvez demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> vous pouvez demander la limitation du traitement</li>
                <li><strong>Droit à la portabilité :</strong> vous pouvez récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous pouvez vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment, sans affecter la licéité du traitement antérieur</li>
              </ul>
            </section>

            {/* Exercice des droits */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">8. Exercice de vos droits</h2>
              <p className="text-gray-700 mb-4">
                Pour exercer vos droits, vous pouvez nous contacter :
              </p>
              <div className="bg-[#F9FAFB] border-l-4 border-[#FF6B00] p-4 text-gray-700">
                <p><strong>Par email :</strong> <a href="mailto:contact@atp33.fr" className="text-[#FF6B00] hover:underline">contact@atp33.fr</a></p>
                <p className="mt-2"><strong>Par courrier :</strong> ATP33, 185 rue Gay Lussac, 33127 Saint-Jean-d'Illac, France</p>
              </div>
              <p className="text-gray-700 mt-4">
                Nous vous répondrons dans un délai d'un mois maximum. Vous avez également le droit d'introduire 
                une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) 
                si vous estimez que vos droits ne sont pas respectés.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">9. Cookies</h2>
              <p className="text-gray-700">
                Notre site peut utiliser des cookies pour améliorer votre expérience de navigation. Vous pouvez 
                configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités 
                du site.
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">10. Sécurité des données</h2>
              <p className="text-gray-700">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos 
                données personnelles contre tout accès non autorisé, perte, destruction ou altération. Cependant, 
                aucune méthode de transmission sur Internet n'est totalement sécurisée.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">11. Modifications de la politique</h2>
              <p className="text-gray-700">
                Cette politique de confidentialité peut être modifiée à tout moment. La version en vigueur est 
                celle publiée sur cette page avec la date de dernière mise à jour. Nous vous encourageons à 
                consulter régulièrement cette page.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-[#111827] mb-4">12. Contact</h2>
              <p className="text-gray-700">
                Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à 
                l'adresse : <a href="mailto:contact@atp33.fr" className="text-[#FF6B00] hover:underline">contact@atp33.fr</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolitiqueConfidentialite
