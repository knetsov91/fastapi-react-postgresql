import {Link} from 'react-router';
import Register from '../Auth/Register';

const Navbar = () => {


    return (
        <>
        <ul>
          <li>
            <Link to="/register"> Register</Link>
            <Link to="/login"> Login</Link>
            <Link to="/users"> Users</Link>
          </li>  
        </ul>
    
        </>
    );
        
}

export default Navbar;