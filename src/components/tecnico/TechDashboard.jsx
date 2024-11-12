import { useState, useEffect } from 'react';

export default function TechDashboard({ requests, onRequestSelect }) {
  const [stats, setStats] = useState({
    pending: 0,
    inProgress: 0,
    completed: 0,
    highPriority: 0
  });

  useEffect(() => {
    setStats({
      pending: requests.filter(r => r.status === 'pending').length,
      inProgress: requests.filter(r => r.status === 'in_progress').length,
      completed: requests.filter(r => r.status === 'completed').length,
      highPriority: requests.filter(r => r.priority === 'high').length
    });
  }, [requests]);

  const statCards = [
    { label: 'Solicitudes Pendientes', value: stats.pending, color: 'bg-yellow-500' },
    { label: 'En Progreso', value: stats.inProgress, color: 'bg-blue-500' },
    { label: 'Completadas', value: stats.completed, color: 'bg-green-500' },
    { label: 'Alta Prioridad', value: stats.highPriority, color: 'bg-red-500' }
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow p-6 flex items-center space-x-4"
          >
            <div className={`${stat.color} p-3 rounded-full`}>
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
              <div className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Solicitudes Recientes de Alta Prioridad
        </h3>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {requests
              .filter(request => request.priority === 'high')
              .slice(0, 5)
              .map((request) => (
                <li
                  key={request.id}
                  className="px-4 py-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => onRequestSelect(request)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-indigo-600">
                        {request.computerId} - {request.laboratory}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {request.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Alta Prioridad
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}