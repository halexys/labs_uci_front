import { useState } from 'react';

export default function RequestDetail({ request, onStatusUpdate, onBack }) {
  const [notes, setNotes] = useState('');
  const [usedParts, setUsedParts] = useState('');
  const [timeSpent, setTimeSpent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitting repair details:', {
      requestId: request.id,
      notes,
      usedParts,
      timeSpent
    });
    onStatusUpdate(request.id, 'completed');
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold text-gray-900">
          Detalle de Solicitud
        </h2>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Información de la Solicitud
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">ID Computadora</dt>
              <dd className="mt-1 text-sm text-gray-900">{request.computerId}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Laboratorio</dt>
              <dd className="mt-1 text-sm text-gray-900">{request.laboratory}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Reportado Por</dt>
              <dd className="mt-1 text-sm text-gray-900">{request.reportedBy}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Fecha</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {new Date(request.reportedAt).toLocaleString()}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Descripción</dt>
              <dd className="mt-1 text-sm text-gray-900">{request.description}</dd>
            </div>
          </dl>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Notas de Reparación
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Describe el trabajo realizado..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Piezas Utilizadas
          </label>
          <textarea
            value={usedParts}
            onChange={(e) => setUsedParts(e.target.value)}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Lista las piezas utilizadas..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tiempo Empleado (minutos)
          </label>
          <input
            type="number"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Completar Reparación
          </button>
        </div>
      </form>
    </div>
  );
}