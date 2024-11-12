export default function LabList({ labs, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <ul className="divide-y divide-gray-200">
        {labs.map((lab) => (
          <li key={lab.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-indigo-600 truncate">
                    {lab.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Capacidad: {lab.capacity} estudiantes • {lab.location}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {lab.equipment.computers} computadoras
                    </span>
                    {lab.equipment.projector && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Proyector
                      </span>
                    )}
                    {lab.equipment.printer && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Impresora
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(lab)}
                    className="px-3 py-1 text-sm text-indigo-600 hover:text-indigo-900 focus:outline-none"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(lab.id)}
                    className="px-3 py-1 text-sm text-red-600 hover:text-red-900 focus:outline-none"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    lab.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {lab.status === 'active' ? 'Activo' : 'Inactivo'}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}