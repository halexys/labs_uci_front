import { useState } from 'react';

export default function RepairRequestForm() {
  const [formData, setFormData] = useState({
    computerId: '',
    laboratory: '',
    description: '',
    priority: 'normal'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Reportar Nueva Avería</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Laboratorio
          </label>
          <select
            name="laboratory"
            value={formData.laboratory}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Seleccionar Laboratorio</option>
            <option value="lab1">Laboratorio 1</option>
            <option value="lab2">Laboratorio 2</option>
            <option value="lab3">Laboratorio 3</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Computadora
          </label>
          <input
            type="text"
            name="computerId"
            value={formData.computerId}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Identificador de la computadora"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descripción del Problema
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Describe el problema detalladamente"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Prioridad
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="low">Baja</option>
            <option value="normal">Normal</option>
            <option value="high">Alta</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
}