import { useAuth } from '../context/AuthContext';
import DocenteDashboard from './docente/DocenteDashboard';
import AdminDashboard from './admin/AdminDashboard';
import TecnicoDashboard from './tecnico/TecnicoDashboard';

const dashboards = {
  1: AdminDashboard,
  2: DocenteDashboard,
  3: TecnicoDashboard
};

export default function WelcomeView({ role }) {
  const Dashboard = dashboards[role];
  return <Dashboard />;
}