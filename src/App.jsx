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
    <div className="min-h-screen bg-gray-50 text-right" dir="rtl">
      <div className="flex">
        <Sidebar items={items} selectedKey={selectedKey} onSelect={setSelectedKey} />
        <main className="flex-1 flex flex-col min-h-screen">
          <Header title={currentTitle} />
          <div className="p-6 space-y-6">
            {selectedKey === 'dashboard' ? (
              <>
                <StatsOverview />
                <SectionPlaceholder
                  title="مرحباً بك في نظام الموارد البشرية"
                  description="ابدأ بإدارة الموظفين، تتبع الحضور، الموافقات على الإجازات، ومعالجة الرواتب وفق المعايير التونسية 2025."
                />
              </>
            ) : (
              <SectionPlaceholder
                title={currentTitle}
                description="هذا القسم قيد الإعداد. سنضيف واجهات تفصيلية لإدارة البيانات، سير العمل، والتقارير المتقدمة."
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
