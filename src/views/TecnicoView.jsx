import { useState, useEffect } from 'react';
import TechDashboard from '../components/tecnico/TechDashboard';
import RequestList from '../components/tecnico/RequestList';
import RequestDetail from '../components/tecnico/RequestDetail';
import RepairHistory from '../components/tecnico/RepairHistory';

export default function TecnicoView() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Mock data - replace with actual API call
    setRequests([
      {
        id: 1,
        computerId: 'PC-001',
        laboratory: 'Laboratorio 1',
        description: 'No enciende el monitor',
        status: 'pending',
        priority: 'high',
        reportedBy: 'Prof. García',
        reportedAt: '2024-02-20T10:00:00Z',
        details: {
          problemType: 'Hardware',
          affectedComponents: ['Monitor'],
          previousIncidents: []
        }
      },
      {
        id: 2,
        computerId: 'PC-003',
        laboratory: 'Laboratorio 2',
        description: 'Software no responde',
        status: 'in_progress',
        priority: 'medium',
        reportedBy: 'Prof. Martínez',
        reportedAt: '2024-02-19T15:30:00Z',
        details: {
          problemType: 'Software',
          affectedComponents: ['Sistema Operativo'],
          previousIncidents: [
            {
              date: '2024-01-15',
              description: 'Actualización de sistema operativo'
            }
          ]
        }
      }
    ]);
  }, []);

  const handleRequestSelect = (request) => {
    setSelectedRequest(request);
    setActiveTab('detail');
  };

  const handleStatusUpdate = (requestId, newStatus) => {
    setRequests(requests.map(req =>
      req.id === requestId ? { ...req, status: newStatus } : req
    ));
  };

  const tabs = {
    dashboard: {
      label: 'Dashboard',
      component: <TechDashboard requests={requests} onRequestSelect={handleRequestSelect} />
    },
    pending: {
      label: 'Solicitudes Pendientes',
      component: <RequestList 
        requests={requests.filter(r => r.status === 'pending')}
        onRequestSelect={handleRequestSelect}
        onStatusUpdate={handleStatusUpdate}
      />
    },
    inProgress: {
      label: 'En Progreso',
      component: <RequestList 
        requests={requests.filter(r => r.status === 'in_progress')}
        onRequestSelect={handleRequestSelect}
        onStatusUpdate={handleStatusUpdate}
      />
    },
    history: {
      label: 'Historial',
      component: <RepairHistory />
    },
    detail: {
      label: 'Detalle',
      component: selectedRequest ? (
        <RequestDetail 
          request={selectedRequest}
          onStatusUpdate={handleStatusUpdate}
          onBack={() => setActiveTab('pending')}
        />
      ) : null
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Panel de Técnico
        </h1>
        <nav className="flex flex-wrap gap-2">
          {Object.entries(tabs).map(([key, { label }]) => (
            key !== 'detail' && (
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
            )
          ))}
        </nav>
      </div>

      <div className="bg-white rounded-lg shadow">
        {tabs[activeTab]?.component}
      </div>
    </div>
  );
}