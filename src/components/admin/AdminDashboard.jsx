import { useState, useEffect } from 'react';
import StatsOverview from './dashboard/StatsOverview';
import RecentActivity from './dashboard/RecentActivity';
import NotificationPanel from './dashboard/NotificationPanel';
import { API_URL } from '../../config/constants';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalWorkers: 0,
    totalDocentes: 0,
    totalLabs: 0,
    totalComputers: 0,
    pendingRequests: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    
    const fetchDashboard = async () => {
      try {
        // Fetch users
        const responseDashboard = await fetch(`${API_URL}/admin/dashboard`);
        if (!responseDashboard.ok) {
          throw new Error('Failed to fetch dashboard');
        }
        const dashboardData = await responseDashboard.json();
        
        
        setStats({
          totalWorkers: dashboardData.totalWorkers,
          totalDocentes: dashboardData.totalDocentes,
          totalLabs: dashboardData.totalLabs,
          totalComputers: dashboardData.totalComputers,
          pendingRequests: dashboardData.pendingRequests
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDashboard();

    setRecentActivity([
      {
        id: 1,
        type: 'request',
        description: 'Nueva solicitud de reparación - Lab 3, PC-045',
        timestamp: new Date().toISOString()
      },
      // Add more activities...
    ]);

    setNotifications([
      {
        id: 1,
        type: 'warning',
        message: '3 computadoras requieren mantenimiento urgente',
        timestamp: new Date().toISOString()
      },
      // Add more notifications...
    ]);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <StatsOverview stats={stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={recentActivity} />
        <NotificationPanel notifications={notifications} />
      </div>
    </div>
  );
}