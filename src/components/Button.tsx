type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button
      className="
        w-full
        bg-blue-600
        text-white
        rounded-md
        py-2
        hover:bg-blue-700
        transition
      "
    >
      {children}
    </button>
  );
}
