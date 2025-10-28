import React, { useMemo, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import StatsOverview from './components/StatsOverview.jsx';
import SectionPlaceholder from './components/SectionPlaceholder.jsx';

export default function App() {
  const items = useMemo(
    () => [
      { key: 'dashboard', label: 'لوحة التحكم' },
      { key: 'hr', label: 'إدارة الموارد البشرية' },
      { key: 'employees', label: 'الموظفون' },
      { key: 'leaves', label: 'الإجازات' },
      { key: 'payroll', label: 'الرواتب' },
      { key: 'attendance', label: 'الحضور' },
      { key: 'recruiting', label: 'التوظيف' },
      { key: 'analytics', label: 'التقارير والإحصائيات' },
      { key: 'documents', label: 'الوثائق' },
      { key: 'settings', label: 'الإعدادات' },
    ],
    []
  );

  const [selectedKey, setSelectedKey] = useState('dashboard');

  const currentTitle = useMemo(() => {
    const match = items.find((i) => i.key === selectedKey);
    return match ? match.label : 'لوحة التحكم';
  }, [selectedKey, items]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-right" dir="rtl">
      <div className="flex">
        <Sidebar items={items} selectedKey={selectedKey} onSelect={setSelectedKey} />
        <main className="flex-1 flex flex-col min-h-screen">
          <Header title={currentTitle} />
          <div className="p-6 space-y-6">
            {selectedKey === 'dashboard' ? (
              <>
                {/* Hero banner */}
                <section className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-6 py-8">
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">إدارة الموارد البشرية</h2>
                    <p className="mt-2 text-sm md:text-base text-white/90 max-w-3xl">
                      واجهة حديثة ومتوافقة مع المعايير التونسية 2025. سنضيف إدارة البيانات والتقارير والعمليات خطوة بخطوة.
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(600px_300px_at_80%_20%,#fff,transparent)]" />
                </section>

                <StatsOverview />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">الأنشطة الحديثة</h3>
                        <span className="text-xs text-gray-500">لا توجد أنشطة حديثة</span>
                      </div>
                      <div className="text-sm text-gray-500">ابدأ باستخدام الميزات لتظهر الأنشطة هنا.</div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">المهام العاجلة</h3>
                        <span className="text-xs text-gray-500">لا توجد مهام عاجلة</span>
                      </div>
                      <ul className="text-sm text-gray-500 list-disc pr-5 space-y-1">
                        <li>العقود المطلوب تجديدها: 0 (هذا الشهر)</li>
                        <li>التوظيفات الجديدة: 0 (جاري المعالجة)</li>
                        <li>معدل الرضا: - (الاستطلاع الداخلي)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-indigo-600 to-fuchsia-600 rounded-xl p-6 text-white shadow">
                      <h4 className="text-sm opacity-90">نظام 2025 - متوافق مع التشريع التونسي</h4>
                      <p className="mt-2 text-2xl font-bold">جاهز للانطلاق</p>
                      <p className="mt-1 text-sm text-white/80">معايير الأجور، الإجازات، والحضور وفق أحدث المستجدات.</p>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                      <h4 className="text-sm text-gray-500">العقود المطلوب تجديدها</h4>
                      <p className="mt-2 text-3xl font-extrabold text-gray-900">0</p>
                      <p className="text-xs text-gray-400">هذا الشهر</p>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                      <h4 className="text-sm text-gray-500">التوظيفات الجديدة</h4>
                      <p className="mt-2 text-3xl font-extrabold text-gray-900">0</p>
                      <p className="text-xs text-gray-400">جاري المعالجة</p>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-6">
                      <h4 className="text-sm text-gray-500">معدل الرضا</h4>
                      <p className="mt-2 text-3xl font-extrabold text-gray-900">-</p>
                      <p className="text-xs text-gray-400">الاستطلاع الداخلي</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <SectionPlaceholder
                title={currentTitle}
                description="واجهة حديثة ومتوافقة مع المعايير التونسية 2025. سنضيف إدارة البيانات والتقارير والعمليات خطوة بخطوة."
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
