export default function StatsOverview({ stats }) {
  const statItems = [
    {
      label: 'Trabajadores',
      value: stats.totalWorkers,
      icon: 'users',
      color: 'bg-blue-500'
    },
    {
      label: 'Docentes',
      value: stats.totalTeachers,
      icon: 'academic-cap',
      color: 'bg-green-500'
    },
    {
      label: 'Laboratorios',
      value: stats.totalLabs,
      icon: 'office-building',
      color: 'bg-purple-500'
    },
    {
      label: 'Computadoras',
      value: stats.totalComputers,
      icon: 'desktop-computer',
      color: 'bg-yellow-500'
    },
    {
      label: 'Solicitudes Pendientes',
      value: stats.pendingRequests,
      icon: 'clipboard-list',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {statItems.map((item) => (
        <div
          key={item.label}
          className="bg-white rounded-lg shadow p-6 flex items-center space-x-4"
        >
          <div className={`${item.color} p-3 rounded-full`}>
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500">{item.label}</div>
            <div className="text-2xl font-semibold text-gray-900">
              {item.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}