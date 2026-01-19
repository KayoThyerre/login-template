import { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

type SidebarItem = {
  label: string;
  path: string;
  icon: string;
};

const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: "Dashboard", path: "/home", icon: "📊" },
  { label: "Usuários", path: "/home/users", icon: "👤" },
  { label: "Relatórios", path: "/reports", icon: "📈" },
  { label: "Configurações", path: "/settings", icon: "⚙️" },
];

type HeaderAction = {
  label: string;
  onClick: () => void;
  variant?: "default" | "danger";
};

export function PrivateLayout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  const headerActions: HeaderAction[] = [
    {
      label: "Sair",
      onClick: handleLogout,
      variant: "danger",
    },
  ];

  function isActive(path: string) {
    return location.pathname === path;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* HEADER */}
      <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          {/* Mobile menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-gray-600"
          >
            ☰
          </button>

          <h1 className="text-lg font-semibold text-blue-600">
            Auth Template
          </h1>

          {/* Collapse button */}
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
              {user?.name}
            </p>
            <p className="text-xs text-gray-500">
              {user?.role}
            </p>
          </div>

          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            {user?.name.charAt(0)}
          </div>

          <div className="flex items-center gap-2">
            {headerActions.map((action) => (
              <button
                key={action.label}
                onClick={action.onClick}
                className={`text-sm transition ${
                  action.variant === "danger"
                    ? "text-gray-500 hover:text-red-500"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1 relative">
        {/* Overlay mobile */}
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
            {SIDEBAR_ITEMS.map((item) => {
              const active = isActive(item.path);

              return (
                <div key={item.path} className="relative group">
                  <button
                    onClick={() => navigate(item.path)}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-md transition w-full
                      ${
                        active
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }
                    `}
                  >
                    <span>{item.icon}</span>
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </button>

                  {sidebarCollapsed && (
                    <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-gray-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      {item.label}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm p-6 h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
