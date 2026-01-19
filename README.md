# Auth Template – React + TypeScript

Template de autenticação e dashboard desenvolvido em **React**, com foco em **arquitetura limpa**, **reutilização** e **base para freelas e projetos futuros**.

Este projeto foi pensado para servir como um **esqueleto profissional**, facilitando a criação de sistemas com login, rotas protegidas e layout administrativo.

---

## ✨ Funcionalidades

- Login simulado (mock)
- Logout funcional
- Persistência de sessão (localStorage)
- Rotas públicas e privadas
- Layout público (Login)
- Layout privado (Dashboard)
- Sidebar responsiva
- Sidebar colapsável no desktop
- Header com avatar e usuário mockado
- Estrutura preparada para backend real

---

## 🧠 Decisões de Arquitetura

- **React Context API** para controle global de autenticação
- **User como fonte da verdade**, não boolean
- `isAuthenticated` derivado do estado do usuário
- Inicialização do estado usando **lazy initialization** no `useState`
- Layouts separados de páginas
- Componentização reutilizável
- Responsividade pensada desde o início

---

## 🛠️ Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS v4
- localStorage (persistência)
- Context API

---

## 📂 Estrutura de Pastas

src/

├── components/
│ ├── Button.tsx
│ ├── Input.tsx
│ └── AuthCard.tsx
│
├── contexts/
│ └── AuthContext.tsx
│
├── layouts/
│ ├── PublicLayout.tsx
│ └── PrivateLayout.tsx
│
├── pages/
│ ├── Login.tsx
│ └── Home.tsx
│
├── routes/
│ ├── AppRoutes.tsx
│ └── PrivateRoute.tsx
│
├── App.tsx
├── main.tsx
└── index.css


---

## 🔐 Fluxo de Autenticação

1. Usuário acessa `/`
2. Clica em **Entrar**
3. Usuário mockado é criado
4. Estado global é atualizado
5. Dados são persistidos no localStorage
6. Usuário é redirecionado para `/home`
7. Rotas privadas são liberadas
8. Logout limpa estado e storage

---

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev
http://localhost:5173
```



📌 Observações Importantes

O projeto utiliza StrictMode do React

A persistência de sessão foi implementada corretamente para React 18

Estrutura preparada para crescimento sem refatoração pesada

👨‍💻 Autor

Desenvolvido por Kayo
Projeto criado com foco em aprendizado profundo e boas práticas.