import { useState } from 'react';
import DocenteList from './docentes/DocenteList';
import DocenteForm from './docentes/DocenteForm';

export default function DocenteManagement() {
  const [isAddingDocente, setIsAddingDocente] = useState(false);
  const [selectedDocente, setSelectedDocente] = useState(null);
  const [docentes, setDocentes] = useState([
    {
      id: 1,
      name: 'Ana Martínez',
      email: 'ana.martinez@example.com',
      phone: '123-456-7890',
      department: 'Informática',
      status: 'active'
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      email: 'carlos.ruiz@example.com',
      phone: '098-765-4321',
      department: 'Sistemas',
      status: 'active'
    }
  ]);

  const handleAddDocente = (docenteData) => {
    setDocentes([...docentes, { ...docenteData, id: Date.now() }]);
    setIsAddingDocente(false);
  };

  const handleEditDocente = (docenteData) => {
    setDocentes(docentes.map(t => t.id === docenteData.id ? docenteData : t));
    setSelectedDocente(null);
  };

  const handleDeleteDocente = (docenteId) => {
    setDocentes(docentes.filter(t => t.id !== docenteId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Gestión de Docentes
        </h2>
        <button
          onClick={() => setIsAddingDocente(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Agregar Docente
        </button>
      </div>

      {(isAddingDocente || selectedDocente) && (
        <div className="mb-6">
          <DocenteForm
            docente={selectedDocente}
            onSubmit={selectedDocente ? handleEditDocente : handleAddDocente}
            onCancel={() => {
              setIsAddingDocente(false);
              setSelectedDocente(null);
            }}
          />
        </div>
      )}

      <DocenteList
        docentes={docentes}
        onEdit={setSelectedDocente}
        onDelete={handleDeleteDocente}
      />
    </div>
  );
}