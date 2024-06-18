import { Link } from 'react-router-dom';
import netcraftLogo from "../../assets/netcraft-logo.png";

const Navigation = () => {
  return (
    <div className='navigation'>
      <Link className='nc-logo' to={'/'}><img src={netcraftLogo} /></Link>
      <ul>
        <li>
          
        </li>
      </ul>
    </div>
  )
}

export default Navigation;