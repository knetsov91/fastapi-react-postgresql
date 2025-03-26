import {Link} from 'react-router';
import Register from '../Auth/Register';
import { useAuth } from '../../context/authContext';

const Navbar = () => {

    const {authToken} = useAuth()
    let email;
    if (authToken) {
      email = JSON.parse(atob(authToken.split(".")[1])).email

    }
    console.log(email);
    
    return (
        <>
        <ul>
          <li>
            <Link to="/register"> Register</Link>
            <Link to="/login"> Login</Link>
            <Link to="/users"> Users</Link>
            <Link to="/logout"> Logout</Link>
          </li>  
        </ul>
        {email && <p>Hello {email }<b></b></p> }
        </>
    );
        
}

export default Navbar;