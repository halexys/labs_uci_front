import { useState, useEffect } from 'react';

export default function LabForm({ lab, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    capacity: '',
    location: '',
    status: 'active',
    equipment: {
      computers: 0,
      projector: false,
      printer: false
    }
  });

  useEffect(() => {
    if (lab) {
      setFormData(lab);
    }
  }, [lab]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      capacity: parseInt(formData.capacity, 10),
      equipment: {
        ...formData.equipment,
        computers: parseInt(formData.equipment.computers, 10)
      }
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('equipment.')) {
      const equipmentField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        equipment: {
          ...prev.equipment,
          [equipmentField]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre del Laboratorio
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
            Capacidad (estudiantes)
          </label>
          <input
            type="number"
            name="capacity"
            id="capacity"
            required
            min="1"
            value={formData.capacity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Ubicación
          </label>
          <input
            type="text"
            name="location"
            id="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <select
            name="status"
            id="status"
            required
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="active">Activo</option>
            <option value="inactive">Inactivo</option>
          </select>
        </div>

        <div>
          <label htmlFor="equipment.computers" className="block text-sm font-medium text-gray-700">
            Número de Computadoras
          </label>
          <input
            type="number"
            name="equipment.computers"
            id="equipment.computers"
            required
            min="0"
            value={formData.equipment.computers}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="equipment.projector"
              id="equipment.projector"
              checked={formData.equipment.projector}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="equipment.projector" className="ml-2 block text-sm text-gray-700">
              Proyector
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="equipment.printer"
              id="equipment.printer"
              checked={formData.equipment.printer}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="equipment.printer" className="ml-2 block text-sm text-gray-700">
              Impresora
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {lab ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  );
}