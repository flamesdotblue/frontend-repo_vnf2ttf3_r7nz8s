import React from 'react';
import {
  Home,
  Users,
  Calendar,
  DollarSign,
  Clock,
  Briefcase,
  BarChart3,
  FileText,
  Settings,
  LogOut,
} from 'lucide-react';

const iconMap = {
  dashboard: Home,
  hr: Users,
  employees: Users,
  leaves: Calendar,
  payroll: DollarSign,
  attendance: Clock,
  recruiting: Briefcase,
  analytics: BarChart3,
  reports: BarChart3,
  documents: FileText,
  settings: Settings,
};

export default function Sidebar({ items, selectedKey, onSelect }) {
  return (
    <aside className="h-screen w-72 bg-white border-r border-gray-200 flex flex-col">
      <div className="px-5 py-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">T</div>
          <div>
            <div className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">TCA</div>
            <div className="text-gray-900 font-bold">إدارة الأفراد</div>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500">نظام الموارد البشرية 2025</div>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {items.map((item) => {
          const Icon = iconMap[item.key] || Home;
          const isActive = selectedKey === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onSelect(item.key)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-right transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon className={`h-5 w-5 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`} />
                <span className="font-medium">{item.label}</span>
              </span>
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-gray-200">
        <button
          onClick={() => onSelect('logout')}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
        >
          <LogOut className="h-5 w-5 text-gray-400" />
          <span className="font-medium">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
}
