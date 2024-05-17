interface ButtonProps {
  children: React.ReactNode;
  variant: 'white' | 'black' | 'green';
  isLarge?: boolean;
}

const buttonVariants = {
  white: 'bg-white',
  black: 'bg-black text-white',
  green: 'bg-light-green',
};

const Button: React.FC<ButtonProps> = ({ children, variant, isLarge }) => {
  return (
    <button
      className={`${
        isLarge ? 'pr-5 pl-3' : 'px-4'
      } py-2.5 flex items-center gap-3 text-lg rounded-full ${
        buttonVariants[variant]
      }`}>
      {children}
    </button>
  );
};

export default Button;
