const variants = {
  primary: "bg-secondary-500 text-neutral-950 hover:bg-secondary-400",
  dark: "bg-neutral-950 text-white hover:bg-neutral-800",
  outline: "border border-white text-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`label-m inline-flex h-11.5 items-center justify-center rounded-full px-6 transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
