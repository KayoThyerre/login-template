import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type PrivateLayoutProps = {
  children: React.ReactNode;
};

export function PrivateLayout({ children }: PrivateLayoutProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function  handleLogout() {
    logout();
    navigate("/", { replace: true });
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-blue-600">
            Auth Template
          </h1>

          <button onClick={handleLogout} className="text-sm text-gray-600 hover:text-blue-600 transition">
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
