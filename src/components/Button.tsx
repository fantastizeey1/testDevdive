import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  loading = false,
  ...props
}) => {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600  hover:bg-blue-700 shadow-lg hover:shadow-xl",
    secondary: "bg-orange-500  hover:bg-orange-600",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
