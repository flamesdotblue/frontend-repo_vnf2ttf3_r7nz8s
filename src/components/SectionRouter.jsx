import React from 'react';
import { Users, Calendar, DollarSign, Clock, Briefcase, BarChart3, FileText, Settings } from 'lucide-react';

const SectionCard = ({ title, icon: Icon, children, hint }) => (
  <section className="bg-white rounded-xl border border-gray-200 p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {hint && <span className="text-xs text-gray-500">{hint}</span>}
    </div>
    {children}
  </section>
);

function EmptyState({ message }) {
  return (
    <div className="text-sm text-gray-500 bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6 text-center">
      {message}
    </div>
  );
}

function Employees() {
  return (
    <div className="space-y-4">
      <SectionCard title="سجل الموظفين" icon={Users} hint="قابل للتوسعة لاحقًا">
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input className="w-full md:w-72 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="ابحث بالاسم أو الرقم" />
          <select className="w-full md:w-48 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
            <option>كل الإدارات</option>
            <option>الموارد البشرية</option>
            <option>المالية</option>
            <option>الإنتاج</option>
          </select>
          <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">إضافة موظف</button>
        </div>
        <EmptyState message="لا توجد بيانات بعد. سيتم ربط هذا القسم بقاعدة البيانات لاحقًا." />
      </SectionCard>
    </div>
  );
}

function Leaves() {
  return (
    <div className="space-y-4">
      <SectionCard title="إدارة الإجازات" icon={Calendar}>
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <select className="w-full md:w-48 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
            <option>كل الحالات</option>
            <option>قيد الموافقة</option>
            <option>مقبولة</option>
            <option>مرفوضة</option>
          </select>
          <input type="date" className="w-full md:w-48 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          <button className="rounded-lg bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700">طلب إجازة</button>
        </div>
        <EmptyState message="لا توجد طلبات إجازة حتى الآن." />
      </SectionCard>
    </div>
  );
}

function Payroll() {
  return (
    <div className="space-y-4">
      <SectionCard title="الرواتب والأجور" icon={DollarSign} hint="متوافق مع التشريع التونسي 2025">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          <div className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-lg p-4">
            <div className="text-xs opacity-80">كتلة الأجور (هذا الشهر)</div>
            <div className="mt-1 text-2xl font-bold">0 د.ت</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-xs text-gray-500">عدد الموظفين</div>
            <div className="mt-1 text-xl font-bold text-gray-900">0</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-xs text-gray-500">الاقتطاعات</div>
            <div className="mt-1 text-xl font-bold text-gray-900">0 د.ت</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-xs text-gray-500">المنح</div>
            <div className="mt-1 text-xl font-bold text-gray-900">0 د.ت</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">حساب الرواتب</button>
          <button className="rounded-lg bg-white border border-gray-300 px-4 py-2 hover:bg-gray-50">تصدير PDF</button>
          <button className="rounded-lg bg-white border border-gray-300 px-4 py-2 hover:bg-gray-50">تصدير Excel</button>
        </div>
      </SectionCard>
      <EmptyState message="سيتم إضافة مفصلة لحساب الضريبة والضمان الاجتماعي وفق القوانين المحلية." />
    </div>
  );
}

function Attendance() {
  return (
    <div className="space-y-4">
      <SectionCard title="إدارة الحضور" icon={Clock}>
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input type="date" className="w-full md:w-48 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          <select className="w-full md:w-48 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500">
            <option>كل الأقسام</option>
            <option>الموارد البشرية</option>
            <option>المالية</option>
            <option>الإنتاج</option>
          </select>
          <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">تحديث</button>
        </div>
        <EmptyState message="لا توجد سجلات حضور لهذا اليوم." />
      </SectionCard>
    </div>
  );
}

function Recruiting() {
  return (
    <div className="space-y-4">
      <SectionCard title="التوظيف" icon={Briefcase}>
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input className="w-full md:w-72 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="ابحث عن مرشح أو منصب" />
          <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">إعلان وظيفة</button>
        </div>
        <EmptyState message="لا توجد مناصب مفتوحة حالياً." />
      </SectionCard>
    </div>
  );
}

function Analytics() {
  return (
    <div className="space-y-4">
      <SectionCard title="التقارير والإحصائيات" icon={BarChart3}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-xs text-gray-500">توزيع الفئات</div>
            <div className="mt-1 h-24 rounded-md bg-gradient-to-br from-indigo-50 to-violet-50 border border-dashed border-indigo-200"></div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-xs text-gray-500">نسبة الحضور</div>
            <div className="mt-1 h-24 rounded-md bg-gradient-to-br from-emerald-50 to-teal-50 border border-dashed border-emerald-200"></div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-xs text-gray-500">تكلفة الأجور</div>
            <div className="mt-1 h-24 rounded-md bg-gradient-to-br from-amber-50 to-orange-50 border border-dashed border-amber-200"></div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-lg bg-white border border-gray-300 px-4 py-2 hover:bg-gray-50">تحميل تقرير PDF</button>
          <button className="rounded-lg bg-white border border-gray-300 px-4 py-2 hover:bg-gray-50">تصدير CSV</button>
        </div>
      </SectionCard>
    </div>
  );
}

function Documents() {
  return (
    <div className="space-y-4">
      <SectionCard title="الوثائق" icon={FileText}>
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">رفع وثيقة</button>
          <button className="rounded-lg bg-white border border-gray-300 px-4 py-2 hover:bg-gray-50">قالب عقد</button>
          <button className="rounded-lg bg-white border border-gray-300 px-4 py-2 hover:bg-gray-50">سياسة داخلية</button>
        </div>
        <EmptyState message="لا توجد وثائق بعد. سيتم دعم التصنيفات والبحث." />
      </SectionCard>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="space-y-4">
      <SectionCard title="الإعدادات" icon={Settings}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-900">إعدادات المؤسسة</div>
            <p className="text-xs text-gray-500 mt-1">الاسم القانوني، العملة، المناطق الزمنية</p>
            <button className="mt-3 rounded-lg bg-white border border-gray-300 px-3 py-1.5 hover:bg-gray-50 text-sm">تحرير</button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="text-sm font-medium text-gray-900">سياسات الموارد البشرية</div>
            <p className="text-xs text-gray-500 mt-1">سياسة الإجازات، ساعات العمل</p>
            <button className="mt-3 rounded-lg bg-white border border-gray-300 px-3 py-1.5 hover:bg-gray-50 text-sm">تحرير</button>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

export default function SectionRouter({ selectedKey }) {
  switch (selectedKey) {
    case 'employees':
      return <Employees />;
    case 'leaves':
      return <Leaves />;
    case 'payroll':
      return <Payroll />;
    case 'attendance':
      return <Attendance />;
    case 'recruiting':
      return <Recruiting />;
    case 'analytics':
      return <Analytics />;
    case 'documents':
      return <Documents />;
    case 'settings':
      return <SettingsSection />;
    default:
      return (
        <div className="bg-white rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-600">
          لم يتم التعرف على القسم المطلوب.
        </div>
      );
  }
}
