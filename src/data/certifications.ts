export interface Certification {
  id: string
  name: string
  organization: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  description: string
  skills: string[]
  icon?: string
  color?: string
  featured?: boolean
}

export const certifications: Certification[] = [
  {
    id: 'ccna1',
    name: 'CCNA1 - Cisco Certified Network Associate',
    organization: 'Cisco Systems',
    issueDate: '2020-07',
    expiryDate: undefined, // Pas d'expiration
    credentialId: 'CCNA1-2020',
    // credentialUrl: 'https://cisco.com/verify',
    description: 'Certification fondamentale en réseaux Cisco couvrant les concepts de routage et de commutation. Maîtrise des protocoles réseau, configuration des équipements Cisco, et troubleshooting des infrastructures réseau.',
    skills: ['Routing', 'Switching', 'TCP/IP', 'VLAN', 'OSPF', 'Configuration Cisco'],
    icon: 'network',
    color: 'blue',
    featured: true
  },
//   Vous pouvez ajouter d'autres certifications ici
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    issueDate: '2024-03',
    expiryDate: '2027-03',
    description: 'Certification de base AWS couvrant les services cloud essentiels.',
    skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing'],
    icon: 'cloud',
    color: 'orange',
    featured: false
  }
]

export const getCertificationById = (id: string): Certification | undefined => {
  return certifications.find(cert => cert.id === id)
}

export const getFeaturedCertifications = (): Certification[] => {
  return certifications.filter(cert => cert.featured)
}

export const getActiveCertifications = (): Certification[] => {
  const now = new Date()
  return certifications.filter(cert => {
    if (!cert.expiryDate) return true // Pas d'expiration
    const expiry = new Date(cert.expiryDate)
    return expiry > now
  })
}
