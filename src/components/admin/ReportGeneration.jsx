import { useState } from 'react';

export default function ReportGeneration() {
  const [reportType, setReportType] = useState('maintenance');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const [filters, setFilters] = useState({
    laboratory: '',
    status: '',
    technician: ''
  });

  const handleGenerateReport = (e) => {
    e.preventDefault();
    // Handle report generation logic here
    console.log('Generating report with:', {
      type: reportType,
      dateRange,
      filters
    });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Generación de Reportes
        </h2>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleGenerateReport} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Reporte
              </label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="maintenance">Mantenimiento</option>
                <option value="incidents">Incidentes</option>
                <option value="inventory">Inventario</option>
                <option value="usage">Uso de Laboratorios</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Laboratorio
              </label>
              <select
                name="laboratory"
                value={filters.laboratory}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Todos los laboratorios</option>
                <option value="lab1">Laboratorio 1</option>
                <option value="lab2">Laboratorio 2</option>
                <option value="lab3">Laboratorio 3</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fecha Inicio
              </label>
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Fecha Fin
              </label>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Estado
              </label>
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Todos los estados</option>
                <option value="pending">Pendiente</option>
                <option value="in_progress">En Progreso</option>
                <option value="resolved">Resuelto</option>
                <option value="cancelled">Cancelado</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Técnico
              </label>
              <select
                name="technician"
                value={filters.technician}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">Todos los técnicos</option>
                <option value="tech1">Téc. López</option>
                <option value="tech2">Téc. Ramírez</option>
                <option value="tech3">Téc. Silva</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Generar Reporte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}