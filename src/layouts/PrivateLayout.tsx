import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";


type PrivateLayoutProps = {
  children: React.ReactNode;
};

export function PrivateLayout({ children }: PrivateLayoutProps) {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  function isActive(path: string) {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* HEADER */}
      <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
       <div className="flex items-center gap-3">
      {/* Mobile */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden text-gray-600"
      >
        ☰
      </button>

      <h1 className="text-lg font-semibold text-blue-600">
        Auth Template
      </h1>

      {/* Desktop collapse */}
      <button
        onClick={() => setSidebarCollapsed((prev) => !prev)}
        className="hidden md:flex text-gray-500 hover:text-blue-600 transition"
      >
        {sidebarCollapsed ? "➡️" : "⬅️"}
      </button>
    </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-800">
              Kayo Dev
            </p>
            <p className="text-xs text-gray-500">
              Administrador
            </p>
          </div>

          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            K
          </div>

          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-red-500 transition"
          >
            Sair
          </button>
        </div>
      </header>

      {/* CORPO */}
      <div className="flex flex-1 relative">
        {/* OVERLAY MOBILE */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/30 z-20 md:hidden"
          />
        )}

        {/* SIDEBAR */}
        <aside
          className={`
            fixed z-30 inset-y-0 left-0
            bg-white border-r px-4 py-6
            transform transition-all duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:static md:translate-x-0
            ${sidebarCollapsed ? "md:w-16" : "md:w-60"}
          `}
        >

          <nav className="flex flex-col gap-2">
            <button
              onClick={() => navigate("/home")}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-md transition
                ${
                  isActive("/home")
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <span>📊</span>
              {!sidebarCollapsed && <span>Dashboard</span>}
            </button>
            
            <button
              onClick={() => navigate("/users")}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-md transition
                ${
                  isActive("/users")
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <span>👤</span>
              {!sidebarCollapsed && <span>Usuários</span>}
            </button>

            <button
              onClick={() => navigate("/reports")}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-md transition
                ${
                  isActive("/reports")
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <span>📈</span>
              {!sidebarCollapsed && <span>Relatórios</span>}
            </button>


            <button
              onClick={() => navigate("/settings")}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-md transition
                ${
                  isActive("/settings")
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <span>⚙️</span>
              {!sidebarCollapsed && <span>Configurações</span>}
            </button>


          </nav>
        </aside>

        {/* CONTEÚDO */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm p-6 h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
