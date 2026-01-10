import { PublicLayout } from "../layouts/PublicLayout";

export function Login() {
  return (
    <PublicLayout>
      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="E-mail"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Senha"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition">
          Entrar
        </button>
      </div>
    </PublicLayout>
  );
}

