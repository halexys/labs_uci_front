import { useState } from 'react';

export default function RepairHistory() {
  const [repairs] = useState([
    {
      id: 1,
      computerId: 'PC-001',
      laboratory: 'Laboratorio 1',
      description: 'Reemplazo de memoria RAM',
      completedAt: '2024-02-15T14:30:00Z',
      timeSpent: 45,
      parts: ['RAM DDR4 8GB'],
      technician: 'Juan Pérez'
    },
    {
      id: 2,
      computerId: 'PC-003',
      laboratory: 'Laboratorio 2',
      description: 'Reinstalación de sistema operativo',
      completedAt: '2024-02-14T11:20:00Z',
      timeSpent: 120,
      parts: [],
      technician: 'Juan Pérez'
    }
  ]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Historial de Reparaciones
        </h2>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Computadora/Lab
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tiempo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Piezas
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {repairs.map((repair) => (
              <tr key={repair.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {repair.computerId}
                  </div>
                  <div className="text-sm text-gray-500">{repair.laboratory}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{repair.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(repair.completedAt).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {repair.timeSpent} min
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {repair.parts.join(', ') || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}