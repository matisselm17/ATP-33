import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  schema?: object
}

const SEO = ({ title, description, keywords, canonical, ogImage, schema }: SEOProps) => {
  useEffect(() => {
    // Mettre à jour le titre
    document.title = title

    // Mettre à jour ou créer la meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // Mettre à jour ou créer les keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', keywords)
    }

    // Mettre à jour ou créer le canonical
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]')
      if (!linkCanonical) {
        linkCanonical = document.createElement('link')
        linkCanonical.setAttribute('rel', 'canonical')
        document.head.appendChild(linkCanonical)
      }
      linkCanonical.setAttribute('href', canonical)
    }

    // Mettre à jour les Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    updateOGTag('og:title', title)
    updateOGTag('og:description', description)
    updateOGTag('og:type', 'website')
    if (ogImage) {
      updateOGTag('og:image', ogImage)
    }

    // Ajouter les données structurées Schema.org
    if (schema) {
      let scriptSchema = document.querySelector('#schema-json-ld') as HTMLScriptElement | null
      if (!scriptSchema) {
        scriptSchema = document.createElement('script')
        scriptSchema.id = 'schema-json-ld'
        scriptSchema.type = 'application/ld+json'
        document.head.appendChild(scriptSchema)
      }
      scriptSchema.textContent = JSON.stringify(schema)
    }
  }, [title, description, keywords, canonical, ogImage, schema])

  return null
}

export default SEO
