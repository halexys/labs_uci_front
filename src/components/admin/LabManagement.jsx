import { useEffect, useState } from 'react';
import LabList from './labs/LabList';
import LabForm from './labs/LabForm';
import { API_URL } from '../../config/constants';

export default function LabManagement() {
  const [isAddingLab, setIsAddingLab] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        // Fetch labs
        const responseLabs = await fetch(`${API_URL}/admin/all_labs`);
        if (!responseLabs.ok) {
          throw new Error('Failed to fetch labs');
        }
        const labsData = await responseLabs.json();

        setLabs(labsData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchLabs();
  }, []);

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