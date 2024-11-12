import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { API_URL } from '../config/constants';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('jwt') || sessionStorage.getItem('jwt'));
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async (roleId) => {
      try {
        const response = await fetch(`${API_URL}/rolls`);
        if (!response.ok) throw new Error('Failed to fetch roles');
        const roles = await response.json();
        const role = roles.find(r => r.id_roll === roleId);
        return role ? role.role_name : null;
      } catch (error) {
        console.error('Error fetching role:', error);
        return null;
      }
    };

    if (token) {
      try {
        const decodedData = jwtDecode(token);
        if (decodedData.exp * 1000 < Date.now()) {
          localStorage.removeItem('jwt');
          sessionStorage.removeItem('jwt');
          setToken(null);
          setUserData(null);
          setUserRole(null);
        } else {
          setUserData(decodedData);
          fetchUserRole(decodedData.role).then(roleName => setUserRole(roleName));
        }
      } catch (error) {
        localStorage.removeItem('jwt');
        sessionStorage.removeItem('jwt');
        setToken(null);
        setUserData(null);
        setUserRole(null);
      }
    }
  }, [token]);

  const login = (jwt, decodedData, rememberMe = false) => {
    if (rememberMe) {
      localStorage.setItem('jwt', jwt);
    } else {
      sessionStorage.setItem('jwt', jwt);
    }
    setToken(jwt);
    setUserData(decodedData);
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    sessionStorage.removeItem('jwt');
    setToken(null);
    setUserData(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, userData, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};