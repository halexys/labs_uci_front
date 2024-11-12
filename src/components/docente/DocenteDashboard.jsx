import { useState } from 'react';
import RepairRequestForm from './RepairRequestForm';
import RequestHistory from './RequestHistory';
import StatusSummary from './StatusSummary';
import Reports from './Reports';

export default function DocenteDashboard() {
  const [activeTab, setActiveTab] = useState('summary');

  const tabs = {
    summary: <StatusSummary />,
    request: <RepairRequestForm />,
    history: <RequestHistory />,
    reports: <Reports />
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <nav className="flex space-x-4">
          {Object.entries({
            summary: 'Dashboard',
            request: 'Nueva Solicitud',
            history: 'Historial',
            reports: 'Informes'
          }).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === key
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
      
      {tabs[activeTab]}
    </div>
  );
}