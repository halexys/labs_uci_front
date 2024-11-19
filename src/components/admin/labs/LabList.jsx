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
                    Laboratorio {lab.num_lab}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {lab.location}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {lab.computers} computadoras
                    </span>

                    {lab.lab_type === 'Docencia' && (
                      <><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {lab.lab_type}
                        </span></>
                    )}
                    {lab.lab_type === 'Produccion' && (
                      <><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {lab.lab_type}
                        </span></>
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
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}