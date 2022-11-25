import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import YTLogo from 'assets/images/YouTube_Logo.svg';

const MenuAndLogo = ({ menuHandler }) => (
  <div className='navigation-icons-group'>
    <button type='button' onClick={menuHandler}>
      <FaBars size={20} />
    </button>
    <Link to='/'>
      <img src={YTLogo} alt='Youtube logo' className='max-h-6' />
    </Link>
  </div>
);

export default MenuAndLogo;
