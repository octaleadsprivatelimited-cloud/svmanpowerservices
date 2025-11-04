import { useEffect } from 'react'

/**
 * SEO Component for dynamic meta tag management
 * Usage: <SEO title="..." description="..." keywords="..." />
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    if (description) {
      metaDescription.setAttribute('content', description)
    }

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    if (keywords) {
      metaKeywords.setAttribute('content', keywords)
    }

    // Update Open Graph tags
    const updateOGTag = (property, content) => {
      if (!content) return
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
    updateOGTag('og:image', image || 'https://svmanpower.com/og-image.jpg')
    updateOGTag('og:url', url || window.location.href)
    updateOGTag('og:type', type)

    // Update Twitter Card tags
    const updateTwitterTag = (name, content) => {
      if (!content) return
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    updateTwitterTag('twitter:title', title)
    updateTwitterTag('twitter:description', description)
    updateTwitterTag('twitter:image', image || 'https://svmanpower.com/twitter-image.jpg')

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    if (url) {
      canonical.setAttribute('href', url)
    } else {
      canonical.setAttribute('href', window.location.href)
    }

    // Add structured data if provided
    if (structuredData) {
      let existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript && existingScript.id === 'page-structured-data') {
        existingScript.remove()
      }
      
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'page-structured-data'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }

    // Cleanup function
    return () => {
      // Optionally reset to default values on unmount
    }
  }, [title, description, keywords, image, url, type, structuredData])

  return null
}

export default SEO
