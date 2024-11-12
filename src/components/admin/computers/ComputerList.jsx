export default function ComputerList({ computers, onEdit, onDelete }) {
  const getStatusBadgeColor = (status) => {
    const colors = {
      operational: 'bg-green-100 text-green-800',
      maintenance: 'bg-yellow-100 text-yellow-800',
      repair: 'bg-red-100 text-red-800',
      inactive: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || colors.inactive;
  };

  const getStatusLabel = (status) => {
    const labels = {
      operational: 'Operativo',
      maintenance: 'En Mantenimiento',
      repair: 'En Reparación',
      inactive: 'Inactivo'
    };
    return labels[status] || 'Desconocido';
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <ul className="divide-y divide-gray-200">
        {computers.map((computer) => (
          <li key={computer.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    {computer.code}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {computer.laboratory}
                  </p>
                  <div className="mt-2 flex flex-col space-y-1">
                    <p className="text-sm text-gray-500">
                      Procesador: {computer.specs.processor}
                    </p>
                    <p className="text-sm text-gray-500">
                      RAM: {computer.specs.ram}
                    </p>
                    <p className="text-sm text-gray-500">
                      Almacenamiento: {computer.specs.storage}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(computer)}
                    className="px-3 py-1 text-sm text-indigo-600 hover:text-indigo-900 focus:outline-none"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(computer.id)}
                    className="px-3 py-1 text-sm text-red-600 hover:text-red-900 focus:outline-none"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeColor(
                    computer.status
                  )}`}
                >
                  {getStatusLabel(computer.status)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}