import { useState } from 'react';
import ComputerList from './computers/ComputerList';
import ComputerForm from './computers/ComputerForm';

export default function ComputerManagement() {
  const [isAddingComputer, setIsAddingComputer] = useState(false);
  const [selectedComputer, setSelectedComputer] = useState(null);
  const [computers, setComputers] = useState([
    {
      id: 1,
      code: 'PC-001',
      laboratory: 'Laboratorio 1',
      specs: {
        processor: 'Intel i5 11th Gen',
        ram: '16GB',
        storage: '512GB SSD'
      },
      status: 'operational'
    },
    {
      id: 2,
      code: 'PC-002',
      laboratory: 'Laboratorio 1',
      specs: {
        processor: 'Intel i7 11th Gen',
        ram: '32GB',
        storage: '1TB SSD'
      },
      status: 'maintenance'
    }
  ]);

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