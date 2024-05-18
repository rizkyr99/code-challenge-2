interface ButtonProps {
  children: React.ReactNode;
  variant: 'white' | 'black' | 'green';
  isLarge?: boolean;
  className?: string;
}

const buttonVariants = {
  white: 'bg-white text-black',
  black: 'bg-black text-white',
  green: 'bg-light-green',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  isLarge,
  className,
}) => {
  return (
    <button
      className={`${
        isLarge ? 'pr-5 pl-3' : 'px-4'
      } py-2.5 flex items-center gap-3 text-lg rounded-full ${
        buttonVariants[variant]
      } ${className}`}>
      {children}
    </button>
  );
};

export default Button;
