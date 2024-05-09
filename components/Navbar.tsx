import Image from 'next/image';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Image src={logo} width={40} height={40} alt='logo' />
      </nav>
    </header>
  );
};

export default Navbar;
