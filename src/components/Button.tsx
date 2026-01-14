type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
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
