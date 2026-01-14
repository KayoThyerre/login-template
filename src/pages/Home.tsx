import { PrivateLayout } from "../layouts/PrivateLayout";

export function Home() {
  return (
    <PrivateLayout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Bem-vindo 👋
      </h2>

      <p className="text-gray-600">
        Você está logado. Esta é a área inicial do sistema.
      </p>
    </PrivateLayout>
  );
}
