import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SectionPlaceholder({ title, description }) {
  return (
    <div className="bg-white rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-600">
      <div className="mx-auto h-12 w-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
        <Sparkles className="h-6 w-6" />
      </div>
      <h2 className="mt-4 text-xl font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}
