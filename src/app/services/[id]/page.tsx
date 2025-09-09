import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailClient from '@/components/services/ServiceDetailClient';

// Static service data matching the Services component
const services = [
  {
    id: 1,
    title: 'Computer & Laptop Solutions',
    description: [
      'Computer and Laptop sales',
      'Professional repair services',
      'Motherboard and chip level service',
      'Damage recovery solutions',
      'Data recovery services',
    ],
    gradient: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    popular: true,
    fullDescription: 'Our comprehensive computer and laptop solutions cover everything from sales to advanced repair services. We specialize in motherboard and chip-level repairs, ensuring your devices are restored to optimal performance with cutting-edge technology and exceptional support.',
    features: [
      'All major brands supported',
      'Chip-level motherboard repair',
      'Data recovery from damaged drives',
      'Hardware upgrades and optimization',
      'Warranty on all repairs',
      'Quick turnaround time'
    ],
    duration: '1-3 business days',
    category: 'Hardware Services'
  },
  {
    id: 2,
    title: 'CCTV & Security Systems',
    description: [
      'CCTV and IP Camera installation',
      'Biometric attendance systems',
      'Access control solutions',
      'GPS vehicle tracking',
      'Intruder alarm systems',
    ],
    gradient: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    popular: false,
    fullDescription: 'Secure your premises with our advanced CCTV and security systems. From basic surveillance to comprehensive security solutions with biometric access control, we provide complete protection for your business and property.',
    features: [
      'HD and 4K camera options',
      'Remote monitoring capabilities',
      'Mobile app integration',
      'Night vision technology',
      'Motion detection alerts',
      'Cloud storage options'
    ],
    duration: '1-2 days installation',
    category: 'Security Solutions'
  },
  {
    id: 3,
    title: 'Printer Sales & Service',
    description: [
      'All-brand printer sales',
      'Cartridge refilling service',
      'Toner replacement & refilling',
      'Photocopier maintenance',
      'Dot matrix printer repair',
    ],
    gradient: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    popular: false,
    fullDescription: 'Complete printer solutions including sales, service, and maintenance. We work with all major printer brands and provide cost-effective cartridge refilling services to keep your business running smoothly.',
    features: [
      'All printer brands serviced',
      'Original and compatible cartridges',
      'Bulk printing solutions',
      'Maintenance contracts available',
      'On-site service options',
      'Eco-friendly refilling'
    ],
    duration: 'Same day service',
    category: 'Printing Solutions'
  },
  {
    id: 4,
    title: 'Cybersecurity Solutions',
    description: [
      'Security consulting services',
      'Firewall and UTM setup',
      'Antivirus & ransomware protection',
      'Endpoint security management',
      'Email and web security',
    ],
    gradient: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    popular: true,
    fullDescription: 'Protect your business from cyber threats with our comprehensive cybersecurity solutions. From basic antivirus to enterprise-grade security systems, we ensure your digital assets remain safe and secure.',
    features: [
      'Threat assessment and analysis',
      'Multi-layered security approach',
      '24/7 monitoring services',
      'Incident response planning',
      'Employee security training',
      'Compliance assistance'
    ],
    duration: 'Ongoing service',
    category: 'Security Services'
  },
  {
    id: 5,
    title: 'Cloud Solutions',
    description: [
      'Cloud migration services',
      'Backup and recovery solutions',
      'Cloud storage management',
      'Hosting and infrastructure',
      'Office 365 & G-Suite setup',
    ],
    gradient: 'from-blue-600 to-blue-700',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    popular: false,
    fullDescription: 'Modernize your business with cloud solutions. We help you migrate to the cloud, set up backup systems, and manage your cloud infrastructure for improved efficiency and scalability.',
    features: [
      'Seamless cloud migration',
      'Automated backup solutions',
      'Scalable storage options',
      'Multi-cloud strategies',
      'Cost optimization',
      'Security and compliance'
    ],
    duration: '1-2 weeks setup',
    category: 'Cloud Services'
  },
  {
    id: 6,
    title: 'IT Security Services',
    description: [
      'Security audit & assessment',
      'Vulnerability testing',
      'Penetration testing services',
      'Security operations center',
      'Managed security services',
    ],
    gradient: 'from-orange-600 to-orange-700',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    popular: false,
    fullDescription: 'Advanced IT security services including penetration testing, security audits, and managed security operations to keep your business safe from evolving cyber threats.',
    features: [
      'Comprehensive security audits',
      'Ethical hacking services',
      'Vulnerability assessments',
      'Security policy development',
      'Incident response team',
      'Continuous monitoring'
    ],
    duration: '1-2 weeks assessment',
    category: 'Advanced Security'
  },
  {
    id: 7,
    title: 'Performance Optimization',
    description: [
      'System performance tuning',
      'Website & application optimization',
      'Database optimization',
      'Server infrastructure optimization',
      'Load balancing solutions',
    ],
    gradient: 'from-green-600 to-green-700',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    popular: false,
    fullDescription: 'Maximize your system performance with our comprehensive optimization services. We fine-tune your infrastructure, applications, and databases to deliver peak performance and improved user experience.',
    features: [
      'Performance bottleneck analysis',
      'Code and query optimization',
      'Infrastructure scaling solutions',
      'Caching strategies implementation',
      'Load testing and monitoring',
      'Performance metrics tracking'
    ],
    duration: '1-2 weeks optimization',
    category: 'Performance Services'
  },
  {
    id: 8,
    title: 'Data Backup & Recovery',
    description: [
      'Comprehensive backup solutions',
      'On-premise and cloud backup',
      'Disaster recovery planning',
      'Data archiving services',
      'Backup monitoring & management',
    ],
    gradient: 'from-yellow-600 to-yellow-700',
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    popular: false,
    fullDescription: 'Protect your critical business data with our comprehensive backup and recovery solutions. We ensure your data is safe, accessible, and recoverable in any situation with robust disaster recovery planning.',
    features: [
      'Automated backup scheduling',
      'Multi-location data storage',
      'Point-in-time recovery options',
      'Disaster recovery testing',
      'Compliance-ready archiving',
      'Real-time backup monitoring'
    ],
    duration: '3-5 days setup',
    category: 'Data Protection'
  },
  {
    id: 9,
    title: 'IT Support & Helpdesk',
    description: [
      '24/7 technical support',
      'Remote and on-site assistance',
      'Proactive system monitoring',
      'IT asset management',
      'User training & support',
    ],
    gradient: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    popular: true,
    fullDescription: 'Get comprehensive IT support with our dedicated helpdesk services. We provide round-the-clock technical assistance, proactive monitoring, and expert guidance to keep your business running smoothly.',
    features: [
      'Multi-channel support access',
      'Ticket tracking and management',
      'Proactive issue resolution',
      'Asset lifecycle management',
      'User onboarding assistance',
      'Knowledge base maintenance'
    ],
    duration: 'Ongoing support',
    category: 'Support Services'
  },
  {
    id: 10,
    title: 'Network Solutions',
    description: [
      'LAN, WAN & SD-WAN solutions',
      'Wireless & Wi-Fi infrastructure',
      'Network security & VPN',
      'Network monitoring systems',
      'Bandwidth optimization',
    ],
    gradient: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
    popular: false,
    fullDescription: 'Build robust and secure network infrastructure with our comprehensive network solutions. From local area networks to wide area networks, we design and implement scalable networking solutions for your business.',
    features: [
      'Network design and planning',
      'Wireless infrastructure setup',
      'VPN and remote access solutions',
      'Network security implementation',
      'Bandwidth management tools',
      'Network performance monitoring'
    ],
    duration: '1-3 weeks implementation',
    category: 'Network Services'
  },
];

// Get service by ID
function getService(id: string) {
  const serviceId = parseInt(id);
  return services.find(s => s.id === serviceId) || null;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = getService(params.id);

  if (!service) {
    return {
      title: 'Service Not Found | Ananta Gopal Enterprises',
      description: 'The requested service could not be found.',
    };
  }

  const title = `${service.title} | Professional IT Services | Ananta Gopal Enterprises`;
  const description = `${service.fullDescription} Expert ${service.category.toLowerCase()} with cybersecurity, cloud solutions, and comprehensive IT support. Get professional consultation today.`;

  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      service.category.toLowerCase(),
      'it services',
      'cybersecurity',
      'cloud solutions',
      'professional services',
      'business technology',
      'technical support'
    ].join(', '),
    openGraph: {
      title,
      description,
      url: `/services/${service.id}`,
      images: [
        {
          url: '/og-service.jpg',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-service.jpg'],
    },
    alternates: {
      canonical: `/services/${service.id}`,
    },
  };
}

interface ServicePageProps {
  params: {
    id: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getService(params.id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} allServices={services} />;
}
