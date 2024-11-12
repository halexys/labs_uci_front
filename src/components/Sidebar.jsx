export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { name: 'Users', icon: 'users' },
    { name: 'Docentes', icon: 'academic-cap' },
    { name: 'Laboratorios', icon: 'beaker' },
    { name: 'Computadoras', icon: 'desktop-computer' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl z-50">
        <div className="h-full flex flex-col py-6">
          <div className="px-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
            <button
              onClick={onClose}
              className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-6 flex-1 px-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}