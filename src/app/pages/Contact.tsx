import { useState, FormEvent } from 'react'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { services } from '../../data/servicesData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Veuillez remplir tous les champs obligatoires.')
      setIsSubmitting(false)
      return
    }

    // Préparer le contenu de l'email
    const subject = encodeURIComponent(
      formData.service 
        ? `Demande de devis - ${formData.service} (${formData.urgency === 'urgent' ? 'URGENT' : formData.urgency})`
        : `Demande de devis (${formData.urgency === 'urgent' ? 'URGENT' : formData.urgency})`
    )
    const body = encodeURIComponent(
      `Bonjour,\n\n` +
      `Nouvelle demande de devis reçue depuis le site web.\n\n` +
      `Nom : ${formData.name}\n` +
      `Email : ${formData.email}\n` +
      `Téléphone : ${formData.phone}\n` +
      `${formData.service ? `Service : ${formData.service}\n` : ''}` +
      `Urgence : ${formData.urgency === 'urgent' ? 'URGENTE (fuite active)' : formData.urgency === 'soon' ? 'Sous 1 semaine' : 'Normale'}\n\n` +
      `Message :\n${formData.message}\n\n` +
      `---\n` +
      `Ce message a été envoyé depuis le formulaire de contact du site ATP33.`
    )

    // Rediriger vers l'email avec les données pré-remplies
    window.location.href = `mailto:contact@atp33.fr?subject=${subject}&body=${body}`
    
    // Afficher le message de succès après un court délai
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        urgency: 'normal'
      })
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <div className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
            <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
            <h2 className="text-2xl font-bold text-[#111827] mb-4">Demande envoyée avec succès !</h2>
            <p className="text-gray-700 mb-6">
              Merci pour votre demande. Nous vous contacterons rapidement, généralement sous 48h.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              Nouvelle demande
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Demandez un devis gratuit ou posez-nous vos questions. Nous vous répondons rapidement.
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informations de contact */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#111827] mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Phone className="text-[#FF6B00] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">Téléphone</h3>
                    <a href="tel:+33557803774" className="text-gray-700 hover:text-[#FF6B00] transition-colors">
                      05 57 80 37 74
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-[#FF6B00] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">Email</h3>
                    <a href="mailto:contact@atp33.fr" className="text-gray-700 hover:text-[#FF6B00] transition-colors">
                      contact@atp33.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#FF6B00] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">Adresse</h3>
                    <p className="text-gray-700 mb-4">
                      185 rue Gay Lussac
                      <br />
                      33127 Saint-Jean-d'Illac
                    </p>
                    <h3 className="font-semibold text-[#111827] mb-1">Zones d'intervention</h3>
                    <p className="text-gray-700">
                      Gironde (33)
                      <br />
                      Charente-Maritime (17)
                      <br />
                      Haute-Garonne (31)
                      <br />
                      Sud-Ouest
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F9FAFB] border-2 border-[#FF6B00] rounded-lg p-6">
                <h3 className="font-semibold text-[#111827] mb-2">Urgence fuite ?</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Pour les urgences (fuite d'eau active), appelez-nous directement.
                </p>
                <a
                  href="tel:+33557803774"
                  className="bg-[#FF6B00] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#E55A00] transition-colors inline-flex items-center w-full justify-center"
                >
                  <Phone className="mr-2" size={20} />
                  Appeler maintenant
                </a>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#111827] mb-6">Demande de devis</h2>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-6 flex items-start space-x-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#111827] mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#FF6B00] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#111827] mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#FF6B00] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#111827] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#FF6B00] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[#111827] mb-2">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#FF6B00] focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-semibold text-[#111827] mb-2">
                    Urgence
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#FF6B00] focus:outline-none transition-colors"
                  >
                    <option value="normal">Normale</option>
                    <option value="urgent">Urgente (fuite active)</option>
                    <option value="soon">Sous 1 semaine</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#111827] mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, vos besoins, les problèmes rencontrés..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-[#FF6B00] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Urgence Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
        <a
          href="tel:+33557803774"
          className="bg-[#FF6B00] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#E55A00] transition-colors inline-flex items-center justify-center w-full"
        >
          <Phone className="mr-2" size={20} />
          Appeler maintenant
        </a>
      </div>
    </div>
  )
}

export default Contact
