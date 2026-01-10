type PublicLayoutProps = {
  children: React.ReactNode;
};

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}
