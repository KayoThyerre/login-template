type InputProps = {
  type?: string;
  placeholder?: string;
};

export function Input({ type = "text", placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        border border-gray-300
        rounded-md
        p-2
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
      "
    />
  );
}
