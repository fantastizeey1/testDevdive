export const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-[150px] ${className}`}
    >
      {children}
    </div>
  );
};
