import React from 'react';
import { Users, Clock, CalendarCheck2, DollarSign, TrendingUp } from 'lucide-react';

const Card = ({ icon: Icon, title, value, subtitle, delta, color }) => (
  <div className="bg-white/90 backdrop-blur rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <div className="mt-1 flex items-center gap-2">
          <p className="text-3xl font-extrabold tracking-tight text-gray-900">{value}</p>
          {delta !== undefined && (
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
              <TrendingUp className="h-3.5 w-3.5" /> {delta}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-gray-400">{subtitle}</p>
      </div>
      <div className={`h-12 w-12 rounded-xl flex items-center justify-center shadow-inner ${color}`}>
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
        value="1"
        delta="+0%"
        subtitle="العدد الإجمالي الحالي"
        color="bg-indigo-600"
      />
      <Card
        icon={Clock}
        title="الحاضرون اليوم"
        value="1"
        delta="+0%"
        subtitle="100% من الموظفين"
        color="bg-emerald-600"
      />
      <Card
        icon={CalendarCheck2}
        title="الإجازات الجارية"
        value="0"
        delta="0%"
        subtitle="0% من الموظفين"
        color="bg-amber-500"
      />
      <Card
        icon={DollarSign}
        title="كتلة الأجور"
        value="0 د.ت"
        delta="+0%"
        subtitle="هذا الشهر"
        color="bg-violet-600"
      />
    </section>
  );
}
