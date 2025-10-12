interface StructuredDataProps {
  type: 'Person' | 'WebSite' | 'Article'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    }

    return JSON.stringify(baseData, null, 2)
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: generateStructuredData()
      }}
    />
  )
}
