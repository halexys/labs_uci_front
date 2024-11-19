import { useAuth } from '../context/AuthContext';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <main className="flex justify-center flex-1 bg-gray-50 p-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}