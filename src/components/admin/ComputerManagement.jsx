import { useState, useEffect } from 'react';
import ComputerList from './computers/ComputerList';
import ComputerForm from './computers/ComputerForm';
import { API_URL } from '../../config/constants';

export default function ComputerManagement() {
  const [isAddingComputer, setIsAddingComputer] = useState(false);
  const [selectedComputer, setSelectedComputer] = useState(null);
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    const fetchAllPcs = async () => {
      try {
        // Fetch Pcs
        const responsePcs = await fetch(`${API_URL}/admin/all_pc`);
        if (!responsePcs.ok) {
          throw new Error('Failed to fetch pcs');
        }
        const pcsData = await responsePcs.json();


        // Set users and roles
        setComputers(pcsData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllPcs();
  }, []);

  const handleAddComputer = (computerData) => {
    setComputers([...computers, { ...computerData, id: Date.now() }]);
    setIsAddingComputer(false);
  };

  const handleEditComputer = (computerData) => {
    setComputers(computers.map(c => c.id === computerData.id ? computerData : c));
    setSelectedComputer(null);
  };

  const handleDeleteComputer = (computerId) => {
    setComputers(computers.filter(c => c.id !== computerId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Gestión de Computadoras
        </h2>
        <button
          onClick={() => setIsAddingComputer(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Agregar Computadora
        </button>
      </div>

      {(isAddingComputer || selectedComputer) && (
        <div className="mb-6">
          <ComputerForm
            computer={selectedComputer}
            onSubmit={selectedComputer ? handleEditComputer : handleAddComputer}
            onCancel={() => {
              setIsAddingComputer(false);
              setSelectedComputer(null);
            }}
          />
        </div>
      )}

      <ComputerList
        computers={computers}
        onEdit={setSelectedComputer}
        onDelete={handleDeleteComputer}
      />
    </div>
  );
}