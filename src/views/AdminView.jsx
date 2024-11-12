import { useState } from 'react';
import AdminDashboard from '../components/admin/AdminDashboard';
import WorkerManagement from '../components/admin/WorkerManagement';
import DocenteManagement from '../components/admin/DocenteManagement';
import LabManagement from '../components/admin/LabManagement';
import ComputerManagement from '../components/admin/ComputerManagement';
import RequestManagement from '../components/admin/RequestManagement';
import ReportGeneration from '../components/admin/ReportGeneration';
import UserManagement from '../components/admin/UserManagement';

export default function AdminView() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = {
    dashboard: {
      label: 'Dashboard',
      component: <AdminDashboard />
    },
    workers: {
      label: 'Trabajadores',
      component: <WorkerManagement />
    },
    teachers: {
      label: 'Docentes',
      component: <DocenteManagement />
    },
    labs: {
      label: 'Laboratorios',
      component: <LabManagement />
    },
    computers: {
      label: 'Computadoras',
      component: <ComputerManagement />
    },
    requests: {
      label: 'Solicitudes',
      component: <RequestManagement />
    },
    reports: {
      label: 'Reportes',
      component: <ReportGeneration />
    },
    users: {
      label: 'Usuarios',
      component: <UserManagement />
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Panel de Administración
        </h1>
        <nav className="flex flex-wrap gap-2">
          {Object.entries(tabs).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow">
        {tabs[activeTab].component}
      </div>
    </div>
  );
}