import React from 'react';

interface MetricCardProps {
  label: string;
  value: number | string;
  icon?: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, icon }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow flex items-center gap-4 hover:shadow-md transition border border-gray-500">
      <div className="text-blue-400 text-md md:text-3xl">{icon}</div>
      <div>
        <p className="text-sm md:text-lg text-gray-400">{label}</p>
        <p className="text-md md:text-2xl font-semibold text-white">{value}</p>
      </div>
    </div>
  );
};

export default MetricCard;
