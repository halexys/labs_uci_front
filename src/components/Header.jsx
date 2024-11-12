import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { userData, logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    logout();
  };

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Management System</h1>
          </div>
          
          {userData && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}