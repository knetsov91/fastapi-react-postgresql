import {Link} from 'react-router';
import Register from './Register';

const Navbar = () => {


    return (
        <>
        <ul>
          <li>
            <Link to="/register"> Register</Link>
            <Link to="/login"> Login</Link>
          </li>  
        </ul>
    
        </>
    );
        
}

export default Navbar;