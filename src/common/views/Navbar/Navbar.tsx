import { Link } from 'react-router-dom';
import { ReactComponent as Bars } from '../../../assets/svg/navbar/bars-solid.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className='wrapper'>
      <Bars height={20} width={20} />
      <Link to={'/'}>
        <img
          src='https://kstatic.googleusercontent.com/files/9f04faac24aed8bf8fb381029de951128d1d36373f89675265a6654d0c47b74b2d83a26b68b834ce2eea3bfe8001966f76895888138f135a81d099fc207c73bb'
          alt='forms icon'
        />
        <span>Google</span>
        <span>Fonts</span>
      </Link>
    </header>
  );
};

export default Navbar;
