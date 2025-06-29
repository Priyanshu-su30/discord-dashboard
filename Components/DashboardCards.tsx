import React from 'react';
import MetricCard from './MetricCards';
import {
  Users,
  UserCheck,
  ShieldCheck,
  MessageSquare,
  Server,
  Activity,
  Wallet,
} from 'lucide-react';

const DashboardCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <MetricCard label="Total Members" value={1248} icon={<Users />} />
      <MetricCard label="Online Users" value={342} icon={<UserCheck />} />
      <MetricCard label="Active Roles" value={12} icon={<ShieldCheck />} />
      <MetricCard label="Messages Today" value={678} icon={<MessageSquare />} />
      <MetricCard label="Server Uptime" value="99.99%" icon={<Server />} />
      <MetricCard label="Active Users (Last 7d)" value={633} icon={<Activity />} />
      <MetricCard label="Monthly Revenue" value="$9631" icon={<Wallet />} />
    </div>
  );
};

export default DashboardCards;
