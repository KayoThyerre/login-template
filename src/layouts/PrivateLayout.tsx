type PrivateLayoutProps = {
  children: React.ReactNode;
};

export function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        Área Logada
      </header>

      <main style={{ padding: "1rem" }}>
        {children}
      </main>
    </div>
  );
}
