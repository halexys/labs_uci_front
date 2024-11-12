export default function StatusSummary() {
  const stats = [
    { label: 'Solicitudes Pendientes', value: 3 },
    { label: 'En Progreso', value: 2 },
    { label: 'Resueltas', value: 15 },
    { label: 'Total Solicitudes', value: 20 }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                {stat.label}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                {stat.value}
              </dd>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}