[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kayothyerre/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KayoThyerre)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/kayoalarcon/)

# Auth Template Dashboard

Este projeto é um **template de autenticação e dashboard administrativo**, criado com foco em **reutilização**, **boas práticas de arquitetura** e **escalabilidade**.

O objetivo é servir como base para projetos reais, freelas e portfólio, evitando retrabalho em futuros sistemas que exigem login, layout privado e navegação estruturada.

---

## ✨ Funcionalidades

- Autenticação mockada (login e logout)
- Proteção de rotas privadas
- Layout privado com:
  - Header
  - Sidebar colapsável
  - Conteúdo dinâmico
- Rotas aninhadas (Nested Routes)
- Página Dashboard
- Página Usuários (exemplo funcional)
- Item ativo inteligente na sidebar
- Tooltip na sidebar colapsada
- Responsivo (desktop e mobile)
- Estrutura preparada para backend futuro

---

## 🧠 Conceitos aplicados

- React Router (rotas privadas e aninhadas)
- Layout como rota (`<Outlet />`)
- Componentes dirigidos por dados
- Separação clara entre layout, páginas e lógica
- Tipagem com TypeScript
- Arquitetura escalável para dashboards

---

## 🗂️ Estrutura de pastas

src/

├── assets/

├── components/
 ├── AuthCard.tsx
 ├── Button.tsx
 └── Input.tsx

├── contexts/
 └── AuthContext.tsx

├── layouts/
 ├── PrivateLayout.tsx
 └── PublicLayout.tsx

├── pages/
 ├── Home.tsx
 ├── Dashboard.tsx
 ├── Users.tsx
 └── Login.tsx

├── routes/
 ├── AppRoutes.tsx
 └── PrivateRoute.tsx

├── styles/
├── App.tsx
├── main.tsx
└── index.css


---

## 🚀 Tecnologias utilizadas

- React
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Node.js (ambiente de desenvolvimento)

---

## ▶️ Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar o projeto
npm run dev
````

## 🔐 Autenticação

A autenticação é mockada, com estado gerenciado via AuthContext.
O projeto está preparado para integração futura com backend (JWT, API REST, etc).

## 📌 Observações

Este projeto foi desenvolvido com foco em aprendizado profundo de arquitetura frontend e pode ser facilmente expandido para:

Backend real

Controle de permissões por role

CRUDs

Breadcrumbs

Persistência de estado

## 👨‍💻 Autor

Desenvolvido por Kayo
Projeto voltado para portfólio, estudos avançados e freelas.