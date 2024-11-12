// api.js
import AdminView from '../views/AdminView';
import DocenteView from '../views/DocenteView';
import TecnicoView from '../views/TecnicoView';

export const roleComponents = {
  'Administrador': AdminView,
  'Docente': DocenteView,
  'Tecnico': TecnicoView,
};

export const fetchUserRole = async (roleId) => {
  try {
    const response = await fetch("http://localhost:8080/rolls");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    const userRole = data.find(roll => roll.id_roll === roleId);
    return userRole ? userRole.role_name : null;
  } catch (error) {
    console.error('Error fetching the user role:', error);
    throw error;
  }
};
