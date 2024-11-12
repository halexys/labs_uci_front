import { useState } from 'react';
import WorkerList from './workers/WorkerList';
import WorkerForm from './workers/WorkerForm';

export default function WorkerManagement() {
  const [isAddingWorker, setIsAddingWorker] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [workers, setWorkers] = useState([
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      phone: '123-456-7890',
      specialization: 'Hardware',
      status: 'active'
    },
    {
      id: 2,
      name: 'María García',
      email: 'maria.garcia@example.com',
      phone: '098-765-4321',
      specialization: 'Software',
      status: 'active'
    }
  ]);

  const handleAddWorker = (workerData) => {
    setWorkers([...workers, { ...workerData, id: Date.now() }]);
    setIsAddingWorker(false);
  };

  const handleEditWorker = (workerData) => {
    setWorkers(workers.map(w => w.id === workerData.id ? workerData : w));
    setSelectedWorker(null);
  };

  const handleDeleteWorker = (workerId) => {
    setWorkers(workers.filter(w => w.id !== workerId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Gestión de Trabajadores
        </h2>
        <button
          onClick={() => setIsAddingWorker(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Agregar Trabajador
        </button>
      </div>

      {(isAddingWorker || selectedWorker) && (
        <div className="mb-6">
          <WorkerForm
            worker={selectedWorker}
            onSubmit={selectedWorker ? handleEditWorker : handleAddWorker}
            onCancel={() => {
              setIsAddingWorker(false);
              setSelectedWorker(null);
            }}
          />
        </div>
      )}

      <WorkerList
        workers={workers}
        onEdit={setSelectedWorker}
        onDelete={handleDeleteWorker}
      />
    </div>
  );
}