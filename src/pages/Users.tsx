export function Users() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header da página */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Usuários
        </h2>
        <p className="text-sm text-gray-500">
          Lista de usuários cadastrados no sistema
        </p>
      </div>

      {/* Card com tabela */}
      <div className="bg-white rounded-lg shadow-sm border">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                Nome
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                E-mail
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                Cargo
              </th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3">Kayo Dev</td>
              <td className="px-4 py-3">kayo@email.com</td>
              <td className="px-4 py-3">Administrador</td>
              <td className="px-4 py-3">
                <span className="text-green-600 font-medium">
                  Ativo
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3">Maria Silva</td>
              <td className="px-4 py-3">maria@email.com</td>
              <td className="px-4 py-3">Usuário</td>
              <td className="px-4 py-3">
                <span className="text-green-600 font-medium">
                  Ativo
                </span>
              </td>
            </tr>

            <tr>
              <td className="px-4 py-3">João Souza</td>
              <td className="px-4 py-3">joao@email.com</td>
              <td className="px-4 py-3">Usuário</td>
              <td className="px-4 py-3">
                <span className="text-red-500 font-medium">
                  Inativo
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
