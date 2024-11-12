import { useState } from 'react';

export default function RequestManagement() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      computerId: 'PC-001',
      laboratory: 'Laboratorio 1',
      description: 'No enciende el monitor',
      status: 'pending',
      priority: 'high',
      reportedBy: 'Prof. García',
      assignedTo: null,
      createdAt: '2024-02-20T10:00:00Z'
    },
    {
      id: 2,
      computerId: 'PC-003',
      laboratory: 'Laboratorio 2',
      description: 'Software no responde',
      status: 'in_progress',
      priority: 'medium',
      reportedBy: 'Prof. Martínez',
      assignedTo: 'Téc. López',
      createdAt: '2024-02-19T15:30:00Z'
    }
  ]);

  const getStatusBadgeColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      in_progress: 'bg-blue-100 text-blue-800',
      resolved: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityBadgeColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const handleStatusChange = (requestId, newStatus) => {
    setRequests(requests.map(request =>
      request.id === requestId
        ? { ...request, status: newStatus }
        : request
    ));
  };

  const handleAssignTechnician = (requestId, technicianName) => {
    setRequests(requests.map(request =>
      request.id === requestId
        ? { ...request, assignedTo: technicianName, status: 'in_progress' }
        : request
    ));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Gestión de Solicitudes
        </h2>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {requests.map((request) => (
            <li key={request.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {request.computerId} - {request.laboratory}
                    </h3>
                    <div className="flex space-x-2">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(request.status)}`}>
                        {request.status}
                      </span>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityBadgeColor(request.priority)}`}>
                        {request.priority}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{request.description}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Reportado por: {request.reportedBy}</p>
                    <p>Fecha: {new Date(request.createdAt).toLocaleString()}</p>
                    {request.assignedTo && <p>Asignado a: {request.assignedTo}</p>}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                {!request.assignedTo && (
                  <select
                    onChange={(e) => handleAssignTechnician(request.id, e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Asignar técnico</option>
                    <option value="Téc. López">Téc. López</option>
                    <option value="Téc. Ramírez">Téc. Ramírez</option>
                    <option value="Téc. Silva">Téc. Silva</option>
                  </select>
                )}
                <select
                  value={request.status}
                  onChange={(e) => handleStatusChange(request.id, e.target.value)}
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="pending">Pendiente</option>
                  <option value="in_progress">En Progreso</option>
                  <option value="resolved">Resuelto</option>
                  <option value="cancelled">Cancelado</option>
                </select>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}