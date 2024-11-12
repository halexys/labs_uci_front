export default function DocenteList({ docentes, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {docentes.map((docente) => (
          <li key={docente.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    {docente.name}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(docente)}
                    className="px-3 py-1 text-sm text-indigo-600 hover:text-indigo-900 focus:outline-none"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(docente.id)}
                    className="px-3 py-1 text-sm text-red-600 hover:text-red-900 focus:outline-none"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    docente.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {docente.status === 'active' ? 'Activo' : 'Inactivo'}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}