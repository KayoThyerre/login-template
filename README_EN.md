
# 📘 README — **EN**

# Auth Template – React + TypeScript

Authentication and dashboard template built with **React**, focused on **clean architecture**, **reusability**, and **real-world project foundations**.

This project was designed to be a **professional starter template**, ideal for freelance projects and scalable applications.

---

## ✨ Features

- Mock login
- Functional logout
- Session persistence (localStorage)
- Public and private routes
- Public layout (Login)
- Private layout (Dashboard)
- Responsive sidebar
- Collapsible sidebar (desktop)
- Header with avatar and mock user
- Backend-ready architecture

---

## 🧠 Architectural Decisions

- **React Context API** for global authentication state
- **User object as the source of truth**, not a boolean
- `isAuthenticated` derived from user state
- Lazy state initialization for persistence
- Layouts separated from pages
- Reusable UI components
- Responsiveness designed from the start

---

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS v4
- localStorage
- Context API

---

## 📂 Folder Structure

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

## 🔐 Authentication Flow

1. User accesses `/`
2. Clicks **Login**
3. Mock user is created
4. Global state is updated
5. Data is saved to localStorage
6. User is redirected to `/home`
7. Private routes are unlocked
8. Logout clears state and storage

---

## ▶️ Running the project

```bash
npm install
npm run dev
http://localhost:5173
