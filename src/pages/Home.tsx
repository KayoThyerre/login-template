import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Dashboard
        </h2>
        <p className="text-sm text-gray-500">
          Visão geral do sistema
        </p>
      </div>

      {/* Conteúdo das sub-rotas */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <Outlet />
      </div>
    </div>
  );
}
