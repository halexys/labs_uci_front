import { useState, useEffect } from 'react';

export default function ComputerForm({ computer, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    code: '',
    laboratory: '',
    specs: {
      processor: '',
      ram: '',
      storage: ''
    },
    status: 'operational'
  });

  useEffect(() => {
    if (computer) {
      setFormData(computer);
    }
  }, [computer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('specs.')) {
      const specField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        specs: {
          ...prev.specs,
          [specField]: value
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
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">
            Código
          </label>
          <input
            type="text"
            name="code"
            id="code"
            required
            value={formData.code}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="laboratory" className="block text-sm font-medium text-gray-700">
            Laboratorio
          </label>
          <select
            name="laboratory"
            id="laboratory"
            required
            value={formData.laboratory}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Seleccionar laboratorio</option>
            <option value="Laboratorio 1">Laboratorio 1</option>
            <option value="Laboratorio 2">Laboratorio 2</option>
            <option value="Laboratorio 3">Laboratorio 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="specs.processor" className="block text-sm font-medium text-gray-700">
            Procesador
          </label>
          <input
            type="text"
            name="specs.processor"
            id="specs.processor"
            required
            value={formData.specs.processor}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="specs.ram" className="block text-sm font-medium text-gray-700">
            RAM
          </label>
          <input
            type="text"
            name="specs.ram"
            id="specs.ram"
            required
            value={formData.specs.ram}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="specs.storage" className="block text-sm font-medium text-gray-700">
            Almacenamiento
          </label>
          <input
            type="text"
            name="specs.storage"
            id="specs.storage"
            required
            value={formData.specs.storage}
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
            <option value="operational">Operativo</option>
            <option value="maintenance">En Mantenimiento</option>
            <option value="repair">En Reparación</option>
            <option value="inactive">Inactivo</option>
          </select>
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
          {computer ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  );
}