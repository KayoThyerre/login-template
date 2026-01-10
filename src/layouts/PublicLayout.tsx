type PublicLayoutProps = {
  children: React.ReactNode;
};

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h1 className="text-2xl font-semibold text-blue-600 text-center mb-6">
          Auth Template
        </h1>

        {children}
      </div>
    </div>
  );
}
