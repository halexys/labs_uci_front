import { useState, useEffect } from 'react';
import DocenteList from './docentes/DocenteList';
import DocenteForm from './docentes/DocenteForm';
import { API_URL } from '../../config/constants';

export default function DocenteManagement() {
  const [isAddingDocente, setIsAddingDocente] = useState(false);
  const [selectedDocente, setSelectedDocente] = useState(null);
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        // Fetch users
        const responseDocentes = await fetch(`${API_URL}/admin/all_doc`);
        if (!responseDocentes.ok) {
          throw new Error('Failed to fetch users');
        }
        const docentesData = await responseDocentes.json();

        setDocentes(docentesData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDocentes();
  }, []);

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