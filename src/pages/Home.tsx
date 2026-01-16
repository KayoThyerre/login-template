import { PrivateLayout } from "../layouts/PrivateLayout";

export function Home() {
  return (
    <PrivateLayout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Dashboard
      </h2>

      <p className="text-gray-600">
        Bem-vindo ao painel inicial do sistema.
      </p>
    </PrivateLayout>
  );
}
