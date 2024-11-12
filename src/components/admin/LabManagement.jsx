import { useState } from 'react';
import LabList from './labs/LabList';
import LabForm from './labs/LabForm';

export default function LabManagement() {
  const [isAddingLab, setIsAddingLab] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);
  const [labs, setLabs] = useState([
    {
      id: 1,
      name: 'Laboratorio 1',
      capacity: 30,
      location: 'Edificio A, Piso 2',
      status: 'active',
      equipment: {
        computers: 30,
        projector: true,
        printer: true
      }
    },
    {
      id: 2,
      name: 'Laboratorio 2',
      capacity: 25,
      location: 'Edificio B, Piso 1',
      status: 'active',
      equipment: {
        computers: 25,
        projector: true,
        printer: false
      }
    }
  ]);

  const handleAddLab = (labData) => {
    setLabs([...labs, { ...labData, id: Date.now() }]);
    setIsAddingLab(false);
  };

  const handleEditLab = (labData) => {
    setLabs(labs.map(lab => lab.id === labData.id ? labData : lab));
    setSelectedLab(null);
  };

  const handleDeleteLab = (labId) => {
    setLabs(labs.filter(lab => lab.id !== labId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Gestión de Laboratorios
        </h2>
        <button
          onClick={() => setIsAddingLab(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Agregar Laboratorio
        </button>
      </div>

      {(isAddingLab || selectedLab) && (
        <div className="mb-6">
          <LabForm
            lab={selectedLab}
            onSubmit={selectedLab ? handleEditLab : handleAddLab}
            onCancel={() => {
              setIsAddingLab(false);
              setSelectedLab(null);
            }}
          />
        </div>
      )}

      <LabList
        labs={labs}
        onEdit={setSelectedLab}
        onDelete={handleDeleteLab}
      />
    </div>
  );
}