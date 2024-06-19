import { Link } from 'react-router-dom';
import netcraftLogo from "../../assets/nc-lg.webp";

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <header className='navigation'>
      <Link className='nc-logo' to={'/'}><img src={netcraftLogo} /></Link>
      <ul className='nav-links-container'>
        <li>
          VOIP Systems
        </li>
        <li>
          Training
        </li>
        <li>
          Internet Connections
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
      </ul>
    </header>
  )
}

export default Navigation;