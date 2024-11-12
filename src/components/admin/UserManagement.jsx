import { useEffect, useState } from 'react';
import UserList from './users/UserList';
import UserForm from './users/UserForm';
import { API_URL } from '../../config/constants';

export default function UserManagement() {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  // Fetch users and roles from the API when the component mounts
  useEffect(() => {
    const fetchUsersAndRoles = async () => {
      try {
        // Fetch users
        const responseUsers = await fetch(`${API_URL}/user`);
        if (!responseUsers.ok) {
          throw new Error('Failed to fetch users');
        }
        const usersData = await responseUsers.json();

        // Fetch roles
        const responseRoles = await fetch(`${API_URL}/rolls`);
        if (!responseRoles.ok) {
          throw new Error('Failed to fetch roles');
        }
        const rolesData = await responseRoles.json();
        
        // Set users and roles
        setUsers(usersData);
        setRoles(rolesData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsersAndRoles();
  }, []);

  const getRoleName = (roleId) => {
    const role = roles.find(r => r.id_roll === roleId);
    return role ? role.role_name : 'Unknown';
  };

  const handleAddUser = (userData) => {
    setUsers([...users, { ...userData, id: Date.now() }]);
    setIsAddingUser(false);
  };

  const handleEditUser = (userData) => {
    setUsers(users.map(user => user.id === userData.id ? userData : user));
    setSelectedUser(null);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Gestión de Usuarios
        </h2>
        <button
          onClick={() => setIsAddingUser(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Agregar Usuario
        </button>
      </div>

      {(isAddingUser || selectedUser) && (
        <div className="mb-6">
          <UserForm
            user={selectedUser}
            onSubmit={selectedUser ? handleEditUser : handleAddUser}
            onCancel={() => {
              setIsAddingUser(false);
              setSelectedUser(null);
            }}
          />
        </div>
      )}

      <UserList
        users={users.map(user => {
          return { 
            ...user, 
            role: getRoleName(user.id_roll) // Map role ID to role name
          };
        })}
        onEdit={setSelectedUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}
