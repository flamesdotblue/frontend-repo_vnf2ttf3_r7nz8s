import React from 'react';
import { Bell, Settings } from 'lucide-react';

export default function Header({ title }) {
  const today = new Date();
  const dateStr = today.toLocaleDateString('ar-TN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-sm text-gray-500">نظام الموارد البشرية 2025 • {dateStr}</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-600">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-rose-500 rounded-full"></span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
            <Settings className="h-5 w-5" />
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center font-bold">
            TN
          </div>
        </div>
      </div>
    </header>
  );
}
