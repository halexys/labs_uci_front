import LoginForm from './components/LoginForm';
import Layout from './components/Layout';
import AdminView from './views/AdminView';
import DocenteView from './views/DocenteView';
import TecnicoView from './views/TecnicoView';
import { useAuth } from './context/AuthContext';
import React from 'react';

export default function App() {
  const { userData, userRole } = useAuth();

  const renderView = () => {
    if (!userData || !userRole) {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <LoginForm />
            </div>
          </div>
        </div>
      );
    }

    switch (userRole) {
      case 'Administrador':
        return <AdminView />;
      case 'Docente':
        return <DocenteView />;
      case 'Tecnico':
        return <TecnicoView />;
      default:
        return <div>Access Denied</div>;
    }
  };

  return <Layout>{renderView()}</Layout>;
}