import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Link href={`/services/${service.id}`}>
        <div className="w-full h-56 bg-gray-200"></div>
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 text-base">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
