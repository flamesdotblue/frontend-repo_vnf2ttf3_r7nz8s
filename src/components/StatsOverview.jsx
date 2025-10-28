import React from 'react';
import { Users, Clock, CalendarCheck2, DollarSign } from 'lucide-react';

const Card = ({ icon: Icon, title, value, subtitle, color }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
        <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
      </div>
      <div className={`h-11 w-11 rounded-lg flex items-center justify-center ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

export default function StatsOverview() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card
        icon={Users}
        title="إجمالي الموظفين"
        value="248"
        subtitle="+12 هذا الشهر"
        color="bg-indigo-600"
      />
      <Card
        icon={Clock}
        title="نسبة الحضور اليوم"
        value="92%"
        subtitle="8 متغيبون"
        color="bg-emerald-600"
      />
      <Card
        icon={CalendarCheck2}
        title="طلبات الإجازة المعلقة"
        value="17"
        subtitle="5 عاجلة"
        color="bg-amber-500"
      />
      <Card
        icon={DollarSign}
        title="كتلة الأجور هذا الشهر"
        value="1.2M TND"
        subtitle="دفعة 30/11"
        color="bg-violet-600"
      />
    </section>
  );
}
